"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "./typewriter";
import LogoBg from "../../public/images/logo-bg-frog-rocket.svg";

const txt = "Leap to Your Dreams and Empower Your Journey to the Moon!";

function WelcomePage() {
  const imageRef = useRef(null);
  const handleMouseMove = (event) => {
    const imageElement = event.currentTarget;
    const {
      left, top, width, height,
    } = imageElement.getBoundingClientRect();
    const x = event.clientX - left - width / 2;
    const y = event.clientY - top - height / 2;
    imageElement.style.transform = `rotateX(${y * 0.05}deg) rotateY(${x * -0.05}deg)`;
  };

  const handleMouseLeave = (event) => {
    const imageElement = event.currentTarget;
    imageElement.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="bg-[#0F030F] h-full text-white overflow-y-auto">
      <div className="max-w-screen-md m-auto flex flex-col items-center">
        <span className="text-3xl font-bold text-center mt-5 z-[2]">FrogFund</span>
        <div className="h-[5vh] z-[2]">
          <Typewriter text={txt} />
        </div>
        <Image
          src={LogoBg}
          alt="logo"
          width={480}
          ref={imageRef}
          className="relative left-5 bobbing"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
        <Link
          href="/home"
        >
          <div
            className="font-bold bg-[#4caf50] rounded-full leading-8 px-10 py-2 text-center hover:bg-[rgb(97,208,102)] mt-9"
          >
            Support or Invest Now
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
