import gql from 'graphql-tag';
const FetchCommentsQuery = (commentitemid: string) => gql`
  query {
    search(
      where: {
        AND: [
          { name: "_path", value: "C23F3DF2-C4B0-4356-AA34-307BA3E780B6", operator: CONTAINS }
          { name: "commentitemid", value: "${commentitemid}", operator: CONTAINS }
        ]
      }
      # defaults to 10
      first: 10
    ) {
      total
      pageInfo {
        endCursor
        hasNext
      }
      results {
        playerName: field(name: "Name") {
          value
        }
        comments: field(name: "Description") {
          value
        }
      }
    }
  }
`;
export default FetchCommentsQuery;
