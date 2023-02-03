import type { meta } from "$lib/types/caseStudyTypes";
import type { PageLoad } from './$types';

export const load = (async ({ params }: { params: { study: string } }) => {
	const post = await import(`../${params.study}.md`);
	const meta: meta = post.metadata;
	const content = post.default;

	return {
		meta,
		content,
	};
}) satisfies PageLoad;

