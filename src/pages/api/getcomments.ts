/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiHandler } from 'next';
import { GraphQLSearchClient } from '@/lib/graphql/graphqlclient';
import { CommentsResultData } from '@/models/graphql/CommentsResult';
import FetchCommentsQuery from '@/lib/graphql/FetchCommentsQuery';

const handler: NextApiHandler<unknown> = async (request, response) => {
  try {
    if (request.method == 'GET') {
      const queryString = request?.query as any;
      const filterquery = FetchCommentsQuery(queryString.commentitemid);
      const graphClient = GraphQLSearchClient();
      const commentsData = graphClient.request<CommentsResultData>(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        filterquery as any
      );
      console.log(commentsData);

      const playerResult = await commentsData;
      return response.status(200).json(playerResult);
    }
  } catch (error) {
    return response.status(500).json(error);
  }
};
export default handler;
