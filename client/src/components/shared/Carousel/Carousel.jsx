// Sited code below
// https://codesandbox.io/s/simple-react-hooks-interval-slider-forked-hzfsb?file=/src/index.js:0-1213

import React from "react";
import ReactDOM from "react-dom";
import useSlider from "./useSlider";
import "./Carousel.css";

const slides = [
  {
    imgURL: "carousel-1.jpg",
    title: "Slide 1",
    color: "#56777A",
  },
  {
    imgURL: "carousel-2.jpg",
    title: "Slide 2",
    color: "#84ACAC",
  },
  {
    imgURL: "carousel-3.jpg",
    title: "Slide 3",
    color: "#FBA434",
  },
];

function Carousel() {
  const slideWidth = 950;
  const { offset, addItem } = useSlider({
    total: slides.length,
    enabled: true,
    useLoaded: false,
    speed: 6000,
  });

  return (
    <div className="carousel">
      <div
        className="scroller"
        style={{
          transform: `translate3d(-${offset * slideWidth}px,0,0)`,
          width: `${slides.length * slideWidth}px`,
        }}
      >
        {slides.map((slide, index) => (
          <img
            className="slide"
            src={require(`../../../img/${slide.imgURL}`)}
          />
          // <div
          //   key={slide.title}
          //   className="slide"
          //   style={{
          //     backgroundColor: slide.color,
          //     //backgroundImage: require(`../../../img/${slide.imgURL}`),
          //   }}
          //></div>
        ))}
      </div>
    </div>
  );
}
export default Carousel;
