import { executeQuery } from '$lib/graphql';
import { CAMPAIGN_ID_PREFIX } from '$lib/services/campaigns';
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
		slug: slug,
		campaign: `${CAMPAIGN_ID_PREFIX}/${campaign}`
	};

	return executeQuery({ query, variables });
};
