import gql from 'graphql-tag';
const FetchTeamQuery = gql`
  query {
    search(
      where: {
        AND: [
          { name: "_path", value: "22091b415dc64ee0871633b2ee6f317f", operator: CONTAINS }
          { name: "_templates", value: "b126baac908b4b4292d797d04424c4fa", operator: CONTAINS }
        ]
      }
      first: 12
    ) {
      total
      pageInfo {
        endCursor
        hasNext
      }
      results {
        name
        image: field(name: "PageImage") {
          jsonValue
        }
        firstname: field(name: "Firstname") {
          value
        }
        lastname: field(name: "Lastname") {
          value
        }
        type: field(name: "Type") {
          jsonValue
        }
        average: field(name: "Average") {
          value
        }
        totalruns: field(name: "TotalRunsScored") {
          value
        }
        hundreds: field(name: "HundredsInNumber") {
          value
        }
        totalwickets: field(name: "TotalWicketsInNumber") {
          value
        }
        team: field(name: "Team") {
          jsonValue
        }
      }
    }
  }
`;
export default FetchTeamQuery;
