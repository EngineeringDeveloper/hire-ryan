<script lang="ts">
    import { page } from '$app/stores'
    const files = import.meta.glob("./**.md")

    let studies = Object.entries(files).map((name) => {
        return name[0].replace("./", "").replace(".md", "")
    })
</script>

<h1>Case Studies</h1>
{#each studies as study}
    <a href={`${$page.url.pathname}/${study}`}>{studies}</a>
{/each}


<style>

</style>