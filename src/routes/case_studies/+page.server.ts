import type { PageServerLoad } from "./$types";
import { base } from '$app/paths'

const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('./**.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = `${base}/case_studies/${path.replace("./", "").replace(".md", "")}`
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
  
    return allPosts
  }


export const load = (async () => {
    const posts = await fetchMarkdownPosts()
    console.log(posts)
    return {posts};
}) satisfies PageServerLoad;
