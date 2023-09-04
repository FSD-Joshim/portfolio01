"use client";
import Image from "next/image";
import React from "react";
import clientImg from "@/assets/client.webp";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Montserrat, DM_Sans, Open_Sans } from "next/font/google";
import { Devaice } from "@/data/CommonData";
import Link from "next/link";
const montserrat = Montserrat({
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
});

const Clients = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 10, { duration: 1 });

    return animation.stop;
  }, []);
  return (
    <>
      <div className="client">
        <div className="container">
          <div className="row align-items-end ">
            <div className="col-lg-5">
              <div className="client-left">
                <h2 className={montserrat.className}>
                  What we provide to <span>our Client</span>
                </h2>
                <p className={montserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
                <div className="clients-img">
                  <Image src={clientImg} loading="lazy" alt="ClientPic" />
                  <div className="count text-center">
                    <span className={openSans.className}>
                      <motion.h1 className={openSans.className}>
                        {rounded}
                      </motion.h1>
                      +
                    </span>
                    <p className={openSans.className}>Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-1 d-flex col-lg-6 mt-md-4">
              <div className="row row-gap-4">
                {Devaice.map((item, i) => (
                  <div className="col-sm-6  col-lg-6">
                    <div key={i} className="client-right">
                      {item.icons}
                      <h4 className={montserrat.className}>{item.title}</h4>
                      <p className={openSans.className}>{item.discription}</p>
                      <div className="button-wrap">
                        <Link className={montserrat.className} href="/">
                          {item.readMore}
                          <FaAngleRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
