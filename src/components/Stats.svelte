<script lang="ts">
	export let generation: number;
	export let population: number;

	let isDragged = false;
	let dragArea: HTMLDivElement;
	let x: number;
	let y: number;

	const disableDrag = () => (isDragged = false);

	const enableDrag = (e) => {
		isDragged = true;
		getMousePos(e);
	};
	const getMousePos = (e) => {
		if (isDragged) {
			x = e.pageX - dragArea.clientWidth / 2;
			y = e.pageY - dragArea.clientHeight;
		}
		if (y > window.innerHeight - 94) {
			y = window.innerHeight - 94;
		}
		if (x > window.innerWidth - 166) {
			x = window.innerWidth - 166;
		}
	};

	$: if (isDragged) {
		document.body.style.pointerEvents = "none";
	} else {
		document.body.style.pointerEvents = "auto";
	}
</script>

<svelte:window on:mousemove={getMousePos} on:mouseleave={disableDrag} />

<div class="stats" style={`top: ${y > 0 ? y : 0}px; left: ${x > 0 ? x : 0}px`}>
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
		z-index: 20;
		background: white;
		margin: 8px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
			rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
		user-select: none;
		overflow: hidden;
		pointer-events: auto;

		@media screen and(max-width: 825px) {
			min-width: 130px;
		}

		.drag-area {
			display: flex;
			align-items: center;
			width: 100%;
			background: hsl(0, 0%, 95%);
			padding: 5px 5px;
			color: #5f5f5f;
			cursor: move;
			cursor: grab;
			cursor: -moz-grab;
			cursor: -webkit-grab;
			transition: 100ms;

			&:hover {
				color: rgb(76, 115, 230);
			}

			i {
				font-size: 18px;

				@media screen and(max-width: 825px) {
					font-size: 16px;
				}
			}

			p {
				font-size: 15px;

				@media screen and(max-width: 825px) {
					font-size: 14px;
				}
			}
		}

		.isDragged {
			cursor: grabbing;
			cursor: -moz-grabbing;
			cursor: -webkit-grabbing;
		}

		.info {
			padding: 5px 0 5px 5px;

			@media screen and(max-width: 825px) {
				font-size: 14px;
			}
		}
	}
</style>
