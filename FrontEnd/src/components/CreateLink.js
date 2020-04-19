import React from 'react';
import gql from 'graphql-tag';
import {useMutation} from "@apollo/react-hooks";

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      url
      description
    }
  }
`;

const CreateLink = () => {
  const [{description, url}, setLink] = React.useState({
    description: '',
    url: '',
  });

  const [createLink] = useMutation(POST_MUTATION);

  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          type="text"
          className="mb2"
          value={description}
          placeholder="A description for the link"
          onChange={({target: {value: description}}) => {
            setLink(curr => ({...curr, description}))
          }}
        />
        <input
          type="text"
          className="mb2"
          value={url}
          placeholder="The URL for the link"
          onChange={({target: {value: url}}) => {
            setLink(curr => ({...curr, url}))
          }}
        />
      </div>
      <button onClick={() => createLink({variables: {description, url}})}>
        Submit
      </button>
    </div>
  );
};

export default CreateLink;