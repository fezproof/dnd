import { executeQuery } from '$lib/graphql';
import type { RequestHandler } from '@sveltejs/kit';
import gql from 'graphql-tag';

export const get: RequestHandler = async ({ params: { campaign } }) => {
	const query = gql`
		query GetCampaign($id: ID!) {
			campaign(id: $id) {
				id
				name
				font
				image
				excerpt
				link
				players {
					id
					link
					image(width: 1000, height: 800)
					name
				}
			}
		}
	`;
	const variables = {
		id: campaign
	};

	return executeQuery({ query, variables });
};
