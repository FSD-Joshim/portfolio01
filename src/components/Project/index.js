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
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Project = () => {
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
          <div className="row">
            <div className="col-lg-4 ">
              <div className="project-card">
                <Image src={Bitcoin} />
                <h5 className={montserrat.className}>
                  Bitcoin and Economic Freedom
                </h5>
                <div className="card-wrap">
                  <Link className={montserrat.className} href="/">
                    Read More
                  </Link>
                  <span className={montserrat.className}>10 January 2023</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="project-card">
                <Image src={Market} />
                <h5 className={montserrat.className}>
                  Bitcoin and Economic Freedom
                </h5>
                <div className="card-wrap">
                  <Link className={montserrat.className} href="/">
                    Read More
                  </Link>
                  <span className={montserrat.className}>10 January 2023</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="project-card">
                <Image src={Finance} />
                <h5 className={montserrat.className}>
                  Bitcoin and Economic Freedom
                </h5>
                <div className="card-wrap">
                  <Link className={montserrat.className} href="/">
                    Read More
                  </Link>
                  <span className={montserrat.className}>10 January 2023</span>
                </div>
              </div>
            </div>
            <div className="project-arow">
              <div className="left-arow">
                <FaAngleLeft />
              </div>
              <div className="right-arow">
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
