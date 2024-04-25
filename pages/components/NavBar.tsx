import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Language from "./Language";
import Color from "./Color";
import { Link as ScrollLink } from "react-scroll";
import TranslateRoToRu from "./TranslateRoToRu";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";
import Image from "next/image";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const router = useRouter();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  useEffect(() => {
    // Delay the animation to ensure it plays when the component mounts
    setTimeout(() => {
      setNav(true);
    }, 500);
  }, []);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div
      className={` left-0 top-0 w-full mt-0 md:mt-5 text-black z-bug px-0 md:px-8 ${
        nav ? "text-focus-in " : "lg:opacity-0 lg:translate-y-[-50px] "
      } transition-all duration-1000 ease-in-out`}
    >
      <div
        className="lg:max-w-[1305px] transition-all duration-300  max-w-[768px] sm:mt-4 sm:w-full flex sm:justify-around justify-evenly lg:justify-around items-center md:p-5 p-0 h-[70px] md:rounded-[70px] rounded-0 m-auto"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, var(--nav_bg1), var(--nav_bg2), var(--nav_bg3))",
        }}
      >
        <div className=" text-focus-in flex items-center -ml-14 lg:ml-0">
          <Image
            src="/images/Logo.png"
            alt="Icon"
            width={100}
            height={100}
            className="w-[16vh]"
          />
        </div>

        <div className="block lg:hidden">
          <input
            id="checkbox2"
            type="checkbox"
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <label
            className={` toggle2 ${
              isBurgerMenuOpen ? "fixed" : ""
            }`}
            htmlFor="checkbox2"
            onClick={toggleBurgerMenu}
          >
            <div id="bar4" className="bars"></div>
            <div id="bar5" className="bars"></div>
            <div id="bar6" className="bars"></div>
          </label>
        </div>

        {/* Navigation links for PC */}
        <ul
          className="hidden lg:flex text-base font-semibold text-white"
          style={{ color: "var(--link_color)" }}
        >
          <li className="p-4 relative group">
            <div className="group relative tracking-in-expand-fwd-bottom">
              <ScrollLink
                to="horizontal"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="cursor-pointer"
              >
                {content.Nav1}
              </ScrollLink>
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"
                style={{ background: "var(--link_hover)" }}
              ></div>
            </div>
          </li>
          <li className="p-4 relative group">
            <div className="group relative tracking-in-expand-fwd-bottom">
              <ScrollLink
                to="echipa"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1800}
                className="cursor-pointer"
              >
                {content.Nav2}
              </ScrollLink>
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"
                style={{ background: "var(--link_hover)" }}
              ></div>
            </div>
          </li>
          <li className="p-4 relative group">
            <div className="group relative tracking-in-expand-fwd-bottom">
              <ScrollLink
                to="proiecte"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1800}
                className="cursor-pointer"
              >
                {content.Nav3}
              </ScrollLink>
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"
                style={{ background: "var(--link_hover)" }}
              ></div>
            </div>
          </li>
          <li className="p-4 relative group">
            <div className="group relative tracking-in-expand-fwd-bottom">
              <ScrollLink
                to="feedback"
                spy={true}
                smooth={true}
                offset={-60}
                duration={2000}
                className="cursor-pointer"
              >
                {content.Nav4}
              </ScrollLink>
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"
                style={{ background: "var(--link_hover)" }}
              ></div>
            </div>
          </li>
        </ul>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden top-0 right-0 text-white h-screen flex justify-center items-center text-center lg-hidden-menu"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, var(--nav_bg1), var(--nav_bg2), var(--nav_bg3))",
              height: "101%",
              width: "100%",
              position: "fixed", // Asigurați-vă că meniul este fix în poziție
              zIndex: 2,
            }}
          >
            <ul className="flex flex-col justify-center items-center text-center gap-4 md:text-2xl ">
              <li className="my-2 flex items-center">
                <Image
                  src="/images/performance.png"
                  alt="Icon"
                  width={94}
                  height={94}
                  className="w-8 mr-2"
                />
                <ScrollLink
                  to="horizontal"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  onClick={() => {
                    closeMenu(); // Închideți meniul mobil
                    setIsBurgerMenuOpen(false); // Setează isBurgerMenuOpen pe false
                  }}
                >
                  {content.Nav1}
                </ScrollLink>
              </li>
              <li className="my-2 flex items-center">
                <Image
                  src="/images/team.png"
                  alt="Icon"
                  width={94}
                  height={94}
                  className="w-8 mr-2"
                />
                <ScrollLink
                  to="echipa"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1800}
                  onClick={() => {
                    closeMenu(); // Închideți meniul mobil
                    setIsBurgerMenuOpen(false); // Setează isBurgerMenuOpen pe false
                  }}
                >
                  {content.Nav2}
                </ScrollLink>
              </li>
              <li className="my-2 flex items-center">
                <Image
                  src="/images/projects.png"
                  alt="Icon"
                  width={94}
                  height={94}
                  className="w-8 mr-2"
                />
                <ScrollLink
                  to="proiecte"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1800}
                  onClick={() => {
                    closeMenu(); // Închideți meniul mobil
                    setIsBurgerMenuOpen(false); // Setează isBurgerMenuOpen pe false
                  }}
                >
                  {content.Nav3}
                </ScrollLink>
              </li>
              <li className="my-2 flex items-center">
                <Image
                  src="/images/feedback.png"
                  alt="Icon"
                  width={94}
                  height={94}
                  className="w-8 mr-2"
                />
                <ScrollLink
                  to="feedback"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={2000}
                  onClick={() => {
                    closeMenu(); // Închideți meniul mobil
                    setIsBurgerMenuOpen(false); // Setează isBurgerMenuOpen pe false
                  }}
                >
                  {content.Nav4}
                </ScrollLink>
              </li>
              <li className="my-2">
                <TranslateRoToRu />
              </li>
            </ul>
          </div>
        )}

        <div className="flex items-center ">
          <div className="mr-5 hidden lg:block">
            <TranslateRoToRu />
          </div>
          <div className="-mr-[3vw] sm:mr-0">
            <Color />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
