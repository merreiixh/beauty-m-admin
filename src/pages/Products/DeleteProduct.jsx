import { Link, useNavigate, useParams } from "react-router-dom";
import { PRODUCTS } from "../../utils/consts";
import { useEffect, useState } from "react";
import { a } from "../../services/axiosInstance";

function DeleteProduct() {

    const {id} = useParams()
    const navigate = useNavigate();

    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await a.get(`/products/${id}`);
                setProduct(res.data);
            } catch(error) {
                console.error("Error: ", error);
            }
        }
        fetchProducts();
    }, [id]);

    async function handleDelete() {
        event.preventDefault();
        try {
            await a.delete(`/products/${id}`);
            alert("Товар удален");
            navigate(PRODUCTS);
        } catch(error) {
            console.error("Error: ", error);
        }
    }

    return(
        <section class="block">
            <div class="container">
                <h1 class="title">Вы действительно хотите удалить товар "{product.name}"?</h1>
                <p class="mb-5">
                    Это действие приведет к потере всех данных, связанных с этими товарами. Пожалуйста, подтвердите свое решение.
                </p>
                <form class="actions-sm" onSubmit={handleDelete}>
                    <button type="submit" class="btn bg-danger">
                        Да
                    </button>
                    <Link to={PRODUCTS} class="btn bg-primary">
                        Нет
                    </Link>
                </form>
            </div>
        </section>
    );
}

export default DeleteProduct;