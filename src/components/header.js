import React, {useEffect, useState} from "react";
import { styles } from "@/styles/styles";
import ShiftingDropDown from "./dropdown";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Header= () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if(scrollTop > 100){
        setScrolled(true)
      } else {
        setScrolled(false)
        setActive("")
      }
    };
    window.addEventListener("scroll", handleScroll)
    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((current) => {
        const sectionId = current.getAttribute("id")
        const sectionHeight =  current.offsetHeight;
        const sectionTop = current.getBoundingClientRect().top - sectionHeight * 0.8
        if(sectionTop < 0 && sectionTop + sectionHeight > 0){
          setActive(sectionId)
        }
      })
    }
    window.addEventListener("scroll", navbarHighlighter)
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter)
    }
  },[]);

  return (
    <nav
    className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}
  >
    <div className="flex justify-between items-center max-w-7xl mx-auto">

      <ul className="list-none flex flex-row justify-center xs:hidden gap-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.id ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
          <button class="group relative text-[18px] inline-block overflow-hidden rounded text-secondary hover:text-white">
            <span class="ease absolute left-0 top-0 h-0 w-0 transition-all duration-200 group-hover:w-full"></span>
            <span class="ease absolute right-0 top-0 h-0 w-0 transition-all duration-200 group-hover:h-full"></span>
            <span class="ease absolute bottom-0 right-0 h-0 w-0 transition-all duration-200 group-hover:w-full"></span>
            <span class="ease absolute bottom-0 left-0 h-0 w-0 transition-all duration-200 group-hover:h-full"></span>
            {/* <div onClick={() => {handleDownload('https://portfolio20072023.s3.ap-south-1.amazonaws.com/Resume.pdf','Resume.pdf')}}>Resume</div> */}
          </button>
      </ul>

      <div className="hidden xs:flex flex-1 justify-end items-center">
        <img
          src={toggle ? "https://portfolio20072023.s3.ap-south-1.amazonaws.com/close.svg" : "https://portfolio20072023.s3.ap-south-1.amazonaws.com/Menu.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.id ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </nav>
    // <div className="fixed top-0 left-0 right-0 z-50 flex flex-row bg-[#CDD2E8] text-black justify-center p-5">
    //   <div>
    //     {/* <h1 className="text-3xl text-primary font-bold">USAM Technology</h1> */}
    //   </div>
    //     <ul className="flex flex-row space-x-14 text-2xl text-primary">
    //       <li className="cursor-pointer hover:text-gray-700">Home</li>
    //       <li className="cursor-pointer hover:text-gray-700">About</li>
    //       <li className="cursor-pointer hover:text-gray-700">
    //         <ShiftingDropDown />
    //       </li>
    //       <li className="cursor-pointer hover:text-gray-700">Testimonials</li>
    //       <li className="cursor-pointer hover:text-gray-700">Contact</li>
    //     </ul>
    // </div>
  );
}
export default Header