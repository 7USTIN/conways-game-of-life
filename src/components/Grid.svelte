<script lang="ts">
    let width: number
    let height: number
    let grid = []

    $: numCols = Math.floor(width / 15)
    $: numRows = Math.floor(height / 15)

    $: if(numCols) {
        grid = []

        for(let i = 0; i < numRows; i++) {
            grid.push(Array(numCols).fill(0))
        }
    }
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<section>
    <div class="grid" style={`grid-template-columns: repeat(${numCols}, 1fr)`}>
        {#each grid as row, rowIdx (rowIdx)}
            {#each row as cell, cellIdx (cellIdx)}
                <div 
                    class="cell" 
                    style={`border-left: ${!cellIdx && "1px solid #191919"}; border-top: ${!rowIdx && "1px solid #191919"};`} 
                />
            {/each}
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

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

            .cell {
                width: 15px;
                height: 15px;
                border-right: 1px solid #191919;
                border-bottom: 1px solid #191919;
            }
        }
    }

</style>