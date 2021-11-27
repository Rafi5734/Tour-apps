import React from "react";
import { Spinner } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Navigate,
    useHistory,
    useLocation,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./private.css";
const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return (
            <Spinner
                animation="grow"
                variant="danger"
                className="private-spinner"
            />
        );
    }
    if (user.displayName) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} />;
    // return (
    //     <Route
    //         {...rest}
    //         render={({ location }) =>
    //             user.displayName ? (
    //                 children
    //             ) : (
    //                 <Redirect
    //                     to={{
    //                         pathname: "/signin",
    //                         state: { from: location },
    //                     }}
    //                 />
    //             )
    //         }
    //     />
    // );
};

export default PrivateRoute;
