import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Choose = () => {
    return (
        <div>
            <Container className="choose-header">
                <h1 className="text-center">WE CHOOSE FOR YOU</h1>
                <hr />
                <p className="text-center lead">
                    Travel by water often provided more comfort and speed than
                    land-travel, at least until the advent of a network of
                    railways in the 19th century. Travel for the purpose of
                    tourism is reported to have started around this time when
                    people began to travel for fun as travel was no longer a
                    hard and challenging task.
                </p>
            </Container>
            <Container className="choose-footer mt-5">
                <Row>
                    <Col>
                        <i
                            className="fas fa-cocktail icons"
                            style={{
                                fontSize: "3rem",
                                marginBottom: "10px",
                                borderBottom: "1px solid black",
                                padding: "10px",
                            }}
                        ></i>
                        <p className="lead">
                            These activities fall under the realm of
                            entertainment as it relates to tourism. Documenting
                            every activity that could be on a tourist’s to-do
                            list would be nearly impossible, for what one
                            traveller would find entertaining, another may not.
                        </p>
                    </Col>
                    <Col>
                        <i
                            className="fas fa-swimming-pool icons"
                            style={{
                                fontSize: "3rem",
                                marginBottom: "10px",
                                borderBottom: "1px solid black",
                                padding: "10px",
                            }}
                        ></i>
                        <p className="lead">
                            Swimming can be on the list of most pleasant forms
                            of entertainment for all age groups but with out
                            guidelines, it may also be among the most hazardous.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <i
                            className="fas fa-cannabis icons"
                            style={{
                                fontSize: "3rem",
                                marginBottom: "10px",
                                borderBottom: "1px solid black",
                                padding: "10px",
                            }}
                        ></i>
                        <p className="lead">
                            In a time where open spaces, fresh air and miles of
                            wild countryside have never sounded more desirable,
                            make the forest your own personal playground.
                            Combining total seclusion with the freedom to
                            explore, our forest escapes can help you truly get
                            away from it all.
                        </p>
                    </Col>
                    <Col>
                        <i
                            className="fas fa-utensils icons"
                            style={{
                                fontSize: "3rem",
                                marginBottom: "10px",
                                borderBottom: "1px solid black",
                                padding: "10px",
                            }}
                        ></i>
                        <p className="lead">
                            Jack's Seafood Bar and Grill is a fun, casual
                            restaurant where you can find the freshest seafood
                            at reasonable prices. For the seafood lovers, We
                            have oysters on the half shell, crab cakes, steamed
                            shrimp, and fresh fish delivered daily. For the
                            ‘landlubbers’, there are wings, soups, salads,
                            pasta, chicken and burgers also available.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Choose;
