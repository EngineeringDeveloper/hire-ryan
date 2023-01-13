<script lang="ts">
    import { base } from '$app/paths'

</script>


<nav>
    <a href={`${base}`}>Home</a>
    <!-- <a href={`${base}/graphics`}>CAD</a> -->
    <a href={`${base}/case_study`}>Case Studies</a>
    <a href={`${base}/uses`}>Uses</a>
</nav>

<slot/>
