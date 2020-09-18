import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";
function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const RemoveFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p style={{ marginLeft: "5px" }}>🌟</p>
                        ))}
                </div>
                <button onClick={RemoveFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
