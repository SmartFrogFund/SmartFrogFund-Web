"use client";

import React from "react";
import { useAccount } from "wagmi";
import { useTheGraph } from "@/hooks/useGraph";
import Header from "./_components/header";
import ActionBar from "./_components/action-bar";
import FrogProjects from "./_components/frog-projects/frog-projects";
import LogoBg from "../../public/images/logo-bg-frog-rocket.png";
import { IFrogItem, IFundedItem, ITabs } from "./interface/frog-project";

const graphApiUrl = process.env.NEXT_PUBLIC_GRAPH_API_URL;

function HomePage() {
  const { address } = useAccount();
  const [curTab, setCurTab] = React.useState<ITabs>("ALL");
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
        supporter
        projectId
      }
    }
    `,
  });
  React.useEffect(() => {
    const { projectCreateds, projectFundeds } = resData?.data || {};
    setProjectList(projectCreateds || []);
    setFundedList(projectFundeds || []);
  }, [resData]);
  const handleChangeTab = (tab:ITabs) => setCurTab(tab);
  const isLogged = Boolean(address);
  const myProjects: Array<IFrogItem> = []; // 我发起的项目
  const myFundedProjects: Array<IFrogItem> = []; // 我投资的项目
  const myFundedProjectIds: Array<string> = [];
  if (isLogged) {
    fundedList.forEach((item) => {
      if (item.supporter === address) {
        myFundedProjectIds.push(item.projectId);
      }
    });
    projectList.forEach((item) => {
      if (item.creator === address) myProjects.push(item);
      if (myFundedProjectIds.includes(item.projectId)) myFundedProjects.push(item);
    });
  }
  const projectsData = {
    ALL: projectList,
    MY_PROJECT: myProjects,
    MY_FUND: myFundedProjects,
  };
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
      <ActionBar isLogged={isLogged} curTab={curTab} onChangeTab={handleChangeTab} />
      <FrogProjects projectList={projectsData[curTab]} isLoading={loading} />
    </div>
  );
}

export default HomePage;
