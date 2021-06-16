<script lang="ts">
	import { generateGrid } from "../utils/generateGrid";
	import { getNeighbors } from "../utils/getNeighbors";
	import Controls from "./Controls.svelte";
	import Cell from "./Cell.svelte";

	let width: number;
	let height: number;
	let grid = [];

	$: numCols = Math.floor(width / 20);
	$: numRows = Math.floor(height / 20);

	$: if (numRows || numCols) {
		grid = generateGrid(grid, numCols, numRows);
	}
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<Controls bind:grid />

<section>
	<div class="grid" style={`grid-template-columns: repeat(${numCols}, 1fr)`}>
		{#each grid as row, r (r)}
			{#each row as cell, c (c)}
				<Cell
					{r}
					{c}
					bind:cell
					neighbors={getNeighbors(grid, c, r, numRows, numCols)}
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
