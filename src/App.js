import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MyOrder from "./Components/MyOrder/MyOrder";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import ManageOrder from "./Components/ManageOrder/ManageOrder";
import Details from "./Components/Details/Details";
import AddService from "./Components/AddServices/AddService";
import UpdateStatus from "./Components/UpdateStatus/UpdateStatus";
import NotFound from "./Components/404/NotFound";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />

                        <Route path="/service" element={<Services />} />

                        <Route path="/about" element={<About />} />

                        <Route path="/signin" element={<SignIn />} />

                        <Route path="/register" element={<Register />} />

                        <Route
                            path="/placeorder/:placeId"
                            element={
                                <PrivateRoute>
                                    <PlaceOrder></PlaceOrder>
                                </PrivateRoute>
                            }
                        />

                        {/* <PrivateRoute path="/placeorder/:placeId">
                            <PlaceOrder></PlaceOrder>
                        </PrivateRoute> */}

                        <Route path="/manageorder" element={<ManageOrder />} />

                        <Route path="/addservice" element={<AddService />} />

                        <Route path="/myorder" element={<MyOrder />} />

                        <Route
                            path="/update/:updateId"
                            element={<UpdateStatus />}
                        />

                        <Route
                            path="/details/:detailsId"
                            element={<Details />}
                        />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
