import { Link, useParams } from "react-router-dom";
import { ORDERS } from "../../utils/consts";
import { useEffect, useState } from "react";
import { a } from "../../services/axiosInstance";

function DetailOrder() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        async function fetchOrder() {
            try {
                const res = await a.get('/orders');
                const foundOrder = res.data.find(o => o.id === Number(id));
                setOrder(foundOrder);
            } catch (error) {
                console.error("Error: ", error);
            }
        }
        fetchOrder();
    }, [id]);

    if (!order) {
        return <p>Загрузка...</p>;
    }

    return (
        <section className="block">
            <div className="container">
                <Link to={ORDERS} className="btn bg-danger">Назад</Link>
                <h1 className="title">Детали заказа</h1>
                <div className="order-detail">
                    <p><strong>Имя клиента: </strong>{order.customer.name}</p>
                    <p><strong>Телефон клиента: </strong>{order.customer.phone}</p>
                    <p><strong>Город, адрес: </strong>{order.customer.city}, {order.customer.address}</p>

                    <div className="order-data">
                        <h2 className="title">Товары для заказа</h2>
                        <div className="order-data__list">
                            {order.items.map((item, index) => (
                                <p key={index}>
                                    {item.name}, количество: {item.quantity}, цена: {item.price} &#8376;, итого: {item.price * item.quantity} &#8376;
                                </p>
                            ))}
                        </div>
                    </div>

                    <h2 className="title">Итого: {order.totalPrice} &#8376;</h2>
                </div>
            </div>
        </section>
    );
}

export default DetailOrder;
