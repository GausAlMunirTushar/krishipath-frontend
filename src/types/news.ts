export type NewsItem = {
	_id?: string;
	title: string;
	image: string;
	description: string;
	content?: string;
	author?: string;
	tags?: string[];
	publishedAt?: string;
};
