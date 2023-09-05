<script>
	import Sidebar from './Sidebar.svelte';
</script>

<svelte:head>
	<title>MPcoded</title>
	<meta name="description" content="MPcoded" />
</svelte:head>
<sidebarstyle>
	<Sidebar />
</sidebarstyle>
<br><br><br>
<section>
	<h1>Welcome</h1>
	<h2>As you can see i am not a frontend developer, not that I don't care for it
		<br>but as longs as it works <br> <br> Im happy :)
	</h2>
	<h3>5.Sep 2023 - Michael</h3>
</section>

<style>
	section {
		display: grid;
		grid: repeat(3, 120px) / auto-flow;
		padding-top: 50px;
		border-top: 2cap;
		border-color: white;
		background-color: rgb(40, 41, 41);
		border-width: 2px;
		border-style: solid;
		height: 450px;
		border-color: rgba(12, 227, 235, 0.7) #00000000 rgba(12, 227, 235, 0.7);
		box-shadow: 0 4px 8px 0 rgba(253, 252, 252, 0.2), 0 6px 20px 0 rgba(138, 135, 135, 0.19);
		
	}
</style>
