import { Link } from "react-router-dom";
import { ORDER_DELETE, ORDER_DETAIL } from "../../utils/consts";

function OrderItem({order}) {

    function formatDataTime(isoString) {
        if (!isoString) return '';
        const options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        }
        return new Date(isoString).toLocaleString('kk-KZ', options)
    }

    return(
        <tr>
            <td>{order.id}</td>
            <td>{order.customer.name}, {order.customer.phone}</td>
            <td>{formatDataTime(order.orderTimestamp)}</td>
            <td colSpan="3" class="actions-category" style={{border: "none"}}>
                <Link to={`/orders/${order.id}`} className="btn bg-success">Смотреть</Link>
                <Link to={`/orders/delete/${order.id}`} className="btn bg-danger">Удалить</Link>
            </td>
        </tr>
    );
}

export default OrderItem;