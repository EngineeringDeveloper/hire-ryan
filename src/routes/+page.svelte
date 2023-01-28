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
            title={"DATA ANALYSIS"}
            summary={"More info on Data Analysis"}
        >
        </HiddenInfo>
        <HiddenInfo title={"CYCLING"} summary={"Cycling"} tilt>
        </HiddenInfo>
    </div>
</div>

<!-- <div class="show-all">
    <div class="impact">I'M RYAN</div>
    <div class="impact group/mech flex flex-col w-fit">
        <div class="w-fit group-hover/mech:fancy-block-ac group-hover/mech:bg-pink-500 group-hover/mech:text-black">
            MECHANICAL ENGINEER
        </div>
        <div class= "h-0 group-hover/mech:h-52 overflow-hidden transition-height duration-300">
            <br>
            Further Info
        </div>
    </div>
    <div class="impact hover:fancy-block-c hover:bg-pink-500">FULL STACK ENGINEER</div>
    <div class="impact hover:fancy-block-ac hover:bg-pink-500">DATA ANALYIST</div>
    <div class="impact hover:fancy-block-c hover:bg-pink-500">CYCLIST</div>

</div> -->

<!-- make the commas and &s dissapear -->
<style lang="postcss">
    .show-all {
        @apply mx-1 w-fit min-w-fit my-auto flex flex-col justify-items-start;
    }
</style>
