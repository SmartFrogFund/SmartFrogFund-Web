import React from "react";
import Header from "./_components/header";
import ActionBar from "./_components/action-bar";
import FrogProjects from "./_components/frog-projects/frog-projects";

function HomePage() {
  return (
    <div className="bg-[#0F030F] text-white">
      <Header />
      <ActionBar />
      <FrogProjects />
    </div>
  );
}

export default HomePage;
