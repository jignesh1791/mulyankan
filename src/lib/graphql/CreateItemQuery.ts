import gql from 'graphql-tag';
const CreateItemQuery = (
  itemname: string,
  name: string,
  description: string,
  commentitemid: string
) => {
  return gql`
    mutation {
      createItem(
        input: {
          name: "${itemname}"
          templateId: "{7B6D6EB7-D73B-4A0D-B644-629EE4FC218F}"
          parent: "{C23F3DF2-C4B0-4356-AA34-307BA3E780B6}"
          language: "en"
          fields: [
            { name: "Name", value: "${name}" }
            { name: "Description", value: "${description}" }
            { name: "CommentItemId", value: "${commentitemid}" }
          ]
        }
      ) {
        item {
          itemId
          name
          path
        }
      }
    }
  `;
};

export default CreateItemQuery;
