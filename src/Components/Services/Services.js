import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./service.css";
const Services = () => {
    return (
        <>
            <div className="service-section">
                <div>
                    <h1>PEACEFUL MOMENT LAKE</h1>
                </div>
            </div>
            <div className="services-main">
                <h1 className="text-center mt-5 mb-5 service-title">
                    OUR SERVICES
                </h1>
                <p className="lead p-5">
                    YACHT & MARINE is a wonderful and reliable tour and travel
                    agency among all the leading and updating tour-operating
                    services in Bangladesh. We are here to to bring the luxury
                    to your travelling. YACHT & MARINE is proud member of
                    association of Bangladesh. Safe travelling, your security,
                    and your enjoying experience are our focus during the
                    travel.
                </p>
                <CardGroup className="p-5">
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/tour-2-img-7.jpg"
                        />
                        <Card.Body>
                            <Card.Title>ARRANGEMENT</Card.Title>
                            <Card.Text className="lead">
                                Travel tours generally involve a group of people
                                who travel together, providing a shared
                                experience and companionship. Tours can be
                                professionally organized or they can be as
                                simple as a group of friends taking a trip
                                together.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/tour-2-img-8.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Flight</Card.Title>
                            <Card.Text className="lead">
                                Travel tours generally involve a group of people
                                who travel together, providing a shared
                                experience and companionship. Tours can be
                                professionally organized or they can be as
                                simple as a group of friends taking a trip
                                together.{" "}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/tour-2-img-9-508x438.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Transport</Card.Title>
                            <Card.Text className="lead">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Services;
