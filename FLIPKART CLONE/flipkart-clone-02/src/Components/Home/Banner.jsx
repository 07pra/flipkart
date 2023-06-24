import React from "react";
import "./Banner.css";
//importing the carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { styled } from "@mui/material";

//Array data
import { bannerData } from "../../constants/data";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 280,
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 100,
  },
}));
// const btn = styled("button")(({ theme }) => ({
//   position: absolute,
//   outline: 0,
//   transition: all .5,
//   border-radius: 35,
//   z-index: 1000,
//   border: 0,
//   background: rgba(0,0,0,0.5),
//   min-width: 43,
//   min-height: 43,
//   opacity: 1,
//   cursor: pointer,
// }));
//function starts
const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      showDots={false}
      slidesToSlide={1}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map((data) => (
        <Image src={data.url} alt="banner" key="{banner}" />
      ))}
    </Carousel>
  );
};

export default Banner;
