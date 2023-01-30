<script lang="ts">
    import { base } from '$app/paths';
    import type { meta } from "$lib/types/caseStudyTypes";

    type caseDetails = {
        meta: meta,
        path: string,
    }

    export let posts: caseDetails[];

</script>

<div class="container mx-auto w-full flex flex-col items-center scroll-auto">
    <h1 class="text-xl underline ">Case Studies</h1>
    <div class="grid grid-flow-col col-span-4 p-4">
        {#each posts as study}
            <a class="underline p-1 w-32 h-32 group hover:w-52 hover:text-2xl ease-in-out duration-300" href={study.path}
                >
                <div class="absolute w-32 group-hover:w-52">
                    <h2 class="text-orange-500">
                        {study.meta.title}
                    </h2>
                    <div class="opacity-0 group-hover:opacity-80 hover:transition-opacity flex flex-row flex-wrap">
                        {#each study.meta.tags as tag}
                            <h2 class= "px-1">#{tag}</h2>
                        {/each}
                    </div>
                </div>
                
                {#if study.meta.image}
                <img class="object-none w-32 h-32 group-hover:w-52 ease-in-out duration-300" src={`${base}/images/${study.meta.image}`} alt="">
                {:else}
                <img class="object-none w-32 h-32 group-hover:w-52 ease-in-out duration-300" src={`${base}/images/placeholder.png`} alt="">
                {/if}
            </a>
        {/each}
    </div>
</div>

<style lang="postcss">

</style>