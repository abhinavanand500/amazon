import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login_logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG7.png'
                    alt='no'
                />
            </Link>
        </div>
    );
}

export default Login;
