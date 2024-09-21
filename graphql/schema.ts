export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String
  }

  type Query {
    currentUser: User
  }
`
