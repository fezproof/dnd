import { base } from '$app/paths';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import _ from 'lodash';
import { posix as path } from 'path';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import wikiLinkPlugin from 'remark-wiki-link';
import unified from 'unified';

export const POST_FILE_DIR = 'src/posts';

export const getPostFile = async (postFilePath: string): Promise<string> =>
	fs.readFile(path.join(POST_FILE_DIR, postFilePath.concat('.md')), {
		encoding: 'utf8'
	});

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

	return { data: processedData as T, excerpt: excerpt as string, content };
};

const markdownToHtml = async <T extends { [key: string]: unknown }>(
	file: string
): Promise<{ content: string; data: T; excerpt: string }> => {
	const { content, data, excerpt } = getMarkdownInfo<T>(file);

	const parsedContent = await markdownRawToHtml(content);
	const parsedExcerpt = await markdownRawToHtml(excerpt);

	return { content: String(parsedContent), data: data as T, excerpt: String(parsedExcerpt) };
};

export default markdownToHtml;
