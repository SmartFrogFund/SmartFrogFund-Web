import {
  progressUpdated, ProjectCreated, progressReviewed, DetailData,
} from "@/app/detail/_interface/detail";

export interface MyObject {
    blockTimestamp: number;
    currentProgress:number;
    // 其他可能存在的属性
}
const findObjectWithMaxTimestamp = (array: MyObject[]): MyObject | null => {
  if (array.length === 0) {
    return null;
  }

  // 使用 reduce 方法找到具有最大 blockTimestamp 值的对象
  return array.reduce((maxObj, obj) => (obj.blockTimestamp > maxObj.blockTimestamp ? obj : maxObj), array[0]);
};

const percentToStepName = new Map([
  [30, "Step1"],
  [50, "Step2"],
  [70, "Step3"],
  [100, "Step4"],
]);

export const usePercentInfo = () => {
  const getPercentInfo = (data:DetailData) => {
    const { progressUpdateds } = data;
    const { progressRevieweds } = data;
    const percentList = [30, 50, 70, 100];
    const detailObj: {
        Step1: string;
        Step2: string;
        Step3: string;
        Step4: string;
        [key: string]: string; // 添加索引签名，允许任意额外的字符串键值对
    } = {
      Step1: "",
      Step2: "",
      Step3: "",
      Step4: "",
    };
    let percent:number|undefined = 0;
    let examineDeatil = "";
    let newProgressRevieweds = [];
    let newProgressUpdateds: any[] = [];
    if (progressRevieweds?.length) {
      newProgressRevieweds = progressRevieweds.map((item) => ({
        blockTimestamp: Number(item.blockTimestamp),
        currentProgress: Number(item.currentProgress),
      }));
      percent = findObjectWithMaxTimestamp(newProgressRevieweds)?.currentProgress;
    } else if (progressUpdateds?.length) {
      newProgressUpdateds = progressUpdateds.map((item) => ({
        blockTimestamp: Number(item.blockTimestamp),
        currentProgress: Number(item.progress),
      }));
      percent = findObjectWithMaxTimestamp(newProgressUpdateds)?.currentProgress;
    }
    if (percent) {
      const currentPercentList = percentList.filter((item) => item <= percent);
      currentPercentList.forEach((item) => {
        const key:string|undefined = percentToStepName.get(item);
        if (key) {
          console.log(key, "key");
          detailObj[key] = progressUpdateds?.find((_item) => _item.progress === String(item))?.details || "";
        }
      });
      const nextPercent = percentList[percentList.indexOf(percent) + 1];
      const stepKey = percentToStepName.get(nextPercent);
      console.log(nextPercent, stepKey, "nextPercent");
      examineDeatil = stepKey ? detailObj[stepKey] : "";
    }
    return {
      currentPercent: percent || 0,
      detailObj,
      examineDeatil,
    };
  };

  return {
    getPercentInfo,
  };
};
