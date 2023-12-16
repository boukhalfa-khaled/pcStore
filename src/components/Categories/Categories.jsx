import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="/img/cpu.png" alt="" />
          <button>
            <Link className="link" to="/products/1">
              CPU
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="/img/motherboard.jpg" alt="" />
          <button>
            <Link to="/products/2" className="link">
              MotherBoard
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img src="/img/prephirals.jpg" alt="" />
          <button>
            <Link to="/products/3" className="link">
              Prephirals
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/img/laptop.jpg" alt="" />
              <button>
                <Link to="/products/5" className="link">
                  LapTops
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img src="/img/storage.jpg" alt="" />
              <button>
                <Link to="/products/4" className="link">
                  Storage
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="/img/gpu.jpg" alt="" />
          <button>
            <Link to="/products/6" className="link">
              GPU
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
