import { executeQuery } from '$lib/graphql';
import type { RequestHandler } from '@sveltejs/kit';
import gql from 'graphql-tag';

export const get: RequestHandler = async () => {
	const query = gql`
		query getCampaigns {
			campaigns {
				id
				name
				font
				image
				link
			}
		}
	`;
	const variables = {};

	return executeQuery({ query, variables });
};
