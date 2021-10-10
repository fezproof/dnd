import type { Content, Log, Node } from '$lib/graphql/generated/resolvers';
import { getMarkdownInfo, POST_FILE_DIR } from '$lib/utils/markdown';
import { promises as fs } from 'fs';
import { join } from 'path';
import { getNode } from '../node';

type LogData = {
	name: string;
	draft?: boolean;
	image?: string;
};

type LogResult = Node & {
	content: Content;
} & LogData;

const getLogId = (campaignId: string, slug: string) => {
	return join(campaignId, 'logs', slug);
};

const getLogMD = async (logId: string): Promise<LogResult> => {
	const logResult = await getNode<LogData>(logId);
	return logResult;
};

export const getLog = async (campaignId: string, logId: string): Promise<Log> => {
	const result = await getLogMD(logId);

	return { ...result, campaign: { id: campaignId } };
};

export const getLogWithSlug = async (campaignId: string, slug: string): Promise<Log> => {
	const result = await getLogMD(getLogId(campaignId, slug));

	return { ...result, campaign: { id: campaignId } };
};

export const getLogs = async (campaignId: string): Promise<Log[]> => {
	const logFiles = await fs.readdir(join(POST_FILE_DIR, campaignId, 'logs'), {
		withFileTypes: true
	});

	const logsDirs = logFiles
		.filter((dirent) => dirent.isFile())
		.map((dirent) => dirent.name.replace(/\.md$/, ''));

	const logs = await Promise.all(
		logsDirs.map(async (fileName) => getLogWithSlug(campaignId, fileName))
	);

	return logs;
};
