<script>
	import '../styles.css';
	import avatar from '$lib/images/avatar.png';
</script>

<svelte:head>
	<title>MPcoded</title>
	<meta name="description" content="MPcoded" />
</svelte:head>

<br /><br /><br />

<aboutsection>
	<h1>Projects</h1>
	<h2>First Second <br>  First Second</h2>


	<h3>10.Sep 2023 - Michael</h3>
</aboutsection>

<style>
	aboutsection {
		display: grid;
		grid-template-rows: 50px 550px;
		grid-template-columns: 250px 650px;
		padding-top: 50px;
		border-width: 2px;
		padding: 10px;
		align-self: center;
		border-radius: 1rem;
		height: 650px;
		width: 1200px;
		background: linear-gradient(110deg, rgba(43, 41, 41) 50%, rgba(12, 227, 235, 0.001));
		border-color: #000000;
		border-style: solid;
		box-shadow: 2px 2px #000000;
	}

	aboutsection h3 {
		grid-column: 1;
		grid-row: 3;

	}

	aboutsection h2 {
		grid-column: 2;
		grid-row: 2;

	}
</style>
