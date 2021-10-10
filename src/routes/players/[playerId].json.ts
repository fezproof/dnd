import { executeQuery } from '$lib/graphql';
import { PLAYER_ID_PREFIX } from '$lib/services/playerss/players';
import type { RequestHandler } from '@sveltejs/kit';
import gql from 'graphql-tag';

export const get: RequestHandler = async ({ params: { playerId } }) => {
	const query = gql`
		query GetPlayer($id: ID!) {
			player(id: $id) {
				id
				name
				image
				content {
					prose
				}
			}
		}
	`;
	const variables = {
		id: `${PLAYER_ID_PREFIX}/${playerId}`
	};
	return executeQuery({ query, variables });
};
