const axios = require('axios');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt},
        mission_name: { type: GraphQLString},
        launch_year: { type: GraphQLString},
        Launch_date_local: { type: GraphQLString},
        launch_success: { type: GraphQLBoolean},
        rocket: { type: RocketType},
    })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString},
        rocket_name: { type: GraphQLString},
        rocket_type: { type: GraphQLString},
    })
});

