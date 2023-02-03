<script lang="ts">
    import type { meta } from "$lib/types/caseStudyTypes";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
  <title>Case Study - {data.meta.title}</title>
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
    <h1>{ data.meta.title }</h1>
    <p>Published: {data.meta.date}</p>
    <svelte:component this={data.content} />
</article>