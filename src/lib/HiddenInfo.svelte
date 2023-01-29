<script lang="ts">
    export let title: string;
    export let summary: string;
    export let tilt: boolean = false;

    const topClass = `group flex flex-col w-fit`;
    let baseClass = tilt
        ? "impact w-fit group-hover:clockwise group-hover:bg-pink-500 group-hover:text-black "
        : "impact w-fit group-hover:anti-clockwise group-hover:bg-pink-500 group-hover:text-black ";
    const subClass = `h-0 group-hover:h-52 overflow-hidden transition-height duration-300`;
</script>

<div class={topClass}>
    <div class={baseClass}>
        {title}
    </div>
    <div class={subClass}>
        <br />
        <div class="text-sm">
            {summary}
        </div>
        <slot />
    </div>
</div>

<!-- <div class="info-block group">
    <div
        class="impact group-hover:fancy-block-ac group-hover:bg-pink-500"
    >
        {title}
    </div>
    <div class="info group-hover:!inline">
        <br />
        {summary}
        <br>
        <slot/>
    </div>
</div> -->
