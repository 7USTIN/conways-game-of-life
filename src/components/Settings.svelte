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
			<div class="header">Settings</div>

			<label for="lifespan">Lifespan of a cell</label>
			<div class="lifespan-wrapper">
				<input
					type="range"
					name="lifespan"
					bind:value={lifespan}
					min="10"
					max="1000"
				/>
				<span>{lifespan}ms</span>
			</div>

			<label for="density">Density on randomize</label>
			<div class="density-wrapper">
				<input
					type="range"
					name="density"
					bind:value={density}
					min="0"
					max="100"
				/>
				<span>{density}%</span>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.settings-wrapper {
		pointer-events: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		width: auto;
		height: 100%;
		position: relative;

		.settings-icon {
			position: relative;
			z-index: 100;
			cursor: pointer;
			font-size: 41px;
			color: rgb(76, 115, 230);
			text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
			transition: 100ms;

			&:hover {
				color: hsl(225, 75%, 52.5%);
			}

			@media screen and (max-width: 825px) {
				font-size: 30px;
			}
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
			cursor: pointer;
		}

		.settings {
			z-index: 100;
			position: absolute;
			top: 0;
			left: 0;
			transform: translate(-80%, -102.5%);
			background: white;
			box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
				rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
			user-select: none;
			min-width: 225px;

			@media screen and (max-width: 825px) {
				transform: translate(-90%, -102.5%);
			}

			.header {
				width: 100%;
				background: hsl(0, 0%, 95%);
				padding: 8px 10px;
				color: #5f5f5f;
				margin-bottom: 18px;
				font-weight: 500;
				font-size: 16px;
			}

			label {
				margin: 2px 12px;
				font-size: 15px;
			}

			.density-wrapper,
			.lifespan-wrapper {
				display: flex;
				margin: 3px 12px 20px 12px;
				align-items: center;

				input {
					margin: 5px 5px 0 0;
				}

				span {
					margin-top: 2px;
				}
			}

			input {
				cursor: pointer;

				&:focus {
					outline: none;
				}
			}
		}
	}
</style>
