import { NextApiHandler } from 'next';
import { GraphQLClient } from '@/lib/graphql/graphqlclient';
import { TeamsResultData } from '@/models/graphql/TeamsQueryResult';
import FetchTeamQuery from '@/lib/graphql/FetchTeamQuery';

const handler: NextApiHandler<unknown> = async (request, response) => {
  try {
    if (request.method == 'GET') {
      const graphClient = GraphQLClient();
      const playerData = graphClient.request<TeamsResultData>(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        FetchTeamQuery as any
      );
      console.log(playerData);

      const playerResult = await playerData;
      return response.status(200).json(playerResult);
    }
  } catch (error) {
    return response.status(500).json(error);
  }
};
export default handler;
