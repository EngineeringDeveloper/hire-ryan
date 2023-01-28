<script lang="ts">
    export let title: string;
    export let summary: string;
    export let tilt: boolean = false

    let id = title.split(" ")[0]
    let direction = tilt ? "clockwise " : "anti-clockwise";
    
    const topClass = `group/${id} flex flex-col w-fit`
    const baseClass = `impact w-fit group-hover/${id}:${direction} group-hover/mech:bg-pink-500 group-hover/mech:text-black`
    const subClass = `h-0 group-hover/${id}:h-52 overflow-hidden transition-height duration-300`
</script>

<div class="{topClass}">
    <div
        class="{baseClass}"
    >
        {title}
    </div>
    <div
        class="{subClass}"
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
