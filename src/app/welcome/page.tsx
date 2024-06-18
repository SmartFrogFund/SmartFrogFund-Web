"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "./typewriter";
import LogoBg from "../../public/images/logo-bg-frog-rocket.svg";

const txt = "Leap to Your Dreams and Empower Your Journey to the Moon";

function HomePage() {
  return (
    <div className={`bg-[#0F030F] h-full text-white overflow-y-scroll`}>
      <div className="max-w-screen-md m-auto flex flex-col items-center">
        <span className="text-3xl font-bold text-center mt-5">FrogFund</span>
        <div className="h-20">
          <Typewriter text={txt} />
        </div>
        <Image
          src={LogoBg}
          alt="logo"
          width={500}
          className="relative left-5"
        />
        <Link
          href="/home"
          className="font-bold bg-[#4caf50] rounded-2xl leading-8 px-3 w-6/12 text-center hover:bg-green-950"
        >
          Support or Invest Now
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
