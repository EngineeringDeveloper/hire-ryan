<script lang="ts">
    import { onMount } from "svelte";
    import type { caseDetails } from "$lib/types/caseStudyTypes";
    import CaseList from "./CaseList.svelte";

    export let title: string;
    export let summary: string;
    export let cases: caseDetails[]= []
    export let tilt: boolean = false;

    let titleClass = tilt
        ? "impact w-fit group-hover:clockwise group-hover:bg-pink-500 group-hover:text-black"
        : "impact w-fit group-hover:anti-clockwise group-hover:bg-pink-500 group-hover:text-black";

    let titleDiv: HTMLDivElement;
    function setTitleWidth() {
        titleDiv.style.width = "auto";
        const range = document.createRange();
        const text = titleDiv.childNodes[0];
        range.setStartBefore(text);
        range.setEndAfter(text);
        const clientRect = range.getBoundingClientRect();
        titleDiv.style.width = `${clientRect.width + 5}px`;
    }

    onMount(() => {
        setTitleWidth();
        window.addEventListener("resize", setTitleWidth);
        return () => {
            window.removeEventListener("resize", setTitleWidth);
        };
    });
</script>

<div class="group flex flex-col w-fit group-hover/top:opacity-10 hover:!opacity-100 peer-hover:!opacity-100">
    <div class={titleClass} bind:this={titleDiv}>
        {title}
    </div>
    <div class="h-0 opacity-0 group-hover:h-52 group-hover:opacity-100 overflow-hidden transition-height duration-300">
        <br />
        <div class="text-sm">
            {summary}
        </div>
        <CaseList cases={cases}/>    
        <slot />
    </div>
</div>
