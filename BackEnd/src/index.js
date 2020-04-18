const {GraphQLServer} = require('graphql-yoga');

let links = [{
  id: "link-0",
  url: "www.howtographql.com",
  description: "Fullstack tutorial for GraphQL",
}];
let idCount = links.length;

const resolvers = {
  Query: {
    info: () => "This is the API of a Hackernews Clone",
    link: (_, {id}) => links.filter(link => link.id === id)[0],
    feed: () => links,
  },
  Mutation: {
    post: (_, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);

      return link;
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => {
  console.log('Start on https://localhost:4000');
});