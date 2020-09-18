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
                    <Product
                        id={1}
                        title='JBL C100SI In-Ear Deep Bass Headphones with Mic (Black)'
                        image='https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SY355_.jpg'
                        rating={3}
                        price={999}
                    />

                    <Product
                        id={2}
                        title='Apple iPhone 11 Pro Max (64GB) - Space Grey'
                        image='https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SX679_.jpg'
                        rating={5}
                        price={109099}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id={3}
                        title='Amazon Brand - Solimo Optima Manual Box Storage Queen Bed (Sienna Cherry)'
                        image='https://images-na.ssl-images-amazon.com/images/I/8168rMUHKdL._SL1500_.jpg'
                        rating={4}
                        price={15000.0}
                    />
                    <Product
                        id={4}
                        title='ASUS ZenBook 14 (2020) Intel Core i5-1035G1 10th Gen 14-inch '
                        image='https://images-na.ssl-images-amazon.com/images/I/71lT-zWEYkL._SX679_.jpg'
                        rating={3}
                        price={81745.0}
                    />
                    <Product
                        id={5}
                        title='JBL SB110 Powerful Wireless Soundbar with Built-in Subwoofer'
                        image='https://images-na.ssl-images-amazon.com/images/I/71NKjR%2BgF-L._SL1500_.jpg'
                        rating={4}
                        price={7999.0}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id={6}
                        title='Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV 55Q8CN (Black) (2018 model)'
                        image='https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._SX522_.jpg'
                        rating={5}
                        price={154999.0}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
