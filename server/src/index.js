const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
// Removed mocks and Swapped for resolvers
const resolvers = require('./resolvers');

const TrackAPI = require('./datasources/track-api');

const server = new ApolloServer({
	typeDefs,
	resolvers,
	// Connect server to trackAPI
	dataSources: () => {
		return {
			trackAPI: new TrackAPI(),
		};
	},
});

server.listen().then(() => {
	console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
`);
});
