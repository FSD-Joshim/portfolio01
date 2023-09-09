"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const montserrat = Montserrat({
  subsets: ["latin"],
});
import Bitcoin from "@/assets/bitcoin.webp";
import Market from "@/assets/market.webp";
import Finance from "@/assets/finance.webp";
import Slider from "react-slick";
import PrevArrow from "./prevArrow";
import NextArrow from "./nextArrow";

const Project = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="project-content">
                <h2 className={montserrat.className}>
                  Our Popular Project <span>And Blog</span>
                </h2>
                <p className={montserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <Slider {...settings}>
            <div>
              <h3>
                <div className="project-card">
                  <Image src={Bitcoin} alt="bitccoin" />
                  <h5 className={montserrat.className}>
                    Bitcoin and Economic Freedom
                  </h5>
                  <div className="card-wrap">
                    <Link className={montserrat.className} href="/">
                      Read More
                    </Link>
                    <span className={montserrat.className}>
                      10 January 2023
                    </span>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className="project-card">
                  <Image src={Market} alt="market" />
                  <h5 className={montserrat.className}>
                    Bitcoin and Economic Freedom
                  </h5>
                  <div className="card-wrap">
                    <Link className={montserrat.className} href="/">
                      Read More
                    </Link>
                    <span className={montserrat.className}>
                      10 January 2023
                    </span>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className="project-card">
                  <Image src={Finance} alt="finance" />
                  <h5 className={montserrat.className}>
                    Bitcoin and Economic Freedom
                  </h5>
                  <div className="card-wrap">
                    <Link className={montserrat.className} href="/">
                      Read More
                    </Link>
                    <span className={montserrat.className}>
                      10 January 2023
                    </span>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className="project-card">
                  <Image src={Bitcoin} alt="bitcoin" />
                  <h5 className={montserrat.className}>
                    Bitcoin and Economic Freedom
                  </h5>
                  <div className="card-wrap">
                    <Link className={montserrat.className} href="/">
                      Read More
                    </Link>
                    <span className={montserrat.className}>
                      10 January 2023
                    </span>
                  </div>
                </div>
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Project;
