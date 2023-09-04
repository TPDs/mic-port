<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/mp icon.png';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linked.png';
</script>

<header>
	<div class="logo">
		<a href="https://github.com/TPDs">
			<img src={logo} alt="GitHub" />
		</a>
	</div>

	<div class="statusbar">		
		<div class="statusbar-row">
			<nav>
				<ul>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/">File</a>
					</li>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/">Edit</a>
					</li>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/">Job</a>
					</li>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/">About me</a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="statusbar-row">
			<nav>
				<ul2>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a>'MP code site'</a>
					</li>
				</ul2>
			</nav>
		</div>
		<div class="statusbar-row">
			<nav>
				<ul3>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a>_ [] X</a>
					</li>
				</ul3>
			</nav>
		</div>
	</div>
</header>

<style>
	header {
		display: grid;
		grid-template-columns:45px 1fr;
		grid-template-rows: auto;		
	}

	.logo  {
		grid-column: 1;
		grid-row: 1;
		background-color: rgb(19, 17, 17);
		opacity: 0.8;
		width: 3em;
		height: 2em;
		justify-self: center;
		border: 1cap;
		border-block-end: solid;
		border-color: rgb(38, 87, 79);
		}

	.logo img {
		justify-self: center;
		max-width: 90%;
		max-height: 90%;
		padding-left: 5px;
		padding-top: 2px;		
	}

	.statusbar {
		display: grid;
		grid-template-columns: repeat(3, 2fr);	
		grid-row: 1;
		grid-column: 2;
	}
	.statusbar-row {				
		text-align: center;
	}

	nav {
		grid-template-areas: header;
		grid-column: 2;
		grid-row: 1;
		background-color: white;
		justify-self: start;
		border: 1cap;
		border-block-end: solid;
		border-color: rgb(38, 87, 79);
		justify-content: left;
		opacity: 0.8;
		--background: rgb(19, 17, 17);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 2em;
		display: flex;
		justify-content: left;
		align-items: left;
		list-style: none;
		padding-left: 1em;
		background: var(--background);
		background-size: contain;
	}

	ul2 {
		position: relative;
		padding: 0;
		margin: 0;
		height: 2em;
		display: flex;
		justify-content: center;
		align-items: left;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}
	ul3 {
		position: relative;
		padding: 0;
		margin: 0;
		height: 2em;
		display: flex;
		justify-content: right;
		align-items: left;
		list-style: none;
		padding-right: 3em;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
