import type { EndpointOutput } from '@sveltejs/kit';
import { DocumentNode, execute } from 'graphql';
import { createSchema } from './schema';

export const executeQuery = async ({
	query,
	variables
}: {
	query: DocumentNode;
	variables: Record<string, unknown>;
}): Promise<EndpointOutput> => {
	const { data, errors } = await execute({
		schema: await createSchema(),
		document: query,
		variableValues: variables
	});

	if (errors) {
		return {
			body: {
				errors: errors.map((error) => JSON.stringify(error))
			},
			status: 500
		};
	}

	return {
		body: {
			props: data
		}
	};
};
