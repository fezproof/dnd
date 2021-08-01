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
					image
					name
				}
			}
		}
	`;
	const variables = {
		id: campaign
	};
	const { data, errors } = await executeQuery({ query, variables });

	if (errors) {
		const body = JSON.stringify({
			error: new Error(errors.map(({ message }) => message).join('\\n'))
		});

		return {
			body,
			status: 500
		};
	}

	const body = JSON.stringify({
		props: data
	});

	return {
		body
	};
};
