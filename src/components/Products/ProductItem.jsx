import { Link } from "react-router-dom";
import { PRODUCT_DELETE, PRODUCT_DETAIL, PRODUCT_UPDATE } from "../../utils/consts";

function ProductItem({product}) {
    return(
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td colspan="3" class="actions-products" style={{border: "none"}}>
                <Link to={PRODUCT_DETAIL.substring(0, PRODUCT_DETAIL.length - 3) + product.id} class="btn bg-success">Смотреть</Link>
                <Link to={PRODUCT_UPDATE.substring(0, PRODUCT_UPDATE.length - 3) + product.id} class="btn bg-warning">Изменить</Link>
                <Link to={PRODUCT_DELETE.substring(0, PRODUCT_DELETE.length - 3) + product.id} class="btn bg-danger">Удалить</Link>
            </td>
        </tr>
    );
}

export default ProductItem;