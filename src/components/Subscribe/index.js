import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
});

const Subscribe = () => {
  return (
    <>
      <div className="subscribe">
        <div className="container">
          <div className="subscribe_bg">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="subs_content">
                  <h2 className={montserrat.className}>
                    Subscribe to Our Newsletter
                  </h2>
                </div>
              </div>
              <div className="col-sm-10 col-lg-6">
                <div className="newsletter-form">
                  <input type="enail" placeholder="Enter your Email" />
                  <button>
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
