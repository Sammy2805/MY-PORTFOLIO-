import logo from "../assets/software-developer.png";
import { Link , NavLink }  from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  hamMenu,
  appearAnimation,
  hAppear,
  navLinks,
} from "../lib/framer-motion-utils";
import { MyContext } from "../ContextComp";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const contents = useContext(MyContext)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 useEffect(() => {
   if (isOpen) {
     document.body.style.height = "100dvh";
     document.body.style.minHeight = "500px";
     document.body.style.overflow = "hidden";
   } else {
     document.body.style.height = "auto";
     document.body.style.minHeight = "0px";
     document.body.style.overflow = "auto"; 
   }

   
   return () => {
     document.body.style.height = "";
     document.body.style.minHeight = "";
     document.body.style.overflow = "";
   };
 }, [isOpen]);

  return (
    <header className={`flex items-center duration-300 ease-in transition-all ${contents?.scrollDirection === "up" ? "top-0" : "-top-40"} justify-between fixed z-[200]  left-0 w-full gap-4  bg-black  text-white px-sides py-3`}>
      <Link to="/" aria-label="logo" className="">
        <img src={logo} alt="Logo" className="aspect-square w-[30px] sm:w-img" />
      </Link>

      <nav className="relative  w-s-img aspect-square ">
        <button
          className={` *:transition-transform *:duration-300 absolute right-0 z-[1000] *:ease-in *:h-[2px] w-s-img *:rounded-full flex items-end flex-col gap-[6px] ham-btn ${
            isOpen ? "active *:bg-white" : "*:bg-white"
          }`}
          onClick={toggleMenu}
        >
          <div className="w-full bar1"></div>
          <div className="w-3/4 bar2"></div>
          <div className="w-2/4 bar3"></div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu"
              variants={hamMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`fixed w-full  top-0  flex flex-wrap gap-y-4 px-sides  md:justify-between items-center left-0 z-[500] bg-black text-goldenrod h-dvh min-h-[500px]   `}
            >
              <div className="md:w-[55%] w-full gap-4  flex justify-center">
                <motion.h4 variants={hAppear} className="  h-[60px]">
                  MENU
                </motion.h4>
                <ul className=" *:font-cinzel  flex flex-col gap-3 md:text-5xl text-4xl *:font-black">
                  <motion.li variants={navLinks} onClick={toggleMenu}>
                    <NavLink
                      className=" nav-links w-full h-full  flex "
                      id="nav-links"
                      to="/"
                    >
                      {" "}
                      HOME{" "}
                    </NavLink>
                  </motion.li>
                  <motion.li variants={navLinks} onClick={toggleMenu}>
                    {" "}
                    <NavLink
                      id="nav-links"
                      className=" nav-links w-full h-full  flex "
                      to="/about"
                    >
                      {" "}
                      ABOUT{" "}
                    </NavLink>
                  </motion.li>
                  <motion.li variants={navLinks} onClick={toggleMenu}>
                    {" "}
                    <NavLink
                      className=" nav-links w-full h-full  flex "
                      id="nav-links"
                      to="/projects"
                    >
                      {" "}
                      PROJECT{" "}
                    </NavLink>
                  </motion.li>
                  <motion.li variants={navLinks} onClick={toggleMenu}>
                    {" "}
                    <NavLink
                      className=" nav-links w-full h-full  flex "
                      id="nav-links"
                      to="/contact"
                    >
                      {" "}
                      CONTACT{" "}
                    </NavLink>
                  </motion.li>
                </ul>
              </div>
              <div className="md:w-[45%] font-medium w-full flex flex-col gap-2 text-lg   items-center justify-end">
               
                <motion.a
                  className="button  nav_btn  text-white text-center"
                  href="mailto:adekunlesammy10@gmail.com"
                  variants={appearAnimation}
                >
                  Email me
                </motion.a>

                <motion.a
                  className="button nav_btn text-white  text-center"
                  href="tel:+2349059077159"
                  variants={appearAnimation}
                >
                  +234 905 907 7159
                </motion.a>
                <motion.span
                  variants={appearAnimation}
                  className="flex text-lg items-center gap-2 "
                >
                  <a
                    href="https://www.instagram.com/bhad_man_000?igsh=MW5peG43eXp3NWdxaA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>{" "}
                  <a
                    href="https://x.com/Bhadmansammy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>{" "}
                  <a
            href="https://github.com/Sammy2805"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>{" "}
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
