import React from "react";
import { Montserrat, DM_Sans, Jost } from "next/font/google";
import { Reputed } from "@/data/CommonData";
const dmSans = DM_Sans({
  subsets: ["latin"],
});
const jost = Jost({
  subsets: ["latin"],
});

const Partners = () => {
  return (
    <>
      <div className="partners">
        <div className="container">
          <h2 className={dmSans.className}>
            Reputed <span>Partners</span>
          </h2>
        </div>
        <div className="all_partners">
          {Reputed.map((item, i) => (
            <div className="partner_icon" key={i}>
              {item.icons}
              <h3 className={jost.className}>{item.title}</h3>
            </div>
          ))}
        </div>
        <p className={jost.className}>
          including thousands other brokers and prop firms
        </p>
      </div>
    </>
  );
};

export default Partners;
