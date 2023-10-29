import { NextApiHandler } from 'next';
import { GraphQLAuthoringClient } from '@/lib/graphql/graphqlclient';
import CreateItemQuery from '@/lib/graphql/CreateItemQuery';
import { CreateItemRequest } from '@/models/graphql/CreateItemRequest';

const handler: NextApiHandler<unknown> = async (request, response) => {
  try {
    if (request.method !== 'POST') {
      return;
    }
    const authoringEndpoint = process.env.GRAPH_QL_AUTHORING_ENDPOINT;
    const authoringEndpointKey = process.env.GRAPH_QL_AUTHORING_ENDPOINT_Key;
    console.log(authoringEndpoint);
    console.log(authoringEndpointKey);

    if (authoringEndpoint && authoringEndpointKey) {
      const requestBody = request.body as CreateItemRequest;
      const authoringClient = GraphQLAuthoringClient(authoringEndpoint, authoringEndpointKey);
      const createQuery = CreateItemQuery(
        requestBody.itemname,
        requestBody.name,
        requestBody.description,
        requestBody.commentitemid
      );
      const data = await authoringClient.request(createQuery);
      console.log(data);
      return response.status(200).json(data);
    }
    return response.status(200).json({});
  } catch (error) {
    return response.status(500).json(error);
  }
};
export default handler;
