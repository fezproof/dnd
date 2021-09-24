import { markdownRawToHtml } from '$lib/utils/markdown';
import { GraphQLScalarType } from 'graphql';
import type { Resolvers } from '../generated/resolvers';
import Campaign from './Campaign';
import Log from './Log';
import Player from './Player';
import Query from './Query';
import Image from './Image';

const resolvers: Resolvers = {
	Query,
	Campaign,
	Log,
	Player,
	Image,

	Prose: new GraphQLScalarType({
		name: 'Prose',
		description: 'Parsed html prose',
		// parseValue: async () => {
		//   return ''
		// },
		serialize: async (value) => {
			return markdownRawToHtml(value);
		}
	})
};

export default resolvers;
