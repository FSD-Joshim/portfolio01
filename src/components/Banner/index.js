"use client";
import React from "react";
import { motion, spring } from "framer-motion";
import { Montserrat, DM_Sans } from "next/font/google";
import Image from "next/image";
import bannerImages from "@/assets/banner.webp";
const montserrat = Montserrat({
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
});

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="banner-content text-center">
                <h1 className={montserrat.className}>
                  <span>Builds</span> your great portfolio <span> Website</span>
                </h1>
                <p className={dmSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
                  className={dmSans.className}
                >
                  Contact Now
                </motion.button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-img">
                <Image src={bannerImages} alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
