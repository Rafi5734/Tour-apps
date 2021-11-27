import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./manageOrder.css";
import { Link } from "react-router-dom";
const ManageOrder = () => {
    const { user } = useAuth();
    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() => {
        fetch("https://ghastly-castle-73206.herokuapp.com/manageorder")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setManageOrder(data);
            });
    }, []);

    const handleDelete = (id) => {
        const proceedToDelete = window.confirm(
            "Are you sure you want to delete this order?"
        );
        if (proceedToDelete) {
            fetch(
                `https://ghastly-castle-73206.herokuapp.com/manageorder/${id}`,
                {
                    method: "DELETE",
                    headers: { "content-type": "application/json" },
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("item deleted successfully.");
                        const remainingItems = manageOrder.filter(
                            (item) => item._id !== id
                        );
                        setManageOrder(remainingItems);
                        // setDeleteItem(true);
                    } else {
                        // setDeleteItem(false);
                    }
                });
        }
    };
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Manage all the orders.</h1>
            <Container className="manage-Order">
                {manageOrder.map((manageOrder) => (
                    <Card style={{ width: "18rem" }}>
                        <Card.Img
                            variant="top"
                            src={manageOrder.image}
                            className="img-fluid"
                        />
                        <Card.Body>
                            <Card.Title>{manageOrder.name}</Card.Title>
                            <Card.Text>{manageOrder.description}</Card.Text>

                            <Card.Text>
                                <i className="fas fa-star mt-4 mb-4">
                                    {manageOrder.rating}
                                </i>
                            </Card.Text>

                            <Card.Text> Price: $ {manageOrder.price}</Card.Text>
                            <Button
                                variant="primary"
                                onClick={() => handleDelete(manageOrder._id)}
                            >
                                Delete
                            </Button>
                            <br />
                            <input
                                type="text"
                                value={manageOrder.status}
                                className="manage-input"
                            ></input>
                            <Link to={`/update/${manageOrder._id}`}>
                                <Button variant="warning" className="ms-3">
                                    Update Status
                                </Button>{" "}
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    );
};

export default ManageOrder;
