<script lang="ts">
    export let title: string;
    export let summary: string;
    export let tilt: boolean;


    let direction = tilt? "c" : "ac"
    // class="{`impact group-hover/mech:fancy-block-${direction} group-hover/mech:bg-pink-500`}"

</script>

<div class="info-block group/mech">
    <div
        class="impact group-hover/mech:fancy-block-ac group-hover/mech:bg-pink-500"
    >
        {title}
    </div>
    <div class="info group-hover/mech:!inline ">
        <br />
        {summary}
        <br>
        <slot/>
    </div>
</div>

<style lang="postcss">
    .info-block {
        @apply w-fit group-hover:opacity-10 hover:!opacity-100 peer-hover:!opacity-100 transition-all duration-300;
        @apply flex flex-col;
    }

    .info {
        @apply hidden transition-all duration-300;
    }

    .impact {
        @apply text-9xl md:text-8xl sm:text-7xl my-3 transition-all duration-300;
    }
</style>
