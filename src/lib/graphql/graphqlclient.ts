import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import { GraphQLClient } from 'graphql-request';
import config from '@/temp/config';
export function GraphQLSearchClient() {
  console.log('Fetching Graph Client');

  const graphqlEndPoint = config.graphQLEndpoint;
  const apiKey = config.sitecoreApiKey;
  console.log(graphqlEndPoint);
  console.log(apiKey);
  const graphClient = new GraphQLRequestClient(graphqlEndPoint, {
    apiKey: apiKey,
  });
  return graphClient;
}

export function GraphQLAuthoringClient(
  graphqlAuthoringEndPoint: string,
  graphqlAuthoringEndPointKey: string
) {
  console.log('Fetching Graph Authoring Client');
  console.log(graphqlAuthoringEndPoint);
  console.log(graphqlAuthoringEndPointKey);
  const graphAuthClient = new GraphQLClient(graphqlAuthoringEndPoint);
  graphAuthClient.setHeader('Authorization', `Bearer ${graphqlAuthoringEndPointKey}`);
  return graphAuthClient;
}
