<script lang="ts">
    import type { PageData } from "./$types";
    import { IconHome } from "@tabler/icons-svelte";

    export let data: PageData;
</script>

<svelte:head>
    <title>Case Study - {data.meta.title}</title>
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
    <a href="/" class="absolute top-1 right-1"><IconHome/></a>
    <h1>{data.meta.title}</h1>
    <p>Published: {data.meta.date}</p>
    <svelte:component this={data.content} />
</article>
