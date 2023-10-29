/* eslint-disable prettier/prettier */

export type CommentsResultData = {
  data: CommentsResultSearchtData;
};

export type CommentsResultSearchtData = {
  search: {
    total: number;
    pageInfo: {
      hasNext: boolean;
      endCursor: string;
    };
    results: CommentsCard[];
  };
};

export type CommentsCard = {
  playerName: {
    value: string;
  }
  comments: {
    value: string;
  }
};