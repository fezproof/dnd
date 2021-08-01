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

	const { data, errors } = await executeQuery({ query, variables });

	if (errors) {
		return {
			error: new Error(errors.map(({ message }) => message).join('\\n')),
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
