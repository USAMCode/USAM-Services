import React, {useEffect, useState} from "react";
import { styles } from "@/styles/styles";

const navLinks = [
  {
    id: "services",
    title: "Services",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Products",
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
      if(scrollTop > 0){
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
    } w-full flex items-center sm:px-4 xs:px-4 py-5 fixed top-0 z-20 ${
      scrolled ? "bg-white " : "bg-transparent"
    }`}
  >
    <div className="w-full flex xs:gap-2 md:gap-4 justify-between items-center max-w-7xl mx-auto">
      {scrolled ? (
        <img className="w-40 xs:w-32 md:w-52 h-10 object-contain" src="https://d1nw187rmwcpt3.cloudfront.net/usam_logo.png" alt=""/>
      ):(
        <img className="w-40 xs:w-32 md:w-52 h-10 object-contain" src="https://d1nw187rmwcpt3.cloudfront.net/usam_logo.png" alt=""/>
      )}
      <ul className="list-none lg:flex flex flex-row xs:hidden sm:hidden md:hidden items-center justify-center gap-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.id ? "text-first" : scrolled ? `text-black` : " text-black"
            } hover:text-first text-lg font-semibold cursor-pointer `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
          <button className="group relative text-[18px] inline-block overflow-hidden rounded text-secondary hover:text-white">
            <span className="ease absolute left-0 top-0 h-0 w-0 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute right-0 top-0 h-0 w-0 transition-all duration-200 group-hover:h-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 transition-all duration-200 group-hover:h-full"></span>
            {/* <div onClick={() => {handleDownload('https://portfolio20072023.s3.ap-south-1.amazonaws.com/Resume.pdf','Resume.pdf')}}>Resume</div> */}
          </button>
      </ul>

      <div className="flex flex-row gap-2">
        <img className="w-40 xs:w-32 md:w-52 h-12 object-contain" src="https://d1nw187rmwcpt3.cloudfront.net/AutodeskBlack.png" alt=""/>
        <img className="w-40 sm:w-36 xs:w-28 md:w-36 h-12 object-contain" src="https://d1nw187rmwcpt3.cloudfront.net/autodesk-authorised-developer-logo-rgb-black.png" alt=""/>
      </div>

      <div className="lg:hidden xs:flex sm:flex md:flex flex-1 justify-end items-center">
        <img
          src={toggle ? "https://d1nw187rmwcpt3.cloudfront.net/close.svg" : "https://d1nw187rmwcpt3.cloudfront.net/menu.svg" }
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
                  active === nav.id ? "text-first" : "text-white"
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
  );
}
export default Header