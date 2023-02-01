<script lang="ts">
    import type { caseDetails } from "$lib/types/caseStudyTypes";

    export let caseStudy: caseDetails;
</script>

<a
                    class="underline p-1 w-32 h-32 group hover:w-52 hover:text-2xl ease-in-out duration-300"
                    href={caseStudy.path}
                >
                    <div class="absolute w-32 group-hover:w-52">
                        <h2 class="text-orange-500">
                            {caseStudy.meta.title}
                        </h2>
                        <div
                            class="opacity-0 group-hover:opacity-80 hover:transition-opacity flex flex-row flex-wrap"
                        >
                            {#each caseStudy.meta.tags as tag}
                                <h2 class="px-1">#{tag}</h2>
                            {/each}
                        </div>
                    </div>

                    {#if caseStudy.meta.image}
                        <img
                            class="object-none w-32 h-32 group-hover:w-52 ease-in-out duration-300"
                            src={`/images/${caseStudy.meta.image}`}
                            alt=""
                        />
                    {:else}
                        <img
                            class="object-none w-32 h-32 group-hover:w-52 ease-in-out duration-300"
                            src={`/images/placeholder.png`}
                            alt=""
                        />
                    {/if}
                </a>

