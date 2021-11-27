import React from "react";
import "./banner.css";

const Banner = () => {
    return (
        <div>
            <div className="banner-class">
                <div className="banner-description">
                    <h1 className="banner-heading">YACHT & MARINE</h1>
                    <hr className="banner-hr" />
                    <p className="banner-para">
                        Treat Yourself with an unforgettable saliling
                        experience. Grab a last minute bargain with one of our
                        late curise deals.
                    </p>
                    <button className="banner-btn lead">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
