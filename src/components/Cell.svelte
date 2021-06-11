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
    style={`border-left: ${!c && "1px solid #191919"}; border-top: ${!r && "1px solid #191919"}; background: ${cell ? "red" : "transparent"}`} 
/>

<style lang="scss">
    .cell {
        width: 16px;
        height: 16px;
        border-right: 1px solid #191919;
        border-bottom: 1px solid #191919;
        cursor: pointer;
        user-select: none;

        &:hover {
            background: rgba(0, 0, 0, 0.1) !important;
        }
    }
</style>