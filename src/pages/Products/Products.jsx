import { Link } from "react-router-dom";
import ProductList from "../../components/Products/ProductList";
import { PRODUCT_CREATE } from "../../utils/consts";

function Products() {
    return(
        <section class="block">
            <div class="container">
                <div class="block-header">
                    <h1 class="title">Товары</h1>
                    <Link to={PRODUCT_CREATE} class="btn bg-primary">Создать</Link>
                </div>
                <ProductList />
            </div>
        </section>
    );
}

export default Products;