<script lang="ts">
    // Examples https://awesome-portfolios.vercel.app/
</script>

<div class="group show-all">
    <span class="impact group-hover:opacity-10 hover:!opacity-100 peer "
        >IM RYAN</span
    >
    <span class="impact info-block"
        >MECHANICAL DESIGN ENGINEER,
        <div class="info">More info</div></span
    >
    <span class="impact info-block">FULL STACK PROGRAMMER,</span>
    <span class="impact info-block">DATA ANALYIST,</span>
    <span class="impact info-block">& CYCLIST</span>
</div>

<style lang="postcss">
    .show-all {
        @apply container flex flex-col m-auto h-full w-full items-center;
    }
    .info-block {
        @apply group-hover:opacity-10 hover:!opacity-100 peer-hover:!opacity-100;
    }

    .info {
        @apply hidden hover:visible;
    }

    .impact {
        @apply w-full text-9xl md:text-8xl sm:text-6xl transition-all duration-300;
    }
</style>
