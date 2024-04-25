import React, { useState, useEffect } from "react";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

interface CalendlyWidgetProps {
  setCalendlyOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ setCalendlyOpen }) => {  const [showCalendly, setShowCalendly] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // State variable for the fade-in animation

  const toggleCalendly = () => {
    setShowCalendly(!showCalendly);
    setCalendlyOpen(!showCalendly);
  };

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);
    };

    handleResize(); // Initial size check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Trigger the fade-in animation when the component mounts
    setFadeIn(true);
  }, []);

  const calendlyStyles = {
    width: "100vw",
    height: "100vh",
    zIndex: 9999,
    display: showCalendly ? "block" : "none",
  };

  // Conditionally apply the CSS class for fade-in
  const containerClassName = `fade-in ${fadeIn ? "visible" : ""}`;

  return (
    <div
      className={containerClassName}
      style={{ position: "fixed", bottom: "0px", right: "0px", zIndex: 9999 }}
    >
      <button
        onClick={toggleCalendly}
        style={{
          position: "absolute",
          background: "#008DFD",
          color: "#ffffff",
          padding: isMobile ? "5px 1px" : "10px 20px",
          border: "none",
          bottom: "20px",
          right: "20px",
          width: isMobile ? "130px" : "190px", // Stilul pentru mobile
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 10000,
        }}
      >
        {isMobile ? content.calendlyMobile : content.calendly}
      </button>
      <div style={calendlyStyles}>
        <iframe
          title="Calendly"
          src="https://calendly.com/two2tek?hide_landing_page_details=1&hide_gdpr_banner=1"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default CalendlyWidget;
