"use client";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({
  subsets: ["latin"],
});
import { Menudata } from "@/data/CommonData";
import Image from "next/image";
import Logo from "../../assets/logo.svg";

const Menubar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Link href="#">
            <Image src={Logo} loading="lazy" alt="Logo" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {Menudata.map((item, i) => (
                <div className="shirina">
                  <Link className={dmSans.className} href={item.link} key={i}>
                    {item.title}
                  </Link>
                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menubar;
