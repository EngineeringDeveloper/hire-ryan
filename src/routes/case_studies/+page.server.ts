import type { PageServerLoad } from "./$types";
import { base } from "$app/paths";

interface meta {
    title: string;
    date: string;
    tags: string[];
    image: string;
}

type caseStudyLoad = [
    string,
    () => Promise<{ metadata: meta }>
][];

const fetchMarkdownPosts = async () => {
    const allPostFiles: any = import.meta.glob("./**.md");
    const iterablePostFiles: caseStudyLoad = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = `${base}/case_studies/${path
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
