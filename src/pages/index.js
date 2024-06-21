import Header from "@/components/header";
import Home from "../sections/Home";
import About from "../sections/About";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Footer from "@/components/footer";
import Testimonials from "@/sections/Testimonials";
import Contact from "../sections/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <div className="flex w-full border border-primary"></div>
      <Services />
      <div className="flex w-full border border-primary"></div>
      <About />
      <div className="flex w-full border border-primary"></div>
      <Projects />
      <div className="flex w-full border border-primary"></div>
      <Testimonials />
      <div className="flex w-full border border-primary"></div>
      <Contact />
      <Footer />
    </>
  );
}
