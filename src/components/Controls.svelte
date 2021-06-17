<script lang="ts">
	import { running, next } from "../utils/stores";
	import Stats from "./Stats.svelte";
	import Settings from "./Settings.svelte";

	export let grid: any[];

	let timeout;
	let generation = 0;
	let population = 0;
	let lifespan = 150;
	let density = 20;
	let width: number;

	const startRunning = () => {
		if (!population) return;

		running.update((prev) => prev + 1);
		timeout = setTimeout(startRunning, lifespan);
	};

	const stopRunning = () => {
		running.set(0);
		clearTimeout(timeout);
	};

	const handleNext = () => {
		next.update((prev) => prev + 1);
	};

	const handleClear = () => {
		generation = 0;
		grid = [];
	};

	const handleRandomize = () => {
		generation = 0;

		for (let i in grid) {
			for (let j in grid[i]) {
				grid[i][j] = Math.random() > (100 - density) / 100 ? 1 : 0;
			}
		}
	};

	const controls = (e: KeyboardEvent) => {
		if (e.key === " " || e.code === "Space") {
			$running ? stopRunning() : startRunning();
		} else if (e.key === "w" || e.code === "KeyW") {
			handleNext();
		} else if (e.key === "e" || e.code === "KeyE") {
			handleClear();
		} else if (e.key === "q" || e.code === "KeyQ") {
			handleRandomize();
		}
	};

	const getPopulation = () => {
		population = 0;

		for (let i in grid) {
			for (let j in grid[i]) {
				population += grid[i][j];
			}
		}
	};

	$: if (grid) {
		getPopulation();
	}

	$: if ($running || $next) {
		generation++;
	}

	$: if (!population) {
		generation = 0;
		stopRunning();
	}
</script>

<svelte:window bind:innerWidth={width} on:keyup={controls} />

<Stats {population} {generation} />

<a
	href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules"
	target="_blank"
>
	<p>?</p>
</a>

<section>
	{#if !$running}
		<button on:click={startRunning} disabled={!population}>
			Start {width > 850 ? "[space]" : ""}
		</button>
	{:else}
		<button on:click={stopRunning} disabled={!population}>
			Stop {width > 850 ? "[space]" : ""}
		</button>
	{/if}

	<button on:click={handleNext} disabled={!population}>
		Next {width > 850 ? "[w]" : ""}
	</button>
	<button on:click={handleClear} disabled={!population}>
		Clear {width > 850 ? "[e]" : ""}
	</button>
	<button on:click={handleRandomize}>
		Randomize {width > 850 ? "[q]" : ""}
	</button>

	<Settings bind:lifespan bind:density />
</section>

<style lang="scss">
	a {
		position: fixed;
		top: 20px;
		right: 20px;
		width: 40px;
		height: 40px;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 999999px;
		background: hsl(0, 0%, 70%);
		color: #ffffff;
		font-size: 27.5px;
		transition: 100ms;
		font-family: sans-serif;

		@media screen and(max-width: 825px) {
			top: 15px;
			right: 15px;
			width: 30px;
			height: 30px;
			font-size: 20px;
		}

		&:hover {
			background: hsl(0, 0%, 60%);
		}

		p {
			margin-top: 2px;
		}
	}

	section {
		position: fixed;
		width: 100vw;
		height: auto;
		z-index: 10;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 15px 25px;
		background: rgb(117, 117, 117, 0.45);
		user-select: none;
		display: flex;
		align-items: center;
		pointer-events: none;

		@media screen and (max-width: 825px) {
			padding: 8px 5px;
		}

		button {
			border: none;
			border-radius: 5px;
			background: rgb(76, 115, 230);
			padding: 10px 15px;
			margin-right: 10px;
			font-weight: 500;
			color: #ffffff;
			font-size: 18px;
			cursor: pointer;
			transition: 100ms;
			pointer-events: auto;

			@media screen and (max-width: 825px) {
				padding: 10px 7px 10px 7px;
				margin-right: 5px;
				font-size: 13px;
			}

			&:disabled {
				background: hsl(225, 100%, 72.5%);
				cursor: not-allowed;

				&:hover {
					background: hsl(225, 100%, 72.5%);
				}
			}

			&:hover {
				background: hsl(225, 75%, 52.5%);
			}

			&:focus {
				outline: none;
			}
		}
	}
</style>
