<script lang="ts">
    import { running } from "../utils/stores"

    export let cell: number 
    export let r: number
    export let c: number
    export let neighbors: number

    let isMouseDown = false

    const toggleCell = () => cell = cell ? 0 : 1

    const nextGen = () => {
        if (neighbors < 2 || neighbors > 3) {
            cell = 0;
        } else if (cell === 0 && neighbors === 3) {
            cell = 1;
        }
    }

    $: if($running) {
        nextGen()
    }
</script>

<svelte:window on:mouseup={() => isMouseDown = false} on:mousedown={() => isMouseDown = true} />

<div 
    class="cell" 
    on:click={toggleCell}
    on:mouseover={() => { if(isMouseDown) toggleCell() }}
    style={`border-left: ${!c && "1px solid #e3e6e8"}; border-top: ${!r && "1px solid #e3e6e8"}; background: ${cell ? "rgb(76, 115, 230)" : "transparent"}`} 
/>

<style lang="scss">
    .cell {
        width: 20px;
        height: 20px;
        border-right: 1px solid #e3e6e8;
        border-bottom: 1px solid #e3e6e8;
        cursor: pointer;
        user-select: none;

        &:hover {
            @media (hover: hover) and (pointer: fine) {
                background: rgba(76, 115, 230, 0.4) !important;
            }
        }
    }
</style>