import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="center">
          <Link className="link" to="/">
            BlueTooth Djelfa
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/products/1">
              CPU
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              MotherBoard
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Prephirals
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/5">
              laptops
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/6">
              GPU
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">
              Storage
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
