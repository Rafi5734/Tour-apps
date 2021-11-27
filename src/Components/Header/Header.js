import React, { useContext, useEffect, useState } from "react";
import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { RingContext } from "../../App";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import useNumber from "../../Hooks/useNumber";
import "./header.css";
const Header = () => {
    const { user, googleSignOut, btn } = useAuth();
    // console.log(btn);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#" className="navbar-title">
                        YACHT & MARINE{" "}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Link to="/home" className="navbar-link">
                                Home
                            </Link>
                            <Link to="/service" className="navbar-link">
                                Services
                            </Link>

                            <Link to="/about" className="navbar-link">
                                About Us
                            </Link>
                            {user.displayName ? (
                                <div>
                                    <Link to="/myorder" className="navbar-link">
                                        My Orders
                                    </Link>
                                    <Link
                                        to="/manageorder"
                                        className="navbar-link"
                                    >
                                        Manage Orders
                                    </Link>
                                    <Link
                                        to="/addservice"
                                        className="navbar-link"
                                    >
                                        Add a Service
                                    </Link>
                                </div>
                            ) : null}
                        </Nav>
                        <Form className="d-flex">
                            <h5 className="user-name me-3 mt-2">
                                {user.displayName}
                            </h5>
                            {/* <img
                                src={user.photoURL}
                                className="sign-in-img img-fluid"
                            ></img> */}
                            {user.displayName ? (
                                <div>
                                    <Button
                                        variant="outline-success sign-btn text-nowrap"
                                        onClick={googleSignOut}
                                    >
                                        Sign Out
                                    </Button>
                                </div>
                            ) : (
                                <div>
                                    <Button variant="outline-success sign-btn text-nowrap">
                                        <Link to="/signin">Sign In</Link>
                                    </Button>
                                </div>
                            )}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
