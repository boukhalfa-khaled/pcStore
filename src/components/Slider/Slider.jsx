import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = ["/slider/1.jpg", "/slider/2.jpg", "/slider/3.jpg"];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      {/* <div className="icons"> */}
      <div className="icon icon1" onClick={prevSlide}>
        <WestOutlinedIcon />
      </div>
      <div className="icon icon2" onClick={nextSlide}>
        <EastOutlinedIcon />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Slider;
