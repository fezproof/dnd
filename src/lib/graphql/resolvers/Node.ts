import { getNode } from '$lib/services/node';
import type { NodeResolvers } from '../generated/resolvers';

const Node: NodeResolvers = {
	__resolveType: async ({ id }) => {
		if (id.startsWith('players/')) return 'Player' as const;
		if (id.startsWith('campaigns/')) return 'Campaign' as const;
		if (id.match(/^campaigns\/.*\/logs\/.*$/)) return 'Log' as const;

		return null;
	},
	content: async ({ id }) => {
		const { content } = await getNode(id);

		return content;
	}
};

export default Node;
