<script lang="ts">
    export let title: string;
    export let summary: string;
    export let tilt: boolean = false

    let direction = tilt ? "c" : "ac";
    // class="{`impact group-hover/mech:fancy-block-${direction} group-hover/mech:bg-pink-500`}"
    let baseClass = `w-fit group-hover/mech:fancy-block-${direction} group-hover/mech:bg-pink-500 group-hover/mech:text-black`
</script>

<div class="impact group/mech flex flex-col w-fit">
    <div
        class="{baseClass}"
    >
        {title}
    </div>
    <div
        class="h-0 group-hover/mech:h-52 overflow-hidden transition-height duration-300"
    >
        <br />
        <div class="text-sm">
            {summary}
        </div>
        <slot />
    </div>
</div>

<!-- <div class="info-block group/mech">
    <div
        class="impact group-hover/mech:fancy-block-ac group-hover/mech:bg-pink-500"
    >
        {title}
    </div>
    <div class="info group-hover/mech:!inline">
        <br />
        {summary}
        <br>
        <slot/>
    </div>
</div> -->
<style lang="postcss">
</style>
