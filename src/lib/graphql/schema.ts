import { makeExecutableSchema } from '@graphql-tools/schema';
import { promises as fs } from 'fs';
import type { GraphQLSchema } from 'graphql';
import resolvers from './resolvers';

export const createSchema = async (): Promise<GraphQLSchema> => {
	const typeDefs = await fs.readFile('src/lib/graphql/schema.graphql', { encoding: 'utf-8' });

	const schema = makeExecutableSchema({
		typeDefs,
		resolvers
	});

	return schema;
};

export const defaultQuery = `# Try out our API with a query like this:
query {
	campaigns {
    id
    name
  }
}
`;
