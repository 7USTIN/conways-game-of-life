<script lang="ts">
	import { fade } from "svelte/transition";

	export let density: number;
	export let lifespan: number;

	let showSettings = false;
</script>

<div class="settings-wrapper">
	<i
		class="material-icons settings-icon"
		on:click={() => (showSettings = !showSettings)}
	>
		settings
	</i>

	{#if showSettings}
		<div class="background" on:click={() => (showSettings = false)} />

		<div class="settings" transition:fade={{ duration: 150 }}>
			<input
				type="range"
				name="lifespan"
				bind:value={lifespan}
				min="10"
				max="1000"
			/>
			<label for="lifespan">{lifespan}ms</label>

			<input
				type="range"
				name="density"
				bind:value={density}
				min="0"
				max="100"
			/>
			<label for="density">{density}%</label>
		</div>
	{/if}
</div>

<style lang="scss">
	.settings-wrapper {
		pointer-events: auto;

		.settings-icon {
			position: relative;
			z-index: 100;
			cursor: pointer;
		}

		.background {
			z-index: 99;
			position: fixed;
			width: 100vw;
			height: 100vh;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background: transparent;
		}

		.settings {
			z-index: 100;
			position: absolute;

			input {
				cursor: pointer;

				&:focus {
					outline: none;
				}
			}
		}
	}
</style>
