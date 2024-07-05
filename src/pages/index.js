import Header from "@/components/header";
import Home from "../sections/Home";
import About from "../sections/About";
import Services from "../sections/Services";
import Products from "@/sections/Products";
import Footer from "@/components/footer";
import Testimonials from "@/sections/Testimonials";
import Contact from "../sections/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
