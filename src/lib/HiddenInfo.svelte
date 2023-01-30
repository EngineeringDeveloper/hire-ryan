<script lang="ts">
    import { onMount } from "svelte";


    export let title: string;
    export let summary: string;
    export let tilt: boolean = false;

    let sections : string[] = title.split(" ")
    let breakNumber = 0
    let breakTitle = false
    $: brokenTitle = [sections.slice(0, sections.length  - breakNumber).join(" "), ...sections.slice(sections.length - breakNumber,  sections.length) ]
    

    const topClass = `group flex flex-col w-fit group-hover/top:opacity-10 hover:!opacity-100 peer-hover:!opacity-100`;
    let titleClass = tilt
        ? "impact w-fit group-hover:clockwise group-hover:bg-pink-500 group-hover:text-black whitespace-nowrap grid grid-row"
        : "impact w-fit group-hover:anti-clockwise group-hover:bg-pink-500 group-hover:text-black whitespace-nowrap grid grid-row";
    const subClass = `h-0 group-hover:h-52 overflow-hidden transition-height duration-300`;

    let titleDiv: HTMLDivElement;
    const isEllipsisActive = () => {
        console.log(titleDiv.offsetWidth > window.outerWidth, title);
        if (titleDiv.offsetWidth > window.outerWidth) {
            breakNumber += 1
            breakTitle =  true
            console.log(breakNumber, title)
        } else {
            breakNumber = 0
            breakTitle =  false
        } 
        
    };


    onMount(() => {		
		window.addEventListener('resize', isEllipsisActive);
        isEllipsisActive()
		
		return () => {
			window.removeEventListener('resize', isEllipsisActive);
		}
	});

</script>

<div class={topClass}>
    <div class={titleClass} bind:this={titleDiv}>
        {#if breakTitle}
        {#each brokenTitle as sect}
            <div>{sect}</div>
        {/each}                    
        {:else}
            {title}
        {/if}
        
    </div>
    <div class={subClass}>
        <br />
        <div class="text-sm">
            {summary}
        </div>
        <slot />
    </div>
</div>

<!-- <div class="info-block group">
    <div
        class="impact group-hover:fancy-block-ac group-hover:bg-pink-500"
    >
        {title}
    </div>
    <div class="info group-hover:!inline">
        <br />
        {summary}
        <br>
        <slot/>
    </div>
</div> -->
