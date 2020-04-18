const {GraphQLServer} = require('graphql-yoga');

let links = [{
  id: "link-0",
  url: "www.howtographql.com",
  description: "Fullstack tutorial for GraphQL",
}];

const resolvers = {
  Link: {
    id: parent => parent.id,
    description:  parent => parent.description,
    url: parent => parent.url,
  },
  Query: {
    info: () => "This is the API of a Hackernews Clone",
    feed: () => links,
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => {
  console.log('Start on https://localhost:4000');
});