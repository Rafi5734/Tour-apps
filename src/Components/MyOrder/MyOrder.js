import React, { useEffect, useState, useParams } from "react";
import { Container, Button, Card } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import "./myOrder.css";
const Cart = () => {
    const { btn, handleDeleteBtn, cartItems, user } = useAuth();

    console.log(user.displayName);
    // const [deleteItem, setDeleteItem] = useState(null);

    const [updateCartItems, setUpdateCartItems] = useState([]);
    useEffect(() => {
        console.log(user.displayName);
        fetch("https://ghastly-castle-73206.herokuapp.com/myorder")
            .then((res) => res.json())
            .then((data) => {
                setUpdateCartItems(data);
                console.log(data);
            });
    }, []);

    const handleDelete = (id) => {
        const proceedToDelete = window.confirm(
            "Are You want to delete this item?"
        );
        if (proceedToDelete) {
            fetch(`https://ghastly-castle-73206.herokuapp.com/myorder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("item deleted successfully.");
                        const remainingItems = updateCartItems.filter(
                            (item) => item._id !== id
                        );
                        setUpdateCartItems(remainingItems);
                        // setDeleteItem(true);
                    }
                    // if (updateCartItems.length > 1) {
                    //     console.log(user);
                    //     const filterOrder = updateCartItems.filter(
                    //         (o) => o.user === user.displayName
                    //     );
                    //     setUpdateCartItems(filterOrder);
                    // }
                });
        }
    };

    console.log(user.displayName);

    return (
        <div>
            <h1 className="my-order text-center mt-5 mb-5">My All Orders.</h1>
            <Container className="order-container">
                {updateCartItems.map((i, index) => (
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={i.image} />
                        <Card.Body>
                            <Card.Title>{i.name}</Card.Title>
                            <Card.Text>{i.description}</Card.Text>
                            <Card.Text>
                                {" "}
                                <span>Price:$</span> {i.price}
                            </Card.Text>
                            <Card.Text>
                                {" "}
                                <i className="fas fa-star mt-4 mb-4">
                                    {i.rating}
                                </i>
                            </Card.Text>
                            <Card.Text> User Name: {i.user}</Card.Text>
                            <button
                                type="button"
                                className="btn btn-outline-danger me-3 ms-4"
                                onClick={() => handleDelete(i._id)}
                            >
                                Delete
                            </button>
                            <input
                                type="text"
                                value={i.status}
                                className="status-input"
                            ></input>
                            <Link to={`/update/${i._id}`}>
                                <Button variant="warning" className="ms-5 mt-3">
                                    Update Status{" "}
                                </Button>{" "}
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    );
};

export default Cart;
