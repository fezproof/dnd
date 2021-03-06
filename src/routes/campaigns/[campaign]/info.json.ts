import { executeQuery } from '$lib/graphql';
import type { RequestHandler } from '@sveltejs/kit';
import gql from 'graphql-tag';

export const get: RequestHandler = async ({ params: { campaign } }) => {
	const query = gql`
		query GetCampaignInfo($id: ID!) {
			campaign(id: $id) {
				id
				name
				font
				image {
					src
				}
				link
				content {
					prose
				}
			}
		}
	`;
	const variables = {
		id: campaign
	};

	return executeQuery({ query, variables });
};
