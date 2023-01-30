<script lang="ts">
    import CaseList from "$lib/CaseList.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    // https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
</script>

<CaseList posts={data.posts} />
