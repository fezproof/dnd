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
				image {
					src
				}
				excerpt
				link
				players {
					id
					link
					image(width: 1000, height: 1000)
					name
				}
				logs {
					id
					name
					link
					image(width: 500, height: 600)
					content {
						excerpt
					}
				}
			}
		}
	`;
	const variables = {
		id: campaign
	};

	return executeQuery({ query, variables });
};
