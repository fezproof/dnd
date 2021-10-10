import type { Content, Node } from '$lib/graphql/generated/resolvers';
import { getMarkdownInfo, getPostFile } from '$lib/utils/markdown';

export const getNode = async <T extends { [key: string]: unknown }>(
	postFilePath: string
): Promise<Node & { content: Content } & T> => {
	const fileContents = await getPostFile(postFilePath);

	const { content, data, excerpt } = getMarkdownInfo<T>(fileContents);

	return {
		id: postFilePath,
		content: { prose: content, excerpt, raw: content },
		...data
	};
};

export const getNodes = async <T extends { [key: string]: unknown }>(
	postFilePaths: string[]
): Promise<(Node & T)[]> => {
	return Promise.all(postFilePaths.map((path) => getNode<T>(path)));
};
