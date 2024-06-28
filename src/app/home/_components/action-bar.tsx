import React, { FC } from "react";
import Link from "next/link";
import { ITabs } from "../interface/frog-project";

type IProps = {
  isLogged: boolean,
  curTab: ITabs,
  onChangeTab: (tab: ITabs) => void
}
const commonClassNames = "inline-block mr-2  leading-8 px-3 text-center hover:scale-105 font-bold";
const ActionBar:FC<IProps> = ({ isLogged, curTab, onChangeTab }) => (
  <div className="top-65 z-40 w-full bg-[#0F030F] h-[40px]">
    <div className="h-full max-w-screen-md m-auto flex flex-row items-center justify-between">
      <div>
        <button onClick={() => onChangeTab("ALL")} className={`${commonClassNames} ${curTab === "ALL" ? "font-bold border-b-2 border-[#4caf50]" : ""}`}>All Project</button>
        {
          isLogged && (
            <>
              <button onClick={() => onChangeTab("MY_PROJECT")} className={`${commonClassNames} ${curTab === "MY_PROJECT" ? "border-b-2 border-[#4caf50]" : ""}`}>My Project</button>
              <button onClick={() => onChangeTab("MY_FUND")} className={`${commonClassNames} ${curTab === "MY_FUND" ? "border-b-2 border-[#4caf50]" : ""}`}>My Fund</button>
            </>
          )
        }
      </div>
      {
        isLogged ? (
          <Link
            href="/detail"
            className="font-bold bg-[#4caf50] rounded-2xl leading-8 px-3 text-center hover:bg-[rgb(97,208,102)]
          hover:scale-105"
          >
            Create Project
          </Link>
        ) : <span className="font-semibold">Now connect wallet to create a project</span>
      }
    </div>
  </div>
);

export default ActionBar;
