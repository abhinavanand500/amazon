import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/' exact>
                        <Header />
                        <Home />
                    </Route>
                    <Route path='/checkout'>
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
