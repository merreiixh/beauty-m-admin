import { Link, useNavigate, useParams } from "react-router-dom";
import { ORDERS } from "../../utils/consts";
import { useEffect, useState } from "react";
import { a } from "../../services/axiosInstance";

function DeleteOrder() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        async function fetchOrder() {
            try {
                const res = await a.get('/orders');
                const foundOrder = res.data.find(o => o.id === Number(id));
                setOrder(foundOrder);
            } catch (error) {
                console.error("Ошибка при загрузке заказа: ", error);
            }
        }
        fetchOrder();
    }, [id]);

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await a.delete(`/orders/${id}`);
            alert("Заказ удалён");
            navigate(ORDERS);
        } catch (error) {
            console.error("Ошибка при удалении заказа: ", error);
        }
    };

    return (
        <section className="block">
            <div className="container">
                <h1 className="title">
                    Вы действительно хотите удалить заказ №{id} {order?.customer?.name ? `(${order.customer.name})` : ""}?
                </h1>
                <p className="mb-5">
                    Это действие приведёт к потере всех данных, связанных с этим заказом. Пожалуйста, подтвердите.
                </p>
                <form className="actions-sm" onSubmit={handleDelete}>
                    <button type="submit" className="btn bg-danger">
                        Да
                    </button>
                    <Link to={ORDERS} className="btn bg-primary">
                        Нет
                    </Link>
                </form>
            </div>
        </section>
    );
}

export default DeleteOrder;
