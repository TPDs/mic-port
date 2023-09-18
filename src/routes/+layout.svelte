<script>
	import Header from './Header.svelte';
	import './styles.css';
	import Sidebar from './Sidebar.svelte';
</script>

<div class="app">
	<Header />
	<sidebarstyle>
		<Sidebar />
	</sidebarstyle>

	<slot></slot>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		}

</style>
