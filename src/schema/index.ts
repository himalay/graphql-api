import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} from 'graphql'

const users = [
  {
    id: 1,
    name: 'Gopal Nepal',
    email: 'gopal@protonmail.com',
  },
  {
    id: 2,
    name: 'Ramakant Rana',
    email: 'ram@kant.com',
  },
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return users.filter(({ id }) => (args.id ? id === args.id : true))
      },
    },
  },
})

export default new GraphQLSchema({
  query: RootQuery,
})
