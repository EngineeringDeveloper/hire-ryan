<script lang="ts">
    import "../app.css";
    import { base } from "$app/paths";
</script>

<div class="navbar bg-base-100">
    <div class="navbar-center mx-auto px-4">
        <a class="btn btn-ghost normal-case text-xl" href={`${base}/`}>Home</a>
        <!-- <a href={`${base}/graphics`}>CAD</a> -->
        <a class="btn btn-ghost normal-case text-xl" href={`${base}/case_studies`}>Case Studies</a>
        <a class="btn btn-ghost normal-case text-xl" href={`${base}/uses`}>Uses</a>
    </div>
</div>

<slot />
