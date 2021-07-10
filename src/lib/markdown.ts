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

const markdownToHtml = async <T extends { [key: string]: unknown }>(
	file: string
): Promise<{ content: string; data: T; excerpt: string }> => {
	const { content, data, excerpt } = matter(file, { excerpt: true });

	const parsedHtml = await processor.process(content);

	return { content: String(parsedHtml), data: data as T, excerpt: excerpt };
};

export default markdownToHtml;
