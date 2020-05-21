import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes: GraphQLSchema[] = fileLoader(
  path.join(__dirname, "./api/**/*.graphql")
);

const allResolvers: any[] = fileLoader(
  path.join(__dirname, "./api/**/*.resolvers.*")
);

const mergedType = mergeTypes(allTypes);
const mergedResolver = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedType,
  resolvers: mergedResolver,
});

export default schema;
