import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
// import rehypeDocument from 'rehype-document'
// import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify';
// import {reporter} from 'vfile-reporter'
import matter from 'gray-matter';

const processor = unified()
	.use(remarkParse)
	.use(remarkRehype)
	// .use(rehypeDocument, { title: '👋🌍' })
	// .use(rehypeFormat)
	.use(rehypeStringify);

export const markdownRawToHtml = async (rawString: string): Promise<string> => {
	const parsedHtml = await processor.process(rawString);

	return String(parsedHtml);
};

export const getMarkdownInfo = <T extends { [key: string]: unknown }>(
	file: string
): { data: T; excerpt: string; content: string } => {
	const { data, excerpt, content } = matter(file, { excerpt: true });

	return { data: data as T, excerpt: excerpt, content };
};

const markdownToHtml = async <T extends { [key: string]: unknown }>(
	file: string
): Promise<{ content: string; data: T; excerpt: string }> => {
	const { content, data, excerpt } = getMarkdownInfo<T>(file);

	const parsedHtml = await markdownRawToHtml(content);

	return { content: String(parsedHtml), data: data as T, excerpt: excerpt };
};

export default markdownToHtml;
