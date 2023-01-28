<script lang="ts">
    import HiddenInfo from "$lib/HiddenInfo.svelte";



    // Examples https://awesome-portfolios.vercel.app/
</script>

<div class="grid content-center h-full w-full">
    <div class="group show-all">
        <div class="impact group-hover:opacity-10 hover:!opacity-100 peer">
            I'M RYAN.
        </div>
        <HiddenInfo
            title={"MECHANICAL DESIGN ENGINEER"}
            summary={"More info on Mechanical Engineering"}>
            Hello
        </HiddenInfo>
        <HiddenInfo
            title={"FULL STACK PROGRAMMER"}
            summary={"More info on full stack"}
            tilt
        >
        </HiddenInfo>
        <HiddenInfo
            title={"DATA ANALSIS"}
            summary={"More info on Data Analysis"}
        >
        </HiddenInfo>
        <HiddenInfo title={"CYCLING"} summary={"Cycling"} tilt>
        </HiddenInfo>
    </div>
</div>

<!-- make the commas and &s dissapear -->
<style lang="postcss">
    .show-all {
        @apply mx-1 w-fit min-w-fit my-auto grid justify-items-start;
    }

    .impact {
        @apply text-9xl md:text-8xl sm:text-7xl my-3 transition-all duration-300;
    }
</style>
