import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import { useParams, Link } from "react-router-dom";
import "./placeOrder.css";
import { useForm } from "react-hook-form";
const PlaceOrder = () => {
    const { user, products } = useAuth();
    const { placeId } = useParams();

    const [placeOrders, setPlaceOrders] = useState([]);

    useEffect(() => {
        const detailOrder = products.find((u) => u._id == placeId);
        setPlaceOrders(detailOrder);
    }, [products]);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="place-order-form">
            <h1 className="mt-5 mb-5 place-order">Place Your Order</h1>
            <Container>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="place-order-form"
                >
                    <input
                        defaultValue={user.email} //my email is null. for that this field shows empty.
                        {...register("email", {
                            required: true,
                        })}
                        placeholder="Email Name"
                    />
                    <input
                        defaultValue={user.displayName}
                        {...register("name", {})}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        {...register("from", {
                            required: true,
                        })}
                        placeholder="From"
                    />
                    <input
                        type="text"
                        value={placeOrders.name}
                        {...register("to", {})}
                        placeholder="To"
                    />
                    <input
                        value={placeOrders.price}
                        type="number"
                        {...register("price", {})}
                        placeholder="Price"
                    />
                    <input
                        value={placeOrders.name}
                        type="text"
                        {...register("destination", {})}
                        placeholder="Destination"
                    />
                    <Link to="/myorder">
                        <button
                            type="submit"
                            value="place order"
                            className="submit-btn"
                        >
                            Place Order
                        </button>
                    </Link>
                </form>
            </Container>
        </div>
    );
};

export default PlaceOrder;
