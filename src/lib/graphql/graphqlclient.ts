import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import config from '@/temp/config';
export function GraphQLClient() {
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
