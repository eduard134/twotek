  import React, { useEffect, useRef, useState } from "react";
  import "animate.css";
  import useLanguage from "../../public/LanguageContext";
  import { getTranslatedContent } from "./TranslateRoToRu";

  const Parallax1 = () => {
    const [hoveredCircleIndex, setHoveredCircleIndex] = useState<number | null>(
      null
    );
    const myRef = useRef<HTMLDivElement | null>(null);
    const h1Ref = useRef<HTMLDivElement | null>(null);
    const h2Ref = useRef<HTMLHRElement | null>(null);
    const h3Ref = useRef<HTMLDivElement | null>(null);
    const h4Ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const { language, setLanguage } = useLanguage();
    const content = getTranslatedContent(language);

    useEffect(() => {
      if (myRef.current && !hasAnimated) {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasAnimated(true);
            observer.unobserve(myRef.current!);
          }
        });
        observer.observe(myRef.current!);
      }

      if (h1Ref.current && !hasAnimated) {
        const h1Observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setIsVisible2(true);
            setHasAnimated(true);
            h1Observer.unobserve(h1Ref.current!);
          }
        });
        h1Observer.observe(h1Ref.current!);
      }
      if (h2Ref.current && !hasAnimated) {
        const h2Observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setIsVisible3(true);
            setHasAnimated(true);
            h2Observer.unobserve(h2Ref.current!);
          }
        });
        h2Observer.observe(h2Ref.current!);
      }
      if (h3Ref.current && !hasAnimated) {
        const h3Observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setIsVisible4(true);
            setHasAnimated(true);
            h3Observer.unobserve(h3Ref.current!);
          }
        });
        h3Observer.observe(h3Ref.current!);
      }
      if (h4Ref.current && !hasAnimated) {
        const h4Observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setIsVisible5(true);
            setHasAnimated(true);
            h4Observer.unobserve(h4Ref.current!);
          }
        });
        h4Observer.observe(h4Ref.current!);
      }
    }, [hasAnimated]);

    const circleData = [
      {
        title: `${content.CirclesTitle1}`,
        description: `${content.CirclesText1}`,
      },
      {
        title: `${content.CirclesTitle2}`,
        description: `${content.CirclesText2}`,
      },
      {
        title: `${content.CirclesTitle3}`,
        description: `${content.CirclesText3}`,
      },
      {
        title: `${content.CirclesTitle4}`,
        description: `${content.CirclesText4}`,
      },
      {
        title: `${content.CirclesTitle5}`,
        description: `${content.CirclesText5}`,
      },
    ];

    const handleCircleHover = (index: number) => {
      if (!isMobile) {
        setHoveredCircleIndex(index);
      }
    };
    

    const handleCircleLeave = () => {
      setHoveredCircleIndex(null);
    };

    // Determine screen size using client-side logic
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth < 768);
        setIsTablet(screenWidth >= 768 && screenWidth <= 1024);
        setIsMobileOrTablet(screenWidth < 1024);
      };

      handleResize(); // Initial size check
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
      <>
        <div className=" mb-20 sm:mb-20 mt-24 sm:mt-44 lg:mt-44 sm:flex justify-evenly mx-2 sm:mx-10 lg:mx-32 items-center">
          <h1
            ref={h1Ref}
            className={`sm:text-start text-center text-2xl mb-5 lg:mb-7 sm:text-[43px] sm:leading-[50px] lg:text-5xl lg:max-w-[350px] lg:leading-[60px] font-semibold
              ${
                isVisible2 && !isMobileOrTablet
                  ? "tilt-in-right-1 "
                  : ""
              }`}
            style={{ color: "var(--carousel_h1)" }}
          >
            {content.BlobsTitle1} {content.BlobsTitle2}
          </h1>
          <hr
            ref={h2Ref}
            className={` h-1 rounded-xl sm:rotate-90 flex justify-center items-center sm:block sm:mx-0 mx-[12vw] mb-5 sm:mb-0 sm:w-56 lg:w-24
              ${isVisible3 ? "tracking-in-expand" : ""}`}
            style={{ background: "var(--carousel_hr)" }}
          />
          <p
            ref={h3Ref}
            className={`sm:text-xl sm:text-start text-center ${
              isVisible4 ? "tilt-in-right-1" : ""
            }`}
            style={{ color: "var(--carousel_h1)" }}
          >
            {content.BlobsText1} <br /> {content.BlobsText2} <br />
            <span className="text-[#008DFD] font-semibold">
              {" "}
              {content.BlobsText3}
            </span>
          </p>
        </div>
        <div
          ref={h4Ref}
          className={`flex flex-col justify-between text-center items-center font-semibold text-white
            ${isVisible5 ? "fade-in-bck" : ""}`}
        >
          {isMobile ? (
            <>
              <div className="flex justify-between">
                {circleData.slice(0, 3).map((circle, index) => (
                  <div
                    key={index}
                    className={`circle-box circle-box-${
                      index + 1
                    } shadow-md shadow-white border-[1px]
                      ${hoveredCircleIndex === index ? "hovered" : ""}
                      mobile-circle-box`}
                    onMouseEnter={() => handleCircleHover(index)}
                    onMouseLeave={handleCircleLeave}
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, var(--nav_bg1), var(--nav_bg2), var(--nav_bg3)",
                    }}
                  >
                    <div
                      className={`circle-title ${
                        hoveredCircleIndex === index ? "hidden" : ""
                      }`}
                    >
                      {circle.title}
                    </div>
                    {hoveredCircleIndex === index && (
                      <div className={`circle-description`}>
                        {circle.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mb-10">
                {circleData.slice(3, 5).map((circle, index) => (
                  <div
                    key={index + 3}
                    className={`circle-box circle-box-${
                      index + 4
                    } shadow-md shadow-white border-[1px]
                      ${hoveredCircleIndex === index + 3 ? "hovered" : ""}
                      mobile-circle-box`}
                    onMouseEnter={() => handleCircleHover(index + 3)}
                    onMouseLeave={handleCircleLeave}
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, var(--nav_bg1), var(--nav_bg2), var(--nav_bg3)",
                    }}
                  >
                    <div
                      className={`circle-title ${
                        hoveredCircleIndex === index + 3 ? "hidden" : ""
                      }`}
                    >
                      {circle.title}
                    </div>
                    {hoveredCircleIndex === index + 3 && (
                      <div className={`circle-description`}>
                        {circle.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="sm:flex justify-between mb-10">
              {circleData.map((circle, index) => (
                <div
                  key={index}
                  className={`circle-box circle-box-${
                    index + 1
                  } shadow-md shadow-white border-[1px]
                    ${hoveredCircleIndex === index ? "hovered" : ""}
                    ${isMobile ? "mobile" : ""}`}
                  onMouseEnter={() => handleCircleHover(index)}
                  onMouseLeave={handleCircleLeave}
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, var(--nav_bg1), var(--nav_bg2), var(--nav_bg3)",
                  }}
                >
                  <div
                    className={`circle-title ${
                      hoveredCircleIndex === index ? "hidden" : ""
                    }`}
                  >
                    {circle.title}
                  </div>
                  {hoveredCircleIndex === index && (
                    <div className={`circle-description`}>
                      {circle.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <style jsx>{`
          .circle-box {
            width: ${isMobile ? "110px" : "210px"};
            height: ${isMobile ? "110px" : "210px"};
            border-radius: 50%;
            margin-right: 4rem;
            animation: moveAround 5s linear infinite alternate;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all 0.2s ease-in;
            margin-bottom: 20px;
            padding: 0 20px;
          }

          @media (max-width: 728px) {
            .circle-box {
              margin-right: 2vw;
              margin-left: 2vw;
              margin-bottom: 0;
            }
          }
          
          @media (max-width: 1024px) {
            .circle-box {
              margin-right: 2vw;
              margin-left: 2vw;
              width: 110px;
              height:110px;
            }
          }

          .circle-box.mobile .circle-description {
            display: none;
          }

          .circle-box.hovered {
            background-color: #a4bac8;
            animation-play-state: paused;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          .circle-description {
            display: none;
            background-color: transparent;
            padding: 10px; /* Ajustați padding-ul pentru a face textul să încapă */
            text-align: center;
            color: white;
            font-size: 14px; /* Reduceti dimensiunea fontului la valoarea dorita */
            font-weight: 400;
          }
          

          .circle-description.visible {
            display: block;
          }

          .circle-box-1:hover .circle-description,
          .circle-box-2:hover .circle-description,
          .circle-box-3:hover .circle-description,
          .circle-box-4:hover .circle-description,
          .circle-box-5:hover .circle-description {
            display: block;
          }

          .circle-box-1 {
            animation-name: moveAround1;
          }

          .circle-box-2 {
            animation-name: moveAround2;
          }

          .circle-box-3 {
            animation-name: moveAround3;
          }

          .circle-box-4 {
            animation-name: moveAround4;
          }

          .circle-box-5 {
            animation-name: moveAround5;
          }

          @keyframes moveAround1 {
            0% {
              transform: translate(30px, 10px);
            }
            100% {
              transform: translate(10px, -40px);
            }
          }

          @media (max-width: 720px) {
            @keyframes moveAround1 {
              0% {
                transform: translate(30px, 10px);
              }
              100% {
                transform: translate(10px, -10px); // Modificați această valoare
              }
            }
          }

          @keyframes moveAround2 {
            0% {
              transform: translate(0, 2px);
            }
            100% {
              transform: translate(-20px, 30px);
            }
          }

          @media (max-width: 720px) {
            @keyframes moveAround2 {
              0% {
                transform: translate(0, 2px);
              }
              100% {
                transform: translate(-10px, 15px); // Modificați această valoare
              }
            }
          }

          @keyframes moveAround3 {
            0% {
              transform: translate(0, -10px);
            }
            100% {
              transform: translate(-50px, 3px);
            }
          }

          @media (max-width: 720px) {
            @keyframes moveAround3 {
              0% {
                transform: translate(0, -10px);
              }
              100% {
                transform: translate(-30px, 3px); // Modificați această valoare
              }
            }
          }

          @keyframes moveAround4 {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(-30px, -10px);
            }
          }
          @media (max-width: 720px) {
            @keyframes moveAround4 {
              0% {
                transform: translate(0, 0);
              }
              100% {
                transform: translate(-10px, -5px); // Modificați această valoare
              }
            }
          }

          @keyframes moveAround5 {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(20px, -30px);
            }
          }
          @media (max-width: 720px) {
            @keyframes moveAround5 {
              0% {
                transform: translate(0, 0);
              }
              100% {
                transform: translate(10px, 0px); // Modificați această valoare
              }
            }
          }
        `}</style>
      </>
    );
  };

  export default Parallax1;
