import { NextApiHandler } from 'next';
import { TeamsFilterQuery } from '@/models/graphql/TeamsFilterResult';
import { GraphQLClient } from '@/lib/graphql/graphqlclient';
import { TeamsResultData } from '@/models/graphql/TeamsQueryResult';
import FetchTeamFilterQuery from '@/lib/graphql/FetchFilterTeamQuery';

const handler: NextApiHandler<unknown> = async (request, response) => {
  try {
    if (request.method !== 'POST') {
      return;
    }

    const filterData = request.body as TeamsFilterQuery;
    console.log('FilterData');
    console.log(filterData);

    let andConditions = '',
      orConditions = '';

    if (filterData.isCaptain) {
      andConditions += `{name:"captain", value: "true" , operator: EQ}`;
    }

    if (filterData.isWicketKeeper) {
      andConditions += `{name:"wicketkeeper", value: "true" , operator: EQ}`;
    }

    if (filterData.teamTypes && filterData.teamTypes.length > 0) {
      orConditions += `{ OR: [`;
      filterData.teamTypes.forEach((teamtype) => {
        orConditions += `{name:"team", value:"${teamtype}", operator: CONTAINS}`;
      });
      orConditions += `] }`;
    }

    if (filterData.playerTypes && filterData.playerTypes.length > 0) {
      orConditions += `{ OR: [`;
      filterData.playerTypes.forEach((playertype) => {
        orConditions += `{name:"type", value: "${playertype}", operator: CONTAINS}`;
      });
      orConditions += `] }`;
    }

    if (filterData.numberOfHundreds && filterData.numberOfHundreds.length > 0) {
      orConditions += `{ OR: [`;
      filterData.numberOfHundreds.forEach((numberofhundred) => {
        orConditions += `{name:"hundreds", value: "${numberofhundred}", operator: CONTAINS}`;
      });
      orConditions += `] }`;
    }

    if (filterData.numberOfWickets && filterData.numberOfWickets.length > 0) {
      orConditions += `{ OR: [`;
      filterData.numberOfWickets.forEach((numberofwicket) => {
        orConditions += `{name:"totalwickets", value: "${numberofwicket}", operator: CONTAINS}`;
      });
      orConditions += `] }`;
    }

    console.log('And conditions');
    console.log(andConditions);
    console.log('Or conditions');
    console.log(orConditions);

  

    const filterquery = FetchTeamFilterQuery(andConditions, orConditions,filterData.endCursor);
    const graphClient = GraphQLClient();
    const playerData = graphClient.request<TeamsResultData>(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      filterquery as any
    );
    console.log(playerData);

    const playerResult = await playerData;

    return response.status(200).json(playerResult);
  } catch (error) {
    return response.status(500).json(error);
  }
};
export default handler;
