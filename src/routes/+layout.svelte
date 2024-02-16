<script>
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import '../app.pcss';
	import ViewTransition from './navigation.svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import Sidebar from './Sidebar.svelte';
	import SidebarList from './SidebarList.svelte';
	import Statusbar from './Statusbar.svelte';
	import LowerBar from './LowerBar.svelte';
	import Footer from './Footer.svelte';
</script>

<ViewTransition></ViewTransition>
<Header></Header>

<div class="app">
	<Sidebar></Sidebar>
	<SidebarList></SidebarList>

	<div class="main-grid">
		<slot />
	</div>
</div>

<div class="lower-grid">
	<LowerBar></LowerBar>
	<Footer></Footer>
</div>

<style>
	.app {
		display: grid;
		grid-template-columns: 4vh 33vh 1fr;
		grid-template-rows: 80vh;
	}

	.main-grid {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 80vh;
	}

	.lower-grid {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 13vh 3.5vh;
	}
</style>
