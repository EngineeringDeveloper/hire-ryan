<script lang="ts">
    import { page } from '$app/stores'
    import { base } from '$app/paths'

    const files = import.meta.glob("./**.md")

    let studies = Object.entries(files).map((name) => {
        return name[0].replace("./", "").replace(".md", "")
    })
</script>

<h1>Case Studies</h1>
{#each studies as study}
    <a href={`${base}/case_study/${study}`}>{studies}</a>
{/each}


<style>

</style>