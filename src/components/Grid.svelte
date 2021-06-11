<script lang="ts">
    import Cell from "./Cell.svelte"

    let width: number
    let height: number
    let grid = []

    $: numCols = Math.floor(width / 16)
    $: numRows = Math.floor(height / 16)

    const generateGrid = () => {
        grid = []

        for(let i = 0; i < numRows; i++) {
            grid.push(Array(numCols).fill(0))
        }
    }
    
    $: if(numRows || numCols) generateGrid()
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<section>
    <div class="grid" style={`grid-template-columns: repeat(${numCols}, 1fr)`}>
        {#each grid as row, r (r)}
            {#each row as cell, c (c)}
                <Cell bind:cell {r} {c} />
            {/each}
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        width: 100vw;
        height: 100vh;
        display: flex;
        // justify-content: center;
        // align-items: center;

        .grid {
            display: grid;
            gap: 0;
            width: min-intrinsic; // safari
            width: -moz-fit-content; // firefox/gecko
            width: -webkit-fit-content; // chrome
            width: fit-content;
            height: min-intrinsic; // safari
            height: -moz-fit-content; // firefox/gecko
            height: -webkit-fit-content; // chrome
            height: fit-content;
        }
    }

</style>