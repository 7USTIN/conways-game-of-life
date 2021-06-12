<script lang="ts">
    export let cell: number
    export let r: number
    export let c: number

    let isMouseDown = false

    const toggleCell = () => cell = cell ? 0 : 1
</script>

<svelte:window on:mouseup={() => isMouseDown = false} on:mousedown={() => isMouseDown = true} />

<div 
    class="cell" 
    on:click={toggleCell}
    on:mouseover={() => { if(isMouseDown) toggleCell() }}
    style={`border-left: ${!c && "1px solid #E8EAEC"}; border-top: ${!r && "1px solid #E8EAEC"}; background: ${cell ? "rgb(121, 150, 236)" : "transparent"}`} 
/>

<style lang="scss">
    .cell {
        width: 20px;
        height: 20px;
        border-right: 1px solid #E8EAEC;
        border-bottom: 1px solid #E8EAEC;
        cursor: pointer;
        user-select: none;

        &:hover {
            @media (hover: hover) and (pointer: fine) {
                background: rgba(121, 150, 236, 0.4) !important;
            }
        }
    }
</style>