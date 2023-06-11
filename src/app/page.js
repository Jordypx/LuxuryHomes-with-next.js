"use client";

import "../styles/globals.css";

import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { BsInstagram, BsFacebook, BsTwitter, BsDiscord, BsYoutube } from 'react-icons/bs'


export default function Home() {
  const images = [
    {
      pic: "/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy (1).jpg",
      head: "House And Cottage",
      para: "Live in your dreamhouse today",
    },
    {
      pic: "/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy.jpg",
      head: "New Way Of Living",
      para: "change the way you live life today",
    },
    {
      pic: "/high-grey-house-large-family-with-grey-modern-house-exterior_124507-22190.jpg",
      head: "Homes for You And Your Familes",
      para: "luxury Homes with One Search",
    },
    {
      pic: "/luxury-house-real-estate-sale-property-generative-ai.jpg",
      head: "Let's Create The Furture Together",
      para: "Let's Create It Together",
    },
    {
      pic: "/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg",
      head: "Design From Reality To Idea",
      para: "comfort, esthetic, originality",
    },
  ];

  const zoomInProperties = {
    scale: 1.2,
    duration: 7000,
    transitionDuration: 800,
    Infinity: true,
    autoplay: true,
    pauseOnTransition: false,
    pauseOnHover: false,

    prevArrow: (
      <div className="ml-10 top-40 md:top-72">
        <ArrowLeftIcon className="text-white h-8 w-6 cursor-pointer Arrow" />
      </div>
    ),

    nextArrow: (
      <div className="mr-10 top-40 md:top-72">
        <ArrowRightIcon className="text-white h-8 w-6 cursor-pointer Arrow" />
      </div>
    ),
  };

  return (
    <div className="w-full h-screen slideshow-container">
      <Zoom
        {...zoomInProperties}
        onChange={function noRefCheck() {}}
        onStartChange={function noRefCheck() {}}
      >
        {images.map((each, index) => (
          <div
            key={index}
            className="slide duration-700 flex justify-center md:items-center items-start w-screen h-screen relative"
          >
            <img
              src={each.pic}
              alt=""
              className="w-screen slide-image duration-700 cursor-zoom-in"
            />

            <div className="text">
              <h1>{each.head}</h1>
              <p>{each.para}</p>
            </div>
          </div>
        ))}
      </Zoom>

      <div className="smallerSlider">
      <Zoom
        {...zoomInProperties}
        onChange={function noRefCheck() {}}
        onStartChange={function noRefCheck() {}}
        arrows={false}>
        {images.map((each, index) => (
          <div
            key={index}
            className="slide duration-700 flex justify-center md:items-center items-start w-screen h-screen relative"
          >
            <img
              src={each.pic}
              alt=""
              className="w-screen slide-image duration-700 cursor-zoom-in"
            />
          </div>
        ))}
      </Zoom>
      </div>
      <div className="social_mediaIcons">
        <div>
            <BsInstagram />
        </div>
        <div>
            <BsFacebook />
        </div>
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsDiscord />
        </div>
        <div>
            <BsYoutube />
        </div>
      </div>
    </div>
  );
}
