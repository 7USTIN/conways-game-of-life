<script lang="ts">
    import { running, next } from "../utils/stores"

    export let grid: any[]

    let timeout 

    const startRunning = () => {
        running.update(prev => prev + 1)
        timeout = setTimeout(startRunning, 100)
    }

    const stopRunning = () => {
        running.set(0)
        clearTimeout(timeout)
    }

    const handleNext = () => next.update(prev => prev + 1)

    const handleClear = () => grid = []

    const handleRandomize = () => {
        for(let i in grid) {
            for(let j in grid[i]) {
                grid[i][j] = (Math.random() > 0.8 ? 1 : 0)
            }
        }
    }

    const controls = (e: KeyboardEvent) => {
        if(e.key === " " || e.code === "Space") {
            $running ? stopRunning() : startRunning()
        } else if(e.key === "w" || e.code === "KeyW") {
            handleNext()
        } else if(e.key === "e" || e.code === "KeyE") {
            handleClear()
        } else if(e.key === "q" || e.code === "KeyQ") {
            handleRandomize()
        }

        console.log(e)
    }
</script>

<svelte:window on:keyup={controls} />

<section>
    {#if !$running}
        <button on:click={startRunning}>Start [space]</button>
    {:else}
        <button on:click={stopRunning}>Stop [space]</button>
    {/if}
    <button on:click={handleNext}>Next [w]</button>
    <button on:click={handleClear}>Clear [e]</button>
    <button on:click={handleRandomize}>Randomize [q]</button>
</section>

<style lang="scss">
    section {
        position: fixed;
        width: 100vw;
        height: auto;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgb(117, 117, 117, 0.33);
        padding: 15px;
        user-select: none;

        button {
            border: none;
            border-radius: 5px;
            background: rgb(76, 115, 230);
            padding: 10px 15px;
            margin-right: 10px;
            font-weight: 500;
            color: #FFFFFF;
            font-size: 18px;
            cursor: pointer;
            transition: 100ms;

            &:hover {
                background: hsl(225, 75%, 52.5%);
            }
        }
    }
</style>