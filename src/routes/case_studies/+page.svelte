<script lang="ts">
    import type { PageData } from "./$types";
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
                <img src={`/images/${study.meta.image}`} alt="">
            </a>
        {/each}
    </div>
</div>
