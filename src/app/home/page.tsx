import React from "react";
import Header from "./_components/header";
import ActionBar from "./_components/action-bar";
import FrogProjects from "./_components/frog-projects/frog-projects";
import LogoBg from "../../public/images/logo-bg-frog-rocket.png";

function HomePage() {
  return (
    <div
      className="bg-[#0F030F] h-full text-white bg-no-repeat bg-fixed overflow-y-scroll"
      style={{
        backgroundImage: `url(${LogoBg.src})`,
        backgroundSize: "auto",
        backgroundPosition: "10% 20%",
      }}
    >
      <Header />
      <ActionBar />
      <FrogProjects />
    </div>
  );
}

export default HomePage;
