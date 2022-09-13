const resolvers = {
	Query: {
		// get all tracks, will be used to populate the homepage grid of our web client
		tracksForHome: (_, __, { dataSources }) => {
			return dataSources.trackAPI.getTracksForHome();
		},
	},
	Track: {
		author: ({ authorId }, _, { dataSources }) => {
			return dataSources.trackAPI.getAuthor(authorId);
		},
	},
};

module.exports = resolvers;

// Query function: (parent, args, context, info) => {}
// can destructure params
// Unused params can be blank with underscores
