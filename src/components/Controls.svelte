<script lang="ts">
    import { running } from "../utils/stores"

    let timeout 

    const startRunning = () => {
        running.update(prev => prev + 1)
        timeout = setTimeout(startRunning, 100)
    }

    const stopRunning = () => {
        running.set(0)
        clearTimeout(timeout)
    }

    const controls = e => {
        if(e.key === " " || e.code === "Space") {
            $running ? stopRunning() : startRunning()
        }
    }
</script>

<svelte:window on:keyup={controls} />

<section>
    {#if !$running}
        <button on:click={startRunning}>Start [space]</button>
    {:else}
        <button on:click={stopRunning}>Stop [space]</button>
    {/if}
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

        button {
            border: none;
            border-radius: 5px;
            background: rgb(76, 115, 230);
            padding: 10px 15px;
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