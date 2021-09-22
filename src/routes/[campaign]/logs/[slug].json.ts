import { executeQuery } from '$lib/graphql';
import type { RequestHandler } from '@sveltejs/kit';
import gql from 'graphql-tag';

export const get: RequestHandler = async ({ params: { campaign, slug } }) => {
	const query = gql`
		query GetLog($slug: ID!, $campaign: ID!) {
			log(id: $slug, campaignId: $campaign) {
				id
				date
				name
				image
				content {
					prose
				}
				campaign {
					id
					name
					link
					font
				}
			}
		}
	`;
	const variables = {
		slug,
		campaign
	};

	return executeQuery({ query, variables });
};
