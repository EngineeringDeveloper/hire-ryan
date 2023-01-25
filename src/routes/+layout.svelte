<script lang="ts">
    import "../app.css";
    import { base } from "$app/paths";
</script>

<div class="navbar bg-base-100 bg-slate-600 dark:bg-slate-600 drop-shadow-md">
    <div class="navbar-center mx-auto px-4">
        <a class="btn btn-ghost normal-case text-xl" href={`${base}/`}>Home</a>
        <!-- <a href={`${base}/graphics`}>CAD</a> -->
        <a
            href={`${base}/case_studies`}>Case Studies</a
        >
        <a
            href={`${base}/hobbies`}>Hobbies</a
        >
        <!-- <a class="btn btn-ghost normal-case text-xl" href={`${base}/uses`}
            >Uses</a
        > -->
    </div>
</div>

<slot />

<style lang="postcss">
    a {
        @apply btn btn-ghost normal-case text-xl drop-shadow-lg mx-1;
    }
</style>
