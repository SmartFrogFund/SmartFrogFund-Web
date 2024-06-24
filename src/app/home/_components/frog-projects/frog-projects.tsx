import React, { FC } from "react";
import FrogItem from "./frog-item";
import { IFrogItem } from "../../interface/frog-project";

type IProps = {
  projectList: Array<IFrogItem>
}

const FrogProjects: FC<IProps> = ({ projectList }) => (
  <div className="flex flex-col gap-2 max-w-screen-md m-auto mt-2 mb-8">
    {projectList.map((item) => (
      <FrogItem key={item.id} frogData={item} />
    ))}
  </div>
);

export default FrogProjects;
