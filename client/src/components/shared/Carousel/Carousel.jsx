// Sited code below
// https://codesandbox.io/s/simple-react-hooks-interval-slider-forked-hzfsb?file=/src/index.js:0-1213

import React from "react";
import ReactDOM from "react-dom";
import useSlider from "./useSlider";
import "./Carousel.css";

const slides = [
  {
    imgURL: "carousel-1.jpg",
<<<<<<< HEAD
    title: "Slide 1",
=======
    title: "Carousel 1",
>>>>>>> cd31aa3a7c4e58f9a1c758ba53528ccce60a7ad7
    color: "#56777A",
  },
  {
    imgURL: "carousel-2.jpg",
<<<<<<< HEAD
    title: "Slide 2",
=======
    title: "Carousel 2",
>>>>>>> cd31aa3a7c4e58f9a1c758ba53528ccce60a7ad7
    color: "#84ACAC",
  },
  {
    imgURL: "carousel-3.jpg",
<<<<<<< HEAD
    title: "Slide 3",
=======
    title: "Carousel 3",
    color: "#FBA434",
  },
  {
    imgURL: "carousel-4.jpg",
    title: "Carousel 4",
    color: "#56777A",
  },
  {
    imgURL: "carousel-5.jpg",
    title: "Carousel 5",
    color: "#84ACAC",
  },
  {
    imgURL: "carousel-6.jpg",
    title: "Carousel 6",
    color: "#FBA434",
  },
  {
    imgURL: "carousel-7.jpg",
    title: "Carousel 7",
>>>>>>> cd31aa3a7c4e58f9a1c758ba53528ccce60a7ad7
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
<<<<<<< HEAD
=======
            alt={slide.title}
>>>>>>> cd31aa3a7c4e58f9a1c758ba53528ccce60a7ad7
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
