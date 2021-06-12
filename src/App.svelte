<script lang="ts">
	import Grid from "./components/Grid.svelte";
	import Controls from "./components/Controls.svelte";
</script>

<main>
	<Grid />
	<Controls />
</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: "Work Sans", sans-serif;
		background: #FFFFFF;
	}

	:global(button) {
		font-family: "Work Sans", sans-serif;

		&:focus {
			outline: none;
		}
	}
</style>