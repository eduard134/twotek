import React, { useEffect, useState } from "react";
import Imaginea from "./components/Imaginea";
import CalendlyWidget from "./components/calendly";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Carousel from "./components/Carousel";
import Parallax1 from "./components/Parallax1";
import Paralax2 from "./components/Paralax2";
import Echipa from "./components/Echipa";
import Email from "./components/Email";
import Review from "./components/Review";
import ScrollUpButton from "./components/ScrollUpButton";
import Loading from "./loading"; // Ensure the correct import path
import NavBar from "./components/NavBar"; // Import the NavBar component
import Head from "next/head";

export default function Home() {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  // Simulate a delay for content loading
  useEffect(() => {
    // Replace this with your actual loading logic
    // For now, let's simulate a 3-second loading delay
    const loadingTimeout = setTimeout(() => {
      setContentLoaded(true);
    }, 2700);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <>

      {contentLoaded ? (
        <>
          {!calendlyOpen && <NavBar />}
          <div>{!calendlyOpen && <Info />}</div>
          <div>
            <Carousel />
          </div>
          <div className="w-[100vw] h-[60vh]" id="horizontal">
            <Parallax1 />
          </div>
          <div>
            <Paralax2 />
          </div>
          <div id="echipa">
            <Echipa />
          </div>
          <div
            className="mt-20 mb-32 flex justify-center items-center"
            id="proiecte"
          >
            <Imaginea />
          </div>
          <div className="mb-20" id="feedback">
            <Review />
          </div>
          <CalendlyWidget setCalendlyOpen={setCalendlyOpen} />
          <div>
            <Email />
          </div>
          <Footer />
          <ScrollUpButton />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
