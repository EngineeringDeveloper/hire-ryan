<script lang="ts">
    import { base } from '$app/paths'

    const files = import.meta.glob("./**.md")

    let studies = Object.entries(files).map((name) => {
        return name[0].replace("./", "").replace(".md", "")
    })
</script>

<div class="container mx-auto w-full flex flex-col items-center">
    <h1 class="text-xl underline ">Case Studies</h1>
    <div class= "flex flex-col p-4">
        {#each studies as study}
            <a class="underline p-1" href={`${base}/case_studies/${study}`}>{study}</a>
        {/each}
    </div>
</div>
