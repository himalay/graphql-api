import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql'

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve() {
        return {
          id: 1,
          name: 'Gopal Nepal',
          email: 'gopal@protonmail.com',
        }
      },
    },
  },
})

export default new GraphQLSchema({
  query: RootQuery,
})
