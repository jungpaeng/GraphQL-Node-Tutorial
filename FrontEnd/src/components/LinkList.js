import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import Link from './Link';

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        url
        description
      }
    }
  }
`;

const LinkList = () => {
  const {loading, error, data} = useQuery(FEED_QUERY);

  if (loading) {
    return "Loading...";
  } else if (!!error) {
    return "Error!!";
  }

  return (
    <div>
      {data.feed.links.map(link => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;