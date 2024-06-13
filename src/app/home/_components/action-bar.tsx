import React from "react";
import Link from "next/link";

function ActionBar() {
  return (
    <div className="top-65 z-40 w-full bg-[#0F030F] h-[40px]">
      <div className="h-full max-w-screen-md m-auto flex flex-row items-center justify-center">
        <Link
          href="/detail"
          className="bg-[#4caf50] rounded-2xl leading-8 px-3 w-6/12 text-center"
        >
          Create Project
        </Link>
      </div>
    </div>
  );
}

export default ActionBar;
