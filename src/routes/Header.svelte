<script>
	import { page } from '$app/stores';
	import home from '$lib/images/menu/home.png';
	import apps from '$lib/images/menu/apps.png';
	import job from '$lib/images/menu/job.png';
	import user from '$lib/images/menu/user.png';
	import logo from '$lib/images/menu/logo2.png';
	const TPcoded = '{TPcoded}';
</script>

<meta name="viewport" content="width=device-width, initial-scale=1" />

<header class="sticky">
	<div class="statusbar-icon">
		<img src={logo} alt="" />
	</div>
	<div class="statusbar-left">
		<nav>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/"> <menubar>News</menubar> </a>
				</li>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/Projects"> <menubar>Projects</menubar> </a>
				</li>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/job"> <menubar>Job</menubar> </a>
				</li>
				<li aria-current={$page.url.pathname === '/aboutme' ? 'page' : undefined}>
					<a href="/about"> <menubar>About</menubar> </a>
				</li>
				<li aria-current={$page.url.pathname === '/aboutme' ? 'page' : undefined}>
					<menubar>Whois</menubar>
				</li>
				<li aria-current={$page.url.pathname === '/aboutme' ? 'page' : undefined}>
					<menubar>Help</menubar>
				</li>
			</ul>
		</nav>
	</div>
<!-- 	<div class="statusbar-mid">
		<p>Mid</p>
	</div> -->
	<div class="statusbar-right">
		<nav>
			<img src={home} alt="404" />
			<img src={apps} alt="404" />
			<img src={job} alt="404" />
			<img src={user} alt="404" />
		</nav>
	</div>
</header>

<style>
	header {
		display: grid;
		width: 100%;
		align-self: center;
		grid-template-columns: 1fr 5fr 5fr 5fr;
		grid-template-rows: 2rem;
		background: var(--color-box-light);
		border: 1px solid #1f1c1c;
		border-radius: 4px;
		z-index: 100;
		grid-template-areas: 'header_icon header_left header_mid header_right';
	}

	.statusbar-icon {
		grid-area: header_icon;
		justify-self: center;
		position: relative;
		width: 100%;
		padding-left: 1rem;
		padding-top: 0.5rem;
	}

	.statusbar-icon img {
		border: 1px solid #000000;
		border-radius: 4px;
		width: 150px;
	}

	.statusbar-left {
		grid-area: header_left;
		justify-self: center;
		position: relative;
		width: 100%;
		padding-left: 1rem;
	}

	.statusbar-mid {
		grid-area: header_mid;
		justify-self: center;
		align-self: center;
		border: 1px solid #a8a1a1;
		border-radius: 4px;
		width: 100%;
		height: 70%;
		box-shadow: 0em 0em 0.1em #000000;
	}

	.statusbar-mid p {
		font-family: Consolas, 'Courier New', monospace;
		color: var(--color-text);
		font-weight: 800;
		font-size: 1rem;
		opacity: 0.6;
		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 0.1em;
		padding-bottom: 10rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.statusbar-right {
		grid-area: header_right;
		justify-self: center;
		position: relative;
		width: 100%;
	}

	.statusbar-right nav {
		display: flex; 
		flex-direction: row; 
		justify-content: flex-end;		
		align-items: center;
		 
	}
	.statusbar-right img {
		grid-area: header_right;
		padding: 0.5rem;			
		width:5.5%;
		margin-right: 0.5rem;
	}

	.statusbar-left menubar:hover {
		color: var(--color-text-hover);
		border-radius: 0.5em;
		background-color: var(--color-box-hover);
		box-shadow: 0em 0em 0.2em;
	}

	nav {
		grid-template-areas: header;
		grid-column: 1;
		grid-row: 1;
		justify-self: start;
		justify-content: left;
		opacity: 0.6;
		--background: var(--color-box-light);
	}

	ul {
		position: relative;
		height: 1rem;
		padding-top: 1rem;
		padding-left: 1rem;
		display: flex;
		justify-content: left;
		list-style: none;
	}
</style>
