import { gql } from '@apollo/client';

const CommentsQuery = gql`
  query {
    pageOne: search(
      where: {
        AND: [
          { name: "_path", value: "C23F3DF2-C4B0-4356-AA34-307BA3E780B6", operator: CONTAINS }
          {
            AND: [
              {
                name: "commentitemid"
                value: "909d4e47243c4865b926dfdc54ce2229"
                operator: CONTAINS
              }
            ]
          }
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
        name
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

export default CommentsQuery;
