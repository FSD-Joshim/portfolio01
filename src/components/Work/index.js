import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({
  subsets: ["latin"],
});
import WorkleftImg from "@/assets/workleftimg.webp";
import ClientImg1 from "@/assets/workrightleftimg.webp";
import ClientImg2 from "@/assets/workrightlastimg.png";
const Work = () => {
  return (
    <>
      <div className="work">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <div className="work-content">
                <h2 className={montserrat.className}>
                  How it <span>Work</span>{" "}
                </h2>
                <p className={montserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="work-left">
                <Image src={WorkleftImg} alt="WorkleftImg" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="work-right">
                <div className="work-right-content">
                  <h4 className={montserrat.className}>
                    What provide to <span>our client</span>
                  </h4>
                  <p className={montserrat.className}>
                    There are many variations of passages of Lorem Ipsum
                    availabl , but the majority have suffered alteration in some
                    for by.
                  </p>
                </div>
                {/* <div className="work-right-btm-img d-flex ">
                  
                  
                </div> */}
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="client-img-one">
                    <Image src={ClientImg1} alt="workImg" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="client-img-two">
                    <Image src={ClientImg2} alt="workImg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
