const {GraphQLServer} = require('graphql-yoga');
const {prisma} = require('../generated/prisma-client');

const Vote = require('./resolvers/Vote');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');

const resolvers = {
  Vote,
  User,
  Link,
  Query,
  Mutation,
  Subscription,
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