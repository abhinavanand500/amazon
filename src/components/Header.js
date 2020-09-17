import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
    return (
        <div className='header'>
            <img
                className='header_logo'
                src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
            />

            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className='header_nav'>
                <div className='header_option'>
                    <span className='Header_OptionOne'>Hello Guest</span>
                    <span className='Header_OptionTwo'>Sign In</span>
                </div>
                <div className='header_option'>
                    <span className='Header_OptionOne'>Return &</span>
                    <span className='Header_OptionTwo'>Order</span>
                </div>
                <div className='header_option'>
                    <span className='Header_OptionOne'>Your</span>
                    <span className='Header_OptionTwo'>Prime</span>
                </div>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='Header_OptionTwo_basketCount'>0</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
