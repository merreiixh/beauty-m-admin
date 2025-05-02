import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { a } from "../../services/axiosInstance";

function OrderList() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const res = await a.get('/orders');
                setOrders(res.data);
            } catch(error) {
                console.error("Error: ", error);
            }
        }
        fetchOrders();
    }, [])

    return(
        <table class="table">
            <thead>
                <th>№</th>
                <th>Клиент</th>
                <th>Дата и время заказа</th>
                <th>Действие</th>
            </thead>
            <tbody>
                {orders.map((order) => (
                    <OrderItem key={order.id} order={order} />
                ))}
            </tbody>
        </table>
    );
}

export default OrderList;