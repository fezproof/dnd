import { base } from '$app/paths';
import type { Load } from '@sveltejs/kit';
import { DocumentNode, execute } from 'graphql';
import { createSchema } from './schema';

export interface Query {
	query: string;
	variables: (page: Record<string, string>) => Record<string, unknown>;
}

export const loadQuery = ({ query, variables }: Query): Load => {
	const load: Load = async ({ fetch, page }) => {
		const response = await fetch(`${base}/graphql`, {
			body: JSON.stringify({ query, variables: variables(page.params) }),
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

export const executeQuery = async ({
	query,
	variables
}: {
	query: DocumentNode;
	variables: Record<string, unknown>;
}): Promise<ReturnType<typeof execute>> =>
	execute({
		schema: await createSchema(),
		document: query,
		variableValues: variables
	});
