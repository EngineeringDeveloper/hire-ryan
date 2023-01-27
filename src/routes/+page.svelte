<script lang="ts">
    // Examples https://awesome-portfolios.vercel.app/

    let showMechInfo = false;
    let showStackInfo = false;
    let showDataInfo = false;
</script>

<div class="group show-all">
    <span class="impact group-hover:opacity-10 hover:!opacity-100 peer"
        >I'M RYAN.</span
    >
    <span
        on:mouseover={() => (showMechInfo = true)}
        on:focus={() => (showMechInfo = true)}
        on:mouseleave={() => (showMechInfo = false)}
        on:focusout={() => (showMechInfo = false)}
        class="impact info-block hover:fancy-block"
        >MECHANICAL DESIGN ENGINEER
        <!-- {#if !showMechInfo}
            ,
        {/if} -->
    </span>
    {#if showMechInfo}
        <div class="info">More info</div>
    {/if}

    <span class="impact info-block hover:fancy-block"
        >FULL STACK PROGRAMMER</span
    >
    <span class="impact info-block hover:fancy-block">DATA ANALYIST</span>
    <span class="impact info-block hover:fancy-block">CYCLIST</span>
</div>

<!-- make the commas and &s dissapear -->
<style lang="postcss">
    .show-all {
        @apply container flex flex-col m-auto h-full w-full items-center;
    }
    .info-block {
        @apply group-hover:opacity-10 hover:!opacity-100 peer-hover:!opacity-100 relative hover:m-10;
    }

    .info {
        /* @apply hidden hover:visible; */
    }

    .impact {
        @apply w-full text-9xl md:text-8xl sm:text-6xl my-3 transition-all duration-300;
    }
</style>
