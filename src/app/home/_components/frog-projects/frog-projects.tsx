import React from "react";
import FrogItem from "./frog-item";
import { FrogsData } from "./frog-mock";

function FrogProjects() {
  return (
    <div className="flex flex-col gap-2 max-w-screen-md m-auto mt-2 mb-8">
      {FrogsData.map((item) => (
        <FrogItem frogData={item} />
      ))}
    </div>
  );
}

export default FrogProjects;
