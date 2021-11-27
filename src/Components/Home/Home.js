import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link, useParams } from "react-router-dom";

import "./home.css";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import TourInfo from "../TourInfo/TourInfo";
import Choose from "../Choose/Choose";
import PlaceOrder from "../PlaceOrder/PlaceOrder";

const Home = () => {
    const { handleAddToCart, handleCart, products, isLoading } = useAuth();
    // const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <div>
                <Banner></Banner>
                <h1 className="tasks mt-5 mb-5">Our Tasks</h1>
                <hr />
                {isLoading ? (
                    <div>
                        <Spinner
                            animation="border"
                            variant="danger"
                            className="card-spinner"
                        />
                    </div>
                ) : (
                    <div className="home-card">
                        {products.map((item, index) => (
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">
                                        {item.description}
                                    </p>

                                    <br />

                                    <Link to={`/placeorder/${item?._id}`}>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                handleAddToCart(index)
                                            }
                                        >
                                            Purchase Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <TourInfo></TourInfo>
                <Choose></Choose>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;
