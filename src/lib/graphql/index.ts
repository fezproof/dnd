import type { Load } from '@sveltejs/kit';

export interface Query {
	query: string;
	variables: Record<string, unknown>;
}

export const loadQuery = ({ query, variables }: Query): Load => {
	const load: Load = async ({ fetch }) => {
		const response = await fetch('/graphql', {
			body: JSON.stringify({ query, variables }),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		});

		const { data, errors } = await response.json();

		if (errors) {
			return {
				error: new Error(errors.map(({ message }) => message).join('\\n')),
				status: 500
			};
		}

		return {
			props: data
		};
	};

	return load;
};
