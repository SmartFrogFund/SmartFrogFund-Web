"use client";

import React from "react";
import { useTheGraph } from "@/hooks/useGraph";
import Header from "./_components/header";
import ActionBar from "./_components/action-bar";
import FrogProjects from "./_components/frog-projects/frog-projects";
import LogoBg from "../../public/images/logo-bg-frog-rocket.png";
import { IFrogItem, IFundedItem } from "./interface/frog-project";

const graphApiUrl = process.env.NEXT_PUBLIC_GRAPH_API_URL;

function HomePage() {
  const [projectList, setProjectList] = React.useState<Array<IFrogItem>>([]);
  const [fundedList, setFundedList] = React.useState<Array<IFundedItem>>([]);
  const {
    data: resData,
    loading,
  }: { data: any; loading: boolean; error: any } = useTheGraph({
    url: graphApiUrl || "",
    query: ` 
    {
      projectCreateds {
        _description
        _link
        _title
        blockNumber
        blockTimestamp
        creator
        deadline 
        goalAmount
        id
        projectId
        transactionHash
      }
      projectFundeds {
        amount
        blockNumber
        blockTimestamp
        id
        isEth
        projectId
        supporter
        transactionHash
      }
    }
    `,
  });
  React.useEffect(() => {
    const { projectCreateds, projectFundeds } = resData?.data || {};
    setProjectList(projectCreateds || []);
    setFundedList(projectFundeds || []);
  }, [resData]);
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
      <FrogProjects projectList={projectList} />
    </div>
  );
}

export default HomePage;
