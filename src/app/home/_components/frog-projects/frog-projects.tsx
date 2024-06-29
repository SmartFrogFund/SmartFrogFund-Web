import React, { FC } from "react";
import { Empty, message } from "antd";
import { useRouter } from "next/navigation";
import FrogItem from "./frog-item";
import Loading from "../../lodaing";
import { IFrogItem } from "../../interface/frog-project";

type IProps = {
  projectList: Array<IFrogItem>,
  isLoading: boolean,
  isLogged: boolean,
}

const FrogProjects: FC<IProps> = ({
  projectList, isLoading, isLogged,
}) => {
  const router = useRouter();
  if (isLoading) {
    return (
      <Loading />
    );
  }
  const handleRouter2Detail = (itemData: IFrogItem) => {
    if (isLogged) {
      router.push(`/detail/?projectId=${itemData.projectId}`);
    } else {
      message.warning("Please connect your wallet first");
    }
  };
  return (
    <div className="flex flex-col gap-2 max-w-screen-md m-auto mt-2 mb-8">
      {projectList.length === 0 ? <Empty style={{ marginTop: 200 }} description={<span className="text-white">No data</span>} /> : projectList.map((item) => (
        <FrogItem key={item.id} frogData={item} onClick={handleRouter2Detail} />
      ))}
    </div>
  );
};

export default FrogProjects;
