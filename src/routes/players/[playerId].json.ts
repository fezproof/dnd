import { executeQuery } from '$lib/graphql';
import type { RequestHandler } from '@sveltejs/kit';
import gql from 'graphql-tag';

export const get: RequestHandler = async ({ params: { playerId } }) => {
	const query = gql`
		query GetPlayer($id: ID!) {
			player(id: $id) {
				id
				name
				image
				content
			}
		}
	`;
	const variables = {
		id: playerId
	};
	return executeQuery({ query, variables });
};