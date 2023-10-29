export type TeamsResultData = {
  data: TeamsResultSearchtData;
};

export type TeamsResultSearchtData = {
  search: {
    total: number;
    pageInfo: {
      hasNext: boolean;
      endCursor: string;
    };
    results: PlayerCard[];
  };
};

export type PlayerCard = {
  name: string;
  image: PlayerCardImageValue;
  firstname: PlayerCardValue;
  lastname: PlayerCardValue;
  average: PlayerCardValue;
  hundreds: PlayerCardValue;
  totalruns: PlayerCardValue;
  totalwickets: PlayerCardValue;
  type: PlayerCardTypeValue;
  team: PlayerCardTeamValue;
};

export type PlayerCardTypeValue = {
  jsonValue: {
    name: string;
  };
};

export type PlayerCardTeamValue = {
  jsonValue: {
    fields: {
      PageTitle: {
        value: string;
      };
    };
  };
};

export type PlayerCardValue = {
  value: string;
};

export type PlayerCardImageValue = {
  jsonValue: {
    value: {
      src: string;
      alt: string;
    };
  };
};
