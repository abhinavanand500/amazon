import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img
                    className='home_image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/September/Headsets/HeadsetDays/V250146967_WLA-Headset_Days_TallHero_1500x600._CB403722192_.jpg'
                    alt='img not found'
                />
                <div className='home_row'>
                    <Product />
                    <Product />
                </div>
                <div className='home_row'>
                    <Product />
                </div>
                <div className='home_row'>
                    {/* {Product}
                    {Product} */}
                </div>
            </div>
        </div>
    );
};

export default Home;
