import React from "react";
import { Container, FloatingLabel, Form, Button } from "react-bootstrap";

const TourInfo = () => {
    return (
        <Container>
            <h1 className="mt-5">Say About Your Tour</h1>
            <hr />
            <>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3 mt-5"
                >
                    <Form.Control type="email" placeholder="Your Email" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Destination">
                    <Form.Control type="text" placeholder="Destination" />
                </FloatingLabel>
                <>
                    <Form.Select className="mb-5 mt-3">
                        <option>Popular</option>
                        <option>Holidays</option>
                        <option>On budget</option>
                        <option>Vacation</option>
                        <option>Tour Guide</option>
                        <option>Explore</option>
                    </Form.Select>
                </>
                <>
                    <Form.Label>
                        <span className="range-price">Price</span> : $1240 -
                        2390
                    </Form.Label>
                    <Form.Range />
                </>
                <Button variant="outline-primary" className="mb-5 mt-3">
                    Search
                </Button>{" "}
            </>
        </Container>
    );
};

export default TourInfo;
