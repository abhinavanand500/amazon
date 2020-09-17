import React from "react";
import "./Product.css";
function Product() {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>A lean startup</p>
                <p className='product_price'>
                    <small>Rs. </small>
                    <strong>200</strong>
                </p>
                <div className='product_rating'>
                    :happy
                </div>
            </div>
        </div>
    );
}

export default Product;
