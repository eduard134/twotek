import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

function Slider() {
  const slideRef = useRef<HTMLDivElement | null>(null); // Specificăm tipul aici
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // State pentru a urmări dacă animația a fost deja activată
  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  const handleNextClick = () => {
    if (slideRef.current) {
      const slides = slideRef.current.querySelectorAll(".item");
      const firstSlide = slides[0];
      slideRef.current.removeChild(firstSlide);
      slideRef.current.appendChild(firstSlide);
    }
  };

  const handlePrevClick = () => {
    if (slideRef.current) {
      const slides = slideRef.current.querySelectorAll(".item");
      const lastSlide = slides[slides.length - 1];
      slideRef.current.removeChild(lastSlide);
      slideRef.current.prepend(lastSlide);
    }
  };

  useEffect(() => {
    if (h1Ref.current && !hasAnimated) {
      const h1Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible1(true);
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
          setIsVisible2(true);
          setHasAnimated(true);
          h2Observer.unobserve(h2Ref.current!); // Use the non-null assertion operator here
        }
      });
      h2Observer.observe(h2Ref.current!); // Use the non-null assertion operator here
    }
  }, [hasAnimated]);

  return (
    <>
      <div className="mb-52 sm:mt-32 mt-8 sm:mb-0">
        <div className="lg:mt-16  mb-5 sm:mb-10">
          <h1
            ref={h1Ref}
            className={`sm:text-5xl text-3xl leading-tight sm:text-start text-center font-bold ${
              isVisible1 ? "fade-in-right" : ""
            }`}
            style={{ color: "var(--carousel_p)" }}
          >
            {content.SliderTitle1} <br /> {content.SliderTitle2}
          </h1>
        </div>
        <div
          ref={h2Ref}
          className={`container ${isVisible1 ? "fade-in-left" : ""}`}
        >
          <div id="slide" ref={slideRef}>
            <div
              className="item border-t-gray-300 border-[1px] "
              style={{ backgroundImage: "url(/images/ad-display.png)", backgroundColor:"var(--cont_bg)" }}
            >
              <div className="content">
                <div className="name1 mb-3">{content.WebsiteAD}</div>
                <a
                  className="website mb-6"
                  href="https://adfitness.vercel.app/"
                  target="_blank"
                >
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front text">{content.SliderButton}</span>
                </a>
              </div>
            </div>
            <div
              className="item border-t-gray-300 border-[1px]"
              style={{ backgroundImage: "url(/images/apisudex-display.png)", backgroundColor:"var(--cont_bg)" }}
            >
              <div className="content">
                <div className="name1 mb-3">{content.WebsiteApisudex}</div>
                <a
                  className="website mb-6"
                  href="https://apisudex.store/"
                  target="_blank"
                >
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front text">{content.SliderButton}</span>
                </a>
              </div>
            </div>
            <div
              className="item border-t-gray-300 border-[1px]"
              style={{
                backgroundImage: "url(/images/buffy-display.png)",
                backgroundColor: "var(--cont_bg)",
              }}
            >
              <div className="content">
                <div className="name1 mb-3">{content.WebsiteBuffy}</div>
                <a
                  className="website mb-6"
                  href="https://admin090609.github.io/"
                  target="_blank"
                >
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front text">{content.SliderButton}</span>
                </a>
              </div>
            </div>
            <div
              className="item border-t-gray-300 border-[1px]"
              style={{
                backgroundImage: "url(/images/sanduta-display.png)",
                backgroundColor: "var(--cont_bg)",
              }}
            >
              <div className="content">
                <div className="name1 mb-3">{content.WebsiteSA}</div>

                <a
                  className="website mb-6"
                  href="https://sandutart.vercel.app/"
                  target="_blank"
                >
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front text">{content.SliderButton}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button id="prev" onClick={handlePrevClick}>
              <FontAwesomeIcon className=" px-1 lg:w-6 lg:h-6" icon={faAngleLeft} />
            </button>
            <button id="next" onClick={handleNextClick}>
              <FontAwesomeIcon className=" px-1 lg:w-6 lg:h-6" icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
