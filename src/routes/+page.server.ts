import type { PageServerLoad } from "./$types";
import { base } from "$app/paths";
import type { caseDetails, meta } from "$lib/types/caseStudyTypes";

type caseStudyLoad = [
    string,
    () => Promise<{ metadata: meta }>
][];

const fetchMarkdownPosts = async () => {
    const allPostFiles: any = import.meta.glob("./case_studies/**.md");
    const iterablePostFiles: caseStudyLoad = Object.entries(allPostFiles);

    const allPosts: caseDetails[] = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = `${base}/${path
                .replace("./", "")
                .replace(".md", "")}`;

            return {
                meta: metadata,
                path: postPath,
            };
        })
    );

    return allPosts;
};

export const load = (async () => {
    const posts = await fetchMarkdownPosts();
    console.log(posts);
    return { posts };
}) satisfies PageServerLoad;
