<script lang="ts">
    import type { PageData } from "./$types";
    import { base } from '$app/paths';
    export let data: PageData;
    // https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
</script>

<div class="container mx-auto w-full flex flex-col items-center">
    <h1 class="text-xl underline ">Case Studies</h1>
    <div class="flex flex-col p-4">
        {#each data.posts as study}
            <a class="underline p-1" href={study.path}
                >{JSON.stringify(study.meta)}
                {study.meta.tags}
                {#if study.meta.image}
                <img src={`${base}/images/${study.meta.image}`} alt="">
                {/if}
            </a>
        {/each}
    </div>
</div>
