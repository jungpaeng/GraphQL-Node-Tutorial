const {GraphQLServer} = require('graphql-yoga');
const {prisma} = require('../generated/prisma-client');

const resolvers = {
  Query: {
    info: () => 'This is the API of a Hackernews Clone',
    feed: (root, args, context) => {
      return context.prisma.links()
    },
  },
  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
      });
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  context: { prisma },
  resolvers,
});

server.start(() => {
  console.log('Start on https://localhost:4000');
});