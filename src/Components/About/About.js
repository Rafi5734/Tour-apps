import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./about.css";
const About = () => {
    return (
        <>
            <div className="about-heading">
                <div className="about-description">
                    <h1 className="name-about">BonVoyage</h1>
                </div>
            </div>
            <div className="about-us mt-5 mb-5 text-center">
                <h1 className="about-us-title">About Us</h1>
                <p className="lead">
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin,
                    loreendum auctor nisi elit consequat ipsum, nec sagittis sem
                    nibh id elit. vulputate cursus a sit amet mauris. Morbi
                    accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
                    a ornare odio. Sed non mauris vitae erat consequat auctor eu
                    in elit. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Mauris in erat
                    justo. Nullam ac urna eu felis dapibus condimentum sit amet
                    a augue. Sed non neque elit
                </p>
            </div>
            <Container>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-3 mb-5">
                            <h3 className="about-address">LONDON</h3>
                            <p className="lead">
                                198 West 21th Street, Suite 721
                            </p>
                            <p className="lead">Phone: +88 (0) 101 0000 000</p>
                            <p className="lead">Fax: +88 (0) 202 0000 001</p>
                            <p className="lead">
                                Email: youremail@yourdomain.com
                            </p>
                        </div>
                        <div className="col-12 col-sm-3 mb-5">
                            <h3 className="about-address">New York</h3>
                            <p className="lead">
                                198 West 21th Street, Suite 721
                            </p>
                            <p className="lead">Phone: +88 (0) 101 0000 000</p>
                            <p className="lead">Fax: +88 (0) 202 0000 001</p>
                            <p className="lead">
                                Email: youremail@yourdomain.com
                            </p>
                        </div>

                        <div className="col-12 col-sm-3 mb-5">
                            <h3 className="about-address">Oslo</h3>
                            <p className="lead">
                                198 West 21th Street, Suite 721
                            </p>
                            <p className="lead">Phone: +88 (0) 101 0000 000</p>
                            <p className="lead">Fax: +88 (0) 202 0000 001</p>
                            <p className="lead">
                                Email: youremail@yourdomain.com
                            </p>
                        </div>
                        <div className="col-12 col-sm-3 mb-5">
                            <h3 className="about-address">Zurich</h3>
                            <p className="lead">
                                198 West 21th Street, Suite 721
                            </p>
                            <p className="lead">Phone: +88 (0) 101 0000 000</p>
                            <p className="lead">Fax: +88 (0) 202 0000 001</p>
                            <p className="lead">
                                Email: youremail@yourdomain.com
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default About;
