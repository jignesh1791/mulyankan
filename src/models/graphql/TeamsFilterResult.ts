export type TeamsFilterQuery = {
  teamTypes: Array<string>;
  playerTypes: Array<string>;
  numberOfHundreds: Array<string>;
  numberOfWickets: Array<string>;
  isWicketKeeper: boolean;
  isCaptain: boolean;
  endCursor: string;
};
