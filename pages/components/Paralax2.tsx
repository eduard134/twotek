import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "animate.css";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const Paralax2 = () => {
  const div1Ref = useRef<HTMLDivElement | null>(null);
  const div2Ref = useRef<HTMLDivElement | null>(null);
  const div3Ref = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null);

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.0001,
    };

    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible1(true);
        observer1.unobserve(div1Ref.current!);
      }
    }, observerOptions);

    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible2(true);
        observer2.unobserve(div2Ref.current!);
      }
    }, observerOptions);

    const observer3 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible3(true);
        observer3.unobserve(div3Ref.current!);
      }
    }, observerOptions);

    const observer4 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer4.unobserve(div3Ref.current!);
      }
    }, observerOptions);

    const observer5 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer5.unobserve(div3Ref.current!);
      }
    }, observerOptions);

    if (div1Ref.current) {
      observer1.observe(div1Ref.current);
    }

    if (div2Ref.current) {
      observer2.observe(div2Ref.current);
    }

    if (div3Ref.current) {
      observer3.observe(div3Ref.current);
    }

    if (h1Ref.current) {
      observer4.observe(h1Ref.current);
    }

    if (h2Ref.current) {
      observer5.observe(h2Ref.current);
    }
  }, []);

  return (
    <>
      <div className="mt-20 sm:mt-0 lg:mt-64 lg:mx-64 p-4 md:p-8 lg:p-0">
        <h1
          ref={h1Ref}
          className={`text-center text-2xl sm:text-5xl font-semibold ${
            isVisible ? "slide-in-bck-top" : ""
          }`}
          style={{ color: "var(--carousel_h1)" }}
        >
          {content.HowTitle1}{" "}
          <span className="text-[#008DFD]">{content.HowTitle2}</span>{" "}
          {content.HowTitle3}
        </h1>
        <p
          ref={h2Ref}
          className={`text-center sm:text-2xl mb-10 sm:mb-20 sm:mt-7 px-2 mt-5 sm:leading-[35px] ${
            isVisible ? "slide-in-bck-bottom" : ""
          }`}
          style={{ color: "var(--carousel_p)" }}
        >
          {content.HowText}
        </p>
      </div>
      <div className="sm:flex sm:flex-wrap block justify-center">
        <div
          ref={div1Ref}
          className={`lg:w-[34%]  w-[full] rounded-xl sm:p-4 ${
            isVisible1 ? "tilt-in-fwd-tl" : ""
          }`}
          style={{
            background:
              "linear-gradient(120deg, var(--carousel_gradient1), var(--carousel_gradient2))", // Keep the original colors or change them as needed
          }}
        >
          <div className=" circle  "></div>
          <h1 className="sm:text-3xl text-2xl text-start font-bold pl-6 sm:pl-6 pt-6 sm:leading-tight">
            {content.HowBoxTitle1}
          </h1>
          <p
            className="sm:text-xl sm:mb-0 mb-2 p-6 sm:max-w-[700px] lg:max-w-full sm:p-6 sm:leading-normal"
            style={{ color: "var(--paralax_p)" }}
          >
            {content.HowBoxText}
          </p>
        </div>
        <div
          ref={div2Ref}
          className={`lg:w-[34%] w-[full] sm:mt-8 lg:mt-0 mt-8 lg:ml-20 rounded-xl sm:p-4 ${
            isVisible2 ? "tilt-in-fwd-tr" : ""
          }`}
          style={{
            background:
              "linear-gradient(120deg, var(--carousel_gradient1), var(--carousel_gradient2))", // Keep the original colors or change them as needed
          }}
        >
          <div className=" circle1 "></div>
          <h1 className="sm:text-3xl text-2xl text-start font-bold pt-6 pl-6 sm:pl-6 sm:leading-tight">
            {content.HowBoxTitlev2}
          </h1>
          <p
            className="sm:text-xl sm:mb-0 mb-2 p-6 sm:p-6 sm:max-w-[700px] lg:max-w-full sm:leading-normal"
            style={{ color: "var(--paralax_p)" }}
          >
            {content.HowBoxTextv2}
          </p>
        </div>
        <div
          ref={div3Ref}
          className={`lg:w-[34%] h-[full] mt-8 sm:mt-8 lg:mt-10 rounded-xl p-4  ${
            isVisible3 ? "tilt-in-fwd-tl" : ""
          }`}
          style={{
            background:
              "linear-gradient(120deg, var(--carousel_gradient1), var(--carousel_gradient2))", // Keep the original colors or change them as needed
          }}
        >
          <div className=" circle2 "></div>
          <h1 className="sm:text-3xl text-2xl text-start font-bold pt-3 pl-3 sm:pl-6 lg:pl-0  sm:leading-tight">
            {content.HowBoxTitlev3}
          </h1>
          <p
            className="sm:text-xl sm:mb-0 mb-2 p-3 sm:pl-6 sm:max-w-[700px] lg:max-w-full lg:pl-0 sm:leading-normal"
            style={{ color: "var(--paralax_p)" }}
          >
            {content.HowBoxTextv3}
          </p>
          <div className="lg:w-[100vw] w-[23%] rounded-[50%] circle-shape sm:w-[7.5%] float-rigth text-center"></div>
        </div>
      </div>
    </>
  );
};

export default Paralax2;
