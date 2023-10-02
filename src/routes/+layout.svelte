<script>
	import Header from './Header.svelte';
	import './styles.css';
	import "../app.css";
	import Sidebar from './Sidebar.svelte';
</script>

<div class="app">
	<Header />
	<br>
	<sidebarstyle>
		<Sidebar />
	</sidebarstyle>

	<slot></slot>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;		
		}

</style>
