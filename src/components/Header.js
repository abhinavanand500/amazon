import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header_logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
                />
            </Link>

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
                <Link to='/checkout'>
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='Header_OptionTwo_basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
