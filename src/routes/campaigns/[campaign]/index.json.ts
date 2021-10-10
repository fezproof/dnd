import { executeQuery } from '$lib/graphql';
import { CAMPAIGN_ID_PREFIX } from '$lib/services/campaigns';
import type { RequestHandler } from '@sveltejs/kit';
import gql from 'graphql-tag';

export const get: RequestHandler = async ({ params: { campaign }, path }) => {
	const query = gql`
		query GetCampaign($id: ID!) {
			campaign(id: $id) {
				id
				name
				font
				image {
					src
				}
				content {
					excerpt
				}
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
		id: `${CAMPAIGN_ID_PREFIX}/${campaign}`
	};

	return executeQuery({ query, variables });
};
