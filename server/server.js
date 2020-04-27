import { ApolloServer, gql } from 'apollo-server';
import data from './data.json';

//Type definitions(schemas)

const typeDefs = gql`
    type Query{
       courses: [Course]!
    }

    type Course{
        id: ID!,
        name: String!,
        description: String!,
        author: String!,
        publishDate: String!,
        duration: String!,
        image: String!

    }

`
//Resolvers

const resolvers = {
    Query:{
        courses(){
            return data.lessons;

        }
    }
}

const server = new ApolloServer({
    typeDefs:typeDefs,
    resolvers:resolvers
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });