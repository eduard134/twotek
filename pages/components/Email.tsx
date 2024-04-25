import { useState, useEffect, useRef } from "react";
import { a, useTrail } from "react-spring";
import Image from "next/image";
import "animate.css";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";
import React from "react";

const Email = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // State pentru a urmări dacă animația a fost deja activată

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");

  const [[{ width, opacity }, { scale }], api] = useTrail(2, () => ({
    width: 200,
    opacity: 1,
    scale: 0,
  }));

  const openEmailInput = () => {
    api.start({
      width: 320,
      opacity: 0,
      scale: 1,
      onRest: () => setOpen(true),
    });
  };

  const closeEmailInput = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (emailValue === "") {
      setEmailError(`${content.EmailCompleteEmail}`);
      return;
    }

    setFormVisible(false);
    setSubmitted(true);

    api.start({
      width: 200,
      opacity: 1,
      scale: 0,
      onRest: () => {
        setOpen(false);
      },
    });
  };

  const resetForm = () => {
    setFormVisible(true);
    setSubmitted(false);
    setEmailValue("");
    setEmailError("");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("emailFormState") === "submitted") {
        setFormVisible(false);
        setSubmitted(true);
      } else {
        resetForm();
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (formVisible) {
        localStorage.setItem("emailFormState", "visible");
      } else {
        localStorage.setItem("emailFormState", "submitted");
      }
    }
  }, [formVisible]);

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
  }, [hasAnimated]);

  return (
    <>
      <div>
        <div
          className={` flex justify-center items-center mx-6  rounded-lg lg:mx-[34vw] bg-[#191919] mb-16 gap-4 lg:gap-0
${isVisible2 ? "fade-in-bottom" : ""}`}
          ref={h1Ref}
        >
          <div className="flex mt-10">
            <iframe
              className="border-transparent w-[200%] h-[260px]"
              src="https://noteforms.com/forms/mail-oakabe"
            ></iframe>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Email;
