"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const scroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);

  }, []);

  return show ? (

    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
      className="fixed bottom-8 right-8 bg-red-600 w-14 h-14 rounded-full text-white text-2xl shadow-lg hover:bg-red-700 transition"
    >
      ↑
    </button>

  ) : null;
}