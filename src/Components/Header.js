import React from "react";
import logo from "./images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlinestatus";
import { useSelector } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

let Header = () => {
  let [btn, setbtn] = useState("login");

  let onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);

  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  return (
    <div className="container-fulid">
      <div className="row">
        <div className="header">
          <div className="logo-container col-lg-4">
            <img src={logo} className="logo" />
          </div>
          <div className="nav-items col-lg-8">
            <ul>
              <li>helloas</li>
              <li>
                onlineStaus:
                {onlineStatus === true ? (
                  <div className="online"></div>
                ) : (
                  <div className="offline"></div>
                )}
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                {" "}
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                {" "}
                <Link to="/grocery">Grocery</Link>
              </li>
              <li>
                <Link to="/cart">Cart-({cart.length})items</Link>
              </li>
              <li>
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    btn === "login" ? setbtn("logout") : setbtn("login");
                  }}
                >
                  {btn}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
