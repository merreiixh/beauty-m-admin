import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../../utils/consts";
import { useEffect, useState } from "react";
import { a } from "../../services/axiosInstance";

function ProductDetail() {
    const {id} = useParams();
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
    }, [id])

    return(
        <section class="block">
            <div class="container">
                <Link to={PRODUCTS} class="btn bg-danger">Назад</Link>
                <h1 class="title">Детали товара</h1>
                <div class="product-detail">
                    <img src={product.image} alt={product.name} class="product-img" />
                    <div class="product-detail__content">
                        <h2 class="product-detail__title">{product.name}</h2>
                        <p>Цена: {product.price} &#8376;</p>
                        <p>Описание: {product.description}</p>
                        <p>Категория: <span class="category-badge">{product.category}</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;