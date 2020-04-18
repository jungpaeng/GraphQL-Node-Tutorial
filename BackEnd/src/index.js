const {GraphQLServer} = require('graphql-yoga');

const typeDefs = `
  type Query {
    info: String!
  }
`;

const resolvers = {
  Query: {
    info: () => 'Hackernews Clone API',
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log('Start on https://localhost:4000');
});