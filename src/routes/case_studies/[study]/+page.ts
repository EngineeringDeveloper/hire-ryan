import type { meta } from "$lib/types/caseStudyTypes";

type fileImport = {meta:meta,  content: any }
/** @type {import('./$types').PageLoad} */
export async function load({ params }: { params: { study: string } }): Promise<fileImport> {
	const post = await import(`../${params.study}.md`);
	console.log(typeof post)
	const meta = post.metadata;
	const content = post.default;

	return {
		meta,
		content,
	};
}
