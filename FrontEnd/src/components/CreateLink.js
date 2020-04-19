import React from 'react';

const CreateLink = () => {
  const [{description, url}, setLink] = React.useState({
    description: '',
    url: '',
  });

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
      <button onClick={() => null}>
        Submit
      </button>
    </div>
  );
};

export default CreateLink;