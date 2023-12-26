<script>
	import ViewTransition from './navigation.svelte'
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.postcss';
	import Sidebar from './Sidebar.svelte';	
</script>

<div class="app">
	<ViewTransition/>
	<Header />	
	<sidebarstyle>
		<Sidebar />
	</sidebarstyle>
	
	<slot />
</div>

<style>
	.app {
		display: flex;		
		flex-direction: column;		
	}
</style>
