"use client";
import Image from "next/image";
import React from "react";
import ImgWilly from "@/assets/willy.png";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Montserrat, DM_Sans, Open_Sans } from "next/font/google";
import Slider from "react-slick";
import PrevArrow from "./prevArrow";
import NextArrow from "./nextArrow";
const montserrat = Montserrat({
  subsets: ["latin"],
});

const AboutUs = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
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
      <div className="about">
        {/* <div className="container"> */}
        <h2 className={montserrat.className}>
          What People Say <span>About Us</span>
        </h2>
        {/* <div className="row">
            <div className="col-lg-4">
              <div className="main_about">
                <div className="icon_about">
                  <BiSolidQuoteAltLeft />
                </div>
                <div className="content">
                  <p className={montserrat.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some.
                  </p>
                </div>
                <div className="profile">
                  <div className="image">
                    <Image src={ImgWilly} />
                  </div>
                  <div className="name_designation">
                    <h5 className={montserrat.className}>James Willy</h5>
                    <h6 className={montserrat.className}>CEO GTEX</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="main_about">
                <div className="icon_about">
                  <BiSolidQuoteAltLeft />
                </div>
                <div className="content">
                  <p className={montserrat.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some.
                  </p>
                </div>
                <div className="profile">
                  <div className="image">
                    <Image src={ImgWilly} />
                  </div>
                  <div className="name_designation">
                    <h5 className={montserrat.className}>James Willy</h5>
                    <h6 className={montserrat.className}>CEO GTEX</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="main_about">
                <div className="icon_about">
                  <BiSolidQuoteAltLeft />
                </div>
                <div className="content">
                  <p className={montserrat.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some.
                  </p>
                </div>
                <div className="profile">
                  <div className="image">
                    <Image src={ImgWilly} />
                  </div>
                  <div className="name_designation">
                    <h5 className={montserrat.className}>James Willy</h5>
                    <h6 className={montserrat.className}>CEO GTEX</h6>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* </div> */}
        <Slider {...settings}>
          <div>
            <h3>
              <div className="main-about">
                <div className="icon-about">
                  <BiSolidQuoteAltLeft />
                </div>
                <div className="content">
                  <p className={montserrat.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some.
                  </p>
                </div>
                <div className="profile">
                  <div className="image">
                    <Image src={ImgWilly} />
                  </div>
                  <div className="name-designation">
                    <h5 className={montserrat.className}>James Willy</h5>
                    <h6 className={montserrat.className}>CEO GTEX</h6>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="main-about">
                <div className="icon-about">
                  <BiSolidQuoteAltLeft />
                </div>
                <div className="content">
                  <p className={montserrat.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some.
                  </p>
                </div>
                <div className="profile">
                  <div className="image">
                    <Image src={ImgWilly} />
                  </div>
                  <div className="name-designation">
                    <h5 className={montserrat.className}>James Willy</h5>
                    <h6 className={montserrat.className}>CEO GTEX</h6>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="main-about">
                <div className="icon-about">
                  <BiSolidQuoteAltLeft />
                </div>
                <div className="content">
                  <p className={montserrat.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some.
                  </p>
                </div>
                <div className="profile">
                  <div className="image">
                    <Image src={ImgWilly} />
                  </div>
                  <div className="name-designation">
                    <h5 className={montserrat.className}>James Willy</h5>
                    <h6 className={montserrat.className}>CEO GTEX</h6>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="main-about">
                <div className="icon-about">
                  <BiSolidQuoteAltLeft />
                </div>
                <div className="content">
                  <p className={montserrat.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some.
                  </p>
                </div>
                <div className="profile">
                  <div className="image">
                    <Image src={ImgWilly} />
                  </div>
                  <div className="name-designation">
                    <h5 className={montserrat.className}>James Willy</h5>
                    <h6 className={montserrat.className}>CEO GTEX</h6>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default AboutUs;
