import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useHistory, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import "./signIn.css";
const SignIn = () => {
    const { user, signInUsingGoogle, setIsLoading } = useAuth();
    const history = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";
    // console.log(location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(() => {
                history("/home");
            })
            .finally(() => setIsLoading(false));
    };
    return (
        <div>
            <div className="google-login">
                <h1 className="signIn-title">
                    <i class="fab fa-google"></i> Sign In
                </h1>

                <button
                    type="button"
                    class="btn btn-outline-success"
                    onClick={handleGoogleLogin}
                >
                    Google Sign In
                </button>
            </div>
        </div>
    );
};

export default SignIn;
