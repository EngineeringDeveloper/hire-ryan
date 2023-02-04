<script lang="ts">
    import HiddenInfo from "$lib/HiddenInfo.svelte";
    import type { PageData } from "./$types";
    
    // Examples https://awesome-portfolios.vercel.app/
    
    export let data: PageData;

    function filter_by_category(category: string) {
        return data.posts.filter((value) => {
            return value.meta.category.includes(category)
        })
    }
</script>

<svelte:head>
  <title>Ryan Parkinson</title>
</svelte:head>

<div class="grid content-center h-full w-full">
    <div class="group/all show-all">
        <div class="impact peer-hover/more-info:opacity-10 peer/name">
            I'M RYAN. <!-- TODO: Could the Dot expand into my face?-->
        </div>
        <HiddenInfo
        title={"MECHANICAL DESIGN ENGINEER"}
        summary={"More info on Mechanical Engineering"}
        cases = {filter_by_category("MECHANICAL")}
        >
        </HiddenInfo>
        <HiddenInfo
        title={"FULL STACK PROGRAMMER"}
        summary={"More info on Full Stack Programming"}
        cases = {filter_by_category("FULLSTACK")}
        >
        </HiddenInfo>
        <HiddenInfo
        title={"DATA ANALYIST"}
        summary={"More info on Data Analysis"}
        cases = {filter_by_category("DATA")}
        >
        </HiddenInfo>
        <HiddenInfo
        title={"CYCLIST"}
        summary={"More info on Cycling"}
        cases = {filter_by_category("CYCLING")}
        >
        </HiddenInfo>
    </div>
</div>

<!-- make the commas and &s dissapear -->
<style lang="postcss">
    .show-all {
        @apply mx-1 w-fit min-w-fit my-auto flex flex-col justify-items-start;
    }
</style>
