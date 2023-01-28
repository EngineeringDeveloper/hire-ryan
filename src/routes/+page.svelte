<script lang="ts">
    // Examples https://awesome-portfolios.vercel.app/
</script>

<blockquote class="group show-all">
    <span class="impact group-hover:opacity-10 hover:!opacity-100 peer"
        >I'M RYAN.
    </span>
    <span class="info-block group/mech">
        <div class= "impact group-hover/mech:fancy-block">
            MECHANICAL DESIGN ENGINEER
        </div>
        <div class="info group-hover/mech:!inline ">More info on Mechanical Engineering</div>
    </span>

    <span class="impact info-block hover:fancy-block"
        >FULL STACK PROGRAMMER</span
    >
    <span class="impact info-block hover:fancy-block">DATA ANALYIST</span>
    <span class="impact info-block hover:fancy-block">CYCLIST</span>
</blockquote>

<!-- make the commas and &s dissapear -->
<style lang="postcss">
    .show-all {
        @apply container flex flex-col m-auto ;
    }
    .info-block {
        @apply group-hover:opacity-10 hover:!opacity-100 peer-hover:!opacity-100 hover:mb-20 transition-all duration-300;
    }

    .info {
        @apply hidden transition-all duration-300;
    }

    .impact {
        @apply w-full text-9xl md:text-8xl sm:text-6xl my-3 transition-all duration-300;
    }
</style>
