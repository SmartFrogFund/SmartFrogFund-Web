import React, { FC } from "react";
import { Empty } from "antd";
import FrogItem from "./frog-item";
import Loading from "../../lodaing";
import { IFrogItem } from "../../interface/frog-project";

type IProps = {
  projectList: Array<IFrogItem>,
  isLoading: boolean
}

const FrogProjects: FC<IProps> = ({
  projectList, isLoading,
}) => {
  if (isLoading) {
    return (
      <Loading />
    );
  }
  return (
    <div className="flex flex-col gap-2 max-w-screen-md m-auto mt-2 mb-8">
      {projectList.length === 0 ? <Empty style={{ marginTop: 200 }} description={<span className="text-white">No data</span>} /> : projectList.map((item) => (
        <FrogItem key={item.id} frogData={item} />
      ))}
    </div>
  );
};

export default FrogProjects;
