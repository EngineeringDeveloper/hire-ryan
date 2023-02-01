<script lang="ts">
    import Case from './Case.svelte';

    import type { caseDetails } from "$lib/types/caseStudyTypes";

    export let cases: caseDetails[];
</script>

{#if cases.length > 0}
    <div
        class="relative container mx-auto w-full flex flex-col items-center scroll-auto"
    >
        <h1 class="text-xl underline ">Case Studies</h1>
        <div class="grid grid-flow-col col-span-4 p-4">
            {#each cases as caseStudy}
                <Case {caseStudy}/>
            {/each}
        </div>
    </div>
{/if}
