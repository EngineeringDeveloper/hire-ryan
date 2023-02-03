<script lang="ts">
    import type { caseDetails } from "$lib/types/caseStudyTypes";

    export let caseStudy: caseDetails;

    const imageOptions = new Map([
        [
            "Mechanical Design",
            new URL("/images/Mechanical Design.jfif", import.meta.url).href,
        ],
        [
            "Internal Tooling",
            new URL("/images/Internal Tooling.jpg", import.meta.url).href,
        ],
    ]);

    let imgSrc: string;
    if (imageOptions.has(caseStudy.meta.image!)) {
        imgSrc = imageOptions.get(caseStudy.meta.image!)!;
    } else {
        imgSrc = new URL("/images/placeholder.png", import.meta.url).href;
    }
</script>

<a
    class="underline p-1 w-32 h-32 group hover:w-52 hover:text-2xl ease-in-out duration-300"
    href={caseStudy.path}
>
    <div class="px-1 absolute">
        <h2 class="text-orange-500 w-32">
            {caseStudy.meta.title}
        </h2>
        <div class="flex flex-row w-32">
            <div
                class="flex flex-row flex-wrap"
            >
                {#each caseStudy.meta.tags as tag}
                    <h2 class="px-1">#{tag}</h2>
                {/each}
            </div>
            <!-- <div
                class="animate-marquee2 flex flex-row flex-wrap"
            >
                {#each caseStudy.meta.tags as tag}
                    <h2 class="px-1">#{tag}</h2>
                {/each}
            </div> -->
        </div>
    </div>

    <img
        class="object-cover w-32 h-32 group-hover:w-52 ease-in-out duration-300 rounded-lg"
        src="{imgSrc}"
        alt=""
    />
</a>
