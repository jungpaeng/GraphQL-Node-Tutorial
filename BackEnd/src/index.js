const {GraphQLServer} = require('graphql-yoga');
const {prisma} = require('../generated/prisma-client');

const User = require('./resolvers/User');
const Link = require('./resolvers/Link');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const resolvers = {
  User,
  Link,
  Query,
  Mutation,
};

const server = new GraphQLServer({
  resolvers,
  typeDefs: './src/schema.graphql',
  context: request => ({
    ...request,
    prisma,
  }),
});

server.start(() => {
  console.log('Start on https://localhost:4000');
});