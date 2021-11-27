import React, { Component } from "react";
import "./footer.css";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
class Footer extends Component {
    render() {
        return (
            <div>
                <Container className="footer-bg">
                    <div className="footer-details mb-5">
                        <h1 className="text-center mb-5">ASK US ANYTHING</h1>
                        <p className="lead">
                            Travel is the movement of people between distant
                            geographical locations. Travel can be done by foot,
                            bicycle, automobile, train, boat, bus, airplane,
                            ship or other means, with or without luggage, and
                            can be one way or round trip.
                        </p>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    controlId="formGridEmail"
                                    className="lead"
                                >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId="formGridPassword"
                                    className="lead"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                            </Row>

                            <Form.Group
                                className="mb-5"
                                controlId="formGridAddress1"
                                className="lead"
                            >
                                <Form.Label className="mt-4">
                                    Address
                                </Form.Label>
                                <Form.Control
                                    placeholder="1234 Main St"
                                    className="mb-4 "
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formGridAddress2"
                                className="lead"
                            >
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control
                                    placeholder="Apartment, studio, or floor"
                                    className="mb-4 "
                                />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    controlId="formGridCity"
                                    className="lead"
                                >
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId="formGridState"
                                    className="lead"
                                >
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId="formGridZip"
                                    className="lead"
                                >
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group
                                className="mb-3 lead"
                                id="formGridCheckbox"
                            >
                                <Form.Check
                                    type="checkbox"
                                    label="Check me out"
                                />
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                className="lead"
                            >
                                Send
                            </Button>
                        </Form>
                    </div>
                    <div className="icons">
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Footer;
