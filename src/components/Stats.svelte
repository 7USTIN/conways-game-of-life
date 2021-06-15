<script lang="ts">
	export let generation: number;
	export let population: number;

	let isDragged = false;
	let dragArea: HTMLDivElement;
	let x: string;
	let y: string;

	const disableDrag = () => (isDragged = false);

	const enableDrag = () => (isDragged = true);

	const getMousePos = (e) => {
		if (isDragged) {
			x = e.pageX - dragArea.clientWidth / 2 + "px";
			y = e.pageY - dragArea.clientHeight + "px";
		}
	};

	$: if (isDragged) {
		document.body.style.pointerEvents = "none";
	}
</script>

<svelte:window on:mousemove={getMousePos} on:mouseleave={disableDrag} />

<div class="stats" style={`top: ${y}; left: ${x}`}>
	<div
		class:isDragged
		class="drag-area"
		bind:this={dragArea}
		on:mousedown={enableDrag}
		on:mouseup={disableDrag}
	>
		<i class="material-icons">drag_indicator</i>
		<p>Drag</p>
	</div>

	<div class="info">
		<p class="population">Population: {population}</p>
		<p class="generation">Generation: {generation}</p>
	</div>
</div>

<style lang="scss">
	.stats {
		position: fixed;
		min-width: 150px;
		top: 0;
		left: 0;
		z-index: 99999;
		background: white;
		margin: 8px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
			rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
		user-select: none;
		overflow: hidden;
		pointer-events: auto;

		.drag-area {
			display: flex;
			align-items: center;
			width: 100%;
			background: hsl(0, 0%, 95%);
			padding: 5px 5px;
			cursor: move;
			cursor: grab;
			cursor: -moz-grab;
			cursor: -webkit-grab;

			i {
				font-size: 18px;
			}
		}

		.isDragged {
			cursor: grabbing;
			cursor: -moz-grabbing;
			cursor: -webkit-grabbing;
		}

		.info {
			padding: 5px 0 5px 5px;
		}
	}
</style>
