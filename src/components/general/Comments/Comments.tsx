// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
// Components
import { Component } from 'src/components/helpers/Component';

export type CommentsProps = Feature.EnterpriseWeb.Components.General.Comments;
const Comments = (props: CommentsProps) => {
  return (
    <Component variant="xl" dataComponent="general/comments" {...props}>
      Comments
    </Component>
  );
};

export default Comments;
