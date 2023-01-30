<script lang="ts">
    import HiddenInfo from "$lib/HiddenInfo.svelte";
    import type { caseDetails } from "$lib/types/caseStudyTypes";
    import type { PageData } from "./$types";
    
    // Examples https://awesome-portfolios.vercel.app/
    
    export let data: PageData;

    interface Impact {
        title: string;
        summary: string;
        cases: caseDetails[];
        tilt: boolean;
    }

    let impactMessages:Impact[] = [
        {
        title: "MECHANICAL DESIGN ENGINEER",
        summary: "More info on Mechanical Engineering",
        cases: data.posts.filter((value) => {
            return value.meta.category.includes("MECHANICAL")
        }),
        tilt: false,
        },
        {
        title: "FULL STACK PROGRAMMER",
        summary: "More info on Full Stack Programming",
        cases: data.posts.filter((value) => {
            return value.meta.category.includes("FULLSTACK")
        }),
        tilt: true,
        },
        {
        title: "DATA ANALYIST",
        summary: "More info on Data Analysis",
        cases: data.posts.filter((value) => {
            return value.meta.category.includes("DATA")
        }),
        tilt: false,
        },
    ]

</script>

<div class="grid content-center h-full w-full">
    <div class="group/top show-all">
        <div class="impact group-hover/top:opacity-10 hover:!opacity-100 peer">
            I'M RYAN.
        </div>
        {#each impactMessages as msg}
            <HiddenInfo {...msg} ></HiddenInfo>
        {/each}
    </div>
</div>

<!-- make the commas and &s dissapear -->
<style lang="postcss">
    .show-all {
        @apply mx-1 w-fit min-w-fit my-auto flex flex-col justify-items-start;
    }
</style>
