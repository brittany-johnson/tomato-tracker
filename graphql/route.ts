import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
import { startStandaloneServer } from '@apollo/server/standalone';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  })
  console.log(`🚀  Server ready at: ${url}`);
})();

