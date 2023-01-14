/** @type {import('./$types').PageLoad} */
export async function load({ params } : {params: {study:string}}): Promise<{ content: any; title: any; date: any; }> {
	const post = await import(`../${params.study}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
