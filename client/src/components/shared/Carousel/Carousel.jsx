// Sited code below
// https://codesandbox.io/s/simple-react-hooks-interval-slider-forked-hzfsb?file=/src/index.js:0-1213

import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useSlider from "./useSlider";
import "./Carousel.css";
import "./CarouselMedia.css";

const slides = [
  {
    imgURL: "carousel-1.jpg",
    title: "Carousel 1",
    color: "#56777A",
  },
  {
    imgURL: "carousel-2.jpg",
    title: "Carousel 2",
    color: "#84ACAC",
  },
  {
    imgURL: "carousel-3.jpg",
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
    color: "#FBA434",
  },
];

function Carousel() {
  const parentRef = useRef(null);
  const [slideWidth, updSlideWidth] = useState(950);
  useEffect(() => {
    if (parentRef.current) {
      updSlideWidth(parentRef.current.offsetWidth);
    }
    // console.log(slideWidth, parentRef.current.offsetWidth);
  }, [parentRef.current && parentRef.current.offsetWidth]);

  const { offset, addItem } = useSlider({
    total: slides.length,
    enabled: true,
    useLoaded: false,
    speed: 3000,
  });

  return (
    <div className="carousel" ref={parentRef}>
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
            key={index}
            alt={slide.title}
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
