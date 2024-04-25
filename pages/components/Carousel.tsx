import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";
import { useTheme } from "@/public/ThemeContext";


const logoData = [
  { src: "/images/sanduta.png", link: "https://admin-art.vercel.app/" },
  { src: "/images/buffy.png", link: "https://admin090609.github.io/" },
  { src: "/images/a&d.png", link: "https://adfitness.vercel.app/" },
  { src: "/images/apisudex.png", link: "https://apisudex.store/" },
];

const darkThemeLogoData = [
  { src: "/images/sanduta.png", link: "https://admin-art.vercel.app/" },
  { src: "/images/buffy-dark.png", link: "https://admin090609.github.io/" },
  { src: "/images/a&d.png", link: "https://adfitness.vercel.app/" },
  { src: "/images/apisudex.png", link: "https://apisudex.store/" },
];

const Carousel = () => {
  const { theme: themeFromContext, toggleTheme } = useTheme();
  const [theme, setTheme] = useState(themeFromContext);
  const myRef = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLHRElement | null>(null); // Update this line
  const h3Ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // State pentru a urmări dacă animația a fost deja activată

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  useEffect(() => {
    const bodyTheme = themeFromContext;
    if (bodyTheme) {
      setTheme(bodyTheme);
    }
  }, [themeFromContext]);

  useEffect(() => {
    if (myRef.current && !hasAnimated) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.unobserve(myRef.current!); // Use the non-null assertion operator here
        }
      });
      observer.observe(myRef.current!); // Use the non-null assertion operator here
    }

    if (h1Ref.current && !hasAnimated) {
      const h1Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible2(true);
          setHasAnimated(true);
          h1Observer.unobserve(h1Ref.current!); // Use the non-null assertion operator here
        }
      });
      h1Observer.observe(h1Ref.current!); // Use the non-null assertion operator here
    }
    if (h2Ref.current && !hasAnimated) {
      const h2Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible3(true);
          setHasAnimated(true);
          h2Observer.unobserve(h2Ref.current!); // Use the non-null assertion operator here
        }
      });
      h2Observer.observe(h2Ref.current!); // Use the non-null assertion operator here
    }
    if (h3Ref.current && !hasAnimated) {
      const h3Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible4(true);
          setHasAnimated(true);
          h3Observer.unobserve(h3Ref.current!); // Use the non-null assertion operator here
        }
      });
      h3Observer.observe(h3Ref.current!); // Use the non-null assertion operator here
    }
  }, [hasAnimated]);

  const handleMouseEnter = () => {
    setIsAnimationPaused(true);
  };

  const handleMouseLeave = () => {
    setIsAnimationPaused(false);
  };

  return (
    <>
      <div className=" mt-24 sm:mt-44 lg:mt-32 mb-10 lg:mb-20 flex-col justify-evenly mx-2  lg:mx-32 items-center">
        <h1
          ref={h1Ref}
          className={` text-center text-2xl sm:text-5xl  lg:text-4xl mb-5 sm:mb-7 font-semibold 
${isVisible2 ? "tracking-in-expand-fwd-top" : ""}`}
          style={{ color: "var( --carousel_h1)" }}
        >
          {content.CarouselTitle}
        </h1>
        <hr
          ref={h2Ref}
          className={` h-1 rounded-xl flex justify-center items-center mb-5 mx-[12vw] sm:mb-7 lg:mx-[25vw]
${isVisible3 ? "tracking-in-expand" : ""}`}
          style={{ background: "var(--carousel_hr)" }}
        />

        <p
          ref={h3Ref}
          className={` sm:text-2xl lg:text-xl text-center sm:mx-[8vw] lg:mx-[19vw]
${isVisible4 ? "tilt-in-left-1" : ""}`}
          style={{ color: "var(--carousel_h1)" }}
        >
          {content.CarouselText1}
          <span
            className=" font-semibold"
            style={{ color: "var(--carousel_hr)" }}
          >
            {" "}
            {content.CarouselText2}
          </span>
        </p>
      </div>
      <div>
        <div ref={myRef} className={`${isVisible ? "tilt-in-right-2" : ""}`}>
          <div className=" sm:mt-12 logo-slider-container ">
            <div
              className={`logo-slider ${isAnimationPaused ? "paused" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {logoData.map((logo, index) => (
                <div key={index} className="logo-slide">
                  <Link href={logo.link} target="_blank">
                    <div className="w-100 h-100">
                      <Image
                        width={100}
                        height={100}
                        src={
                          theme === "dark"
                            ? darkThemeLogoData[index].src
                            : logo.src
                        }
                        alt=""
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div
              className={`logo-slider ${isAnimationPaused ? "paused" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {logoData.map((logo, index) => (
                <div key={index} className="logo-slide">
                  <Link href={logo.link} target="_blank">
                    <div className="w-100 h-100">
                      <Image
                        width={100}
                        height={100}
                        src={
                          theme === "dark"
                            ? darkThemeLogoData[index].src
                            : logo.src
                        }
                        alt=""
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
