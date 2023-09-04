"use client";
import React from "react";
import { Montserrat, DM_Sans, Open_Sans } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
});
import AgencyImg from "@/assets/agency.webp";
import AgencyImgsub from "@/assets/agencysub.png";
import { motion, spring } from "framer-motion";

const Agency = () => {
  return (
    <>
      <div className="agency">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-6 m-auto">
              <div className="agency-content text-center">
                <h2 className={montserrat.className}>
                  Run Agency Smartly with Our <span>Team Member.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6  col-lg-5">
              <div className="agency-left">
                <Image className="imgmain" src={AgencyImg} alt="AgencyImg" />
                <Image
                  className="imgsub"
                  src={AgencyImgsub}
                  alt="AgencyImgsub"
                />
              </div>
            </div>
            <div className="offset-lg-1 col-md-6 col-lg-6">
              <div className="agency-right">
                <div className="our-client">
                  <h3 className={montserrat.className}>
                    What provide to <span>our client</span>
                  </h3>
                  <p className={montserrat.className}>
                    There are many variations of passages of Lorem Ipsum
                    availabl , but the majority have suffered alteration in some
                    for by injected humour, or randomised words which don't
                    look.There are many variations of passages.
                  </p>
                </div>
                <div className="display">
                  <h3 className={montserrat.className}>
                    Optimize for quickly <span>display.</span>
                  </h3>
                  <p className={montserrat.className}>
                    There are many variations of passages of Lorem Ipsum
                    availabl but the major.There are many variations of passages
                    of.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
                  className={openSans.className}
                >
                  Contact Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agency;
