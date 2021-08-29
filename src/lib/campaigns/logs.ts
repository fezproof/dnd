import { CAMPAIGNS_FILE_DIR } from '.';
import { promises as fs } from 'fs';
import { join } from 'path';
import { getMarkdownInfo } from '../utils/markdown';

type LogData = {
	name: string;
	draft?: boolean;
	image?: string;
};

interface LogResult extends LogData {
	id: string;
	content: string;
	excerpt: string;
}

const getLogMD = async (campaignId: string, logId: string): Promise<LogResult> => {
	const fileContents = await fs.readFile(
		join(CAMPAIGNS_FILE_DIR, campaignId, 'logs', `${logId}.md`),
		{
			encoding: 'utf8'
		}
	);

	const { content, data, excerpt } = getMarkdownInfo<LogData>(fileContents);

	return {
		...data,
		content,
		excerpt,
		id: logId
	};
};

export const getLog = async (campaignId: string, logId: string): Promise<LogResult> => {
	const result = await getLogMD(campaignId, logId);

	return result;
};

export const getLogs = async (campaignId: string): Promise<LogResult[]> => {
	const logFiles = await fs.readdir(join(CAMPAIGNS_FILE_DIR, campaignId, 'logs'), {
		withFileTypes: true
	});

	const logsDirs = logFiles
		.filter((dirent) => dirent.isFile())
		.map((dirent) => dirent.name.replace(/\.md$/, ''));

	const logs = await Promise.all(logsDirs.map(async (fileName) => getLogMD(campaignId, fileName)));

	return logs;
};
