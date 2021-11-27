import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./notFound.css";
const NotFound = () => {
    return (
        <div>
            <div className="error">
                <Link to="">
                    <Button variant="danger">Go To Home</Button>{" "}
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
