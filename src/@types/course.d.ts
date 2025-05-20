export type Course = {
	name: string;
	description: string;
	provider: string;
	teacher?: string;
	length?: number;
	completedAt?: Date;
	tags: string[];
	path?: string;
	url?: string;
	githubUrl?: string;
};
