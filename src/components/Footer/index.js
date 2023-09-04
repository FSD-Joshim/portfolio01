import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import { Montserrat, DM_Sans } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
});
import {
  FooterBeforeList,
  FooterAfterList,
  footerSocial,
} from "@/data/CommonData";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="short_info_footer">
                <Link href="#">
                  <Image src={Logo} loading="lazy" alt="Footer-Logo" />
                </Link>
                <div className="short-text">
                  <p className={montserrat.className}>
                    There are many variations of passages of available, but the
                    majority have suffered.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-6">
              <div className="footer-before-list">
                <h4 className={montserrat.className}>Services</h4>
                <div className="before-List">
                  {FooterBeforeList.map((item, i) => (
                    <Link className={dmSans.className} href={item.link} key={i}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-3 col-lg-3 col-6">
              <div className="footer-before-list">
                <h4 className={montserrat.className}>Resources</h4>
                <div className="before-List">
                  {FooterAfterList.map((item, i) => (
                    <Link className={dmSans.className} href={item.link} key={i}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-3">
              <div className="footer-newsletter-part">
                <h4 className={montserrat.className}>Newsletter</h4>
                <div className="newsletter-body">
                  <p className={montserrat.className}>
                    Subscribe for our upcoming latest address and resources
                  </p>
                  <div className="newsletter-form">
                    <input type="enail" placeholder="Enter your Email" />
                    <button>
                      <FiSend />
                    </button>
                  </div>
                  <div className="footer-scioal">
                    {footerSocial.map((item, i) => (
                      <div className="images">{item.name}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <span className={montserrat.className}>
          Copyright &copy; Creative IT Institute 2023. All Right Reserved By @
          Azmir Uddin Alif.
        </span>
      </div>
    </>
  );
};

export default Footer;
