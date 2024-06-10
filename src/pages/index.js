import { useState } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Home from "../sections/Home";
import About from "../sections/About";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Section5 from "../sections/Contact";
import Section6 from "../sections/Section6";
import Footer from "@/components/footer";
import Testimonials from "@/sections/Testimonials";
import Contact from "../sections/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      {/* <Section5/> */}
      {/* <Section6/> */}
    </>
  );
}
