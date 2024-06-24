export interface progressUpdated {
    projectId:string;
    progress:string;
    details:string;
    blockTimestamp:string;
    currentProgress:string;
    // other fields...
  }
export interface ProjectCreated {
    projectId: string;
    _description:string;
    _link:string;
    deadline:string;
    goalAmount:string;
    creator:string;
    _title:string;
    // other fields...
  }
export interface progressReviewed {
    projectId:string;
    approved:string;
    blockTimestamp:string;
    currentProgress:string;
    comment:string
    // other fields...
}

export interface projectFunded{
    supporter:string
}

export interface DetailData {
    projectCreateds?: ProjectCreated[];
    progressUpdateds?:progressUpdated[];
    progressRevieweds?:progressReviewed[];
    projectFundeds?:projectFunded[];
    // fundsDistributeds?:fundsDistributed[];
    // other fields...
  }
