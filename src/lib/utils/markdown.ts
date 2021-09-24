import { base } from '$app/paths';
import matter from 'gray-matter';
import { posix as path } from 'path';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import wikiLinkPlugin from 'remark-wiki-link';
import unified from 'unified';
import _ from 'lodash';

const processor = unified()
	.use(remarkParse)
	.use(wikiLinkPlugin, {
		aliasDivider: '|',
		hrefTemplate: (permaLink: string) => {
			return path.join('/', base, permaLink);
		},
		wikiLinkClassName: ' ',
		newClassName: ' '
	})
	.use(remarkRehype)
	.use(rehypeStringify);

export const markdownRawToHtml = async (rawString: string): Promise<string> => {
	const parsedHtml = await processor.process(rawString);

	return String(parsedHtml);
};

const handleObsidianLinks = (data: Record<string, any>) => {
	const entries = Object.entries(data);

	return entries.reduce((result, [key, value]) => {
		if (!_.isArray(value)) {
			result[key] = value;
			return result;
		}

		if (!value.every((innerValue) => _.isArray(innerValue) && innerValue.every(_.isArray))) {
			result[key] = value;
			return result;
		}

		result[key] = [];

		value.forEach(([[innerLink]]) => {
			result[key].push(innerLink);
		});

		return result;
	}, {});
};

export const getMarkdownInfo = <T extends { [key: string]: unknown }>(
	file: string
): { data: T; excerpt: string; content: string } => {
	const { data, excerpt, content } = matter(file, { excerpt: true });

	const processedData = handleObsidianLinks(data);

	return { data: processedData as T, excerpt: excerpt, content };
};

const markdownToHtml = async <T extends { [key: string]: unknown }>(
	file: string
): Promise<{ content: string; data: T; excerpt: string }> => {
	const { content, data, excerpt } = getMarkdownInfo<T>(file);

	const parsedHtml = await markdownRawToHtml(content);

	return { content: String(parsedHtml), data: data as T, excerpt: excerpt };
};

export default markdownToHtml;
