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
