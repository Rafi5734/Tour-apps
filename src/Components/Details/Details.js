import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./details.css";
const Details = () => {
    const { user, handleAddToCart } = useAuth();
    const { detailsId } = useParams();

    const [singleItem, setSingleItem] = useState({});

    useEffect(() => {
        fetch(`https://ghastly-castle-73206.herokuapp.com/details/${detailsId}`)
            .then((res) => res.json())
            .then((data) => {
                setSingleItem(data);
            });
    }, []);

    const handlePlaceOrder = () => {
        console.log(singleItem);
    };

    return (
        //single item is here...

        <div className="single-item">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={singleItem?.image} />
                <Card.Body>
                    <Card.Title>{singleItem?.name}</Card.Title>
                    <Card.Text>{singleItem?.description}</Card.Text>
                    <h3>$ {singleItem?.price}</h3>
                    <i className="fas fa-star mt-4 mb-4"></i>
                    <br />
                    <Link to="/myorder">
                        <Button
                            variant="primary"
                            onClick={() => handleAddToCart(singleItem?._id)}
                        >
                            Place Book
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;
