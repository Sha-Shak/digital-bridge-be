import { User } from './../models/user.model';
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    roles: [String!]!
    createdAt: String!
  }
  type AuthPayload{
    token: String!
    user: User!
  }


  type query{
    me: User!
  }


  type registerInput{
    name: String!
    email: String!
    password: String!
  }
  
  type mutation{
    login(email: String!, password: String!): AuthPayload!;
    register(email: String!, name: String!, password: String!): AuthPayload!;
  }

  `
