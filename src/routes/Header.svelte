<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/mp icon.png';
</script>

<header>
	<div class="logo">
		<a href="/">
			<img src={logo} alt="home" />
		</a>
	</div>

	<div class="statusbar">		
		<div class="statusbar-row">
			<nav>
				<ul>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/">News</a>
					</li>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/projectlist">Projects</a>
					</li>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/jobpage">Job</a>
					</li>
					<li aria-current={$page.url.pathname === '/aboutme' ? 'page' : undefined}>
						<a href="/aboutme">About</a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="statusbar-row">
			<nav>
				<ul2>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<b>'MP code site'</b>
					</li>
				</ul2>
			</nav>
		</div>
		<div class="statusbar-row">
			<nav>
				<ul3>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<c>_</c>
					</li>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<c>[]</c>
					</li>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<c>X</c>
					</li>
				</ul3>
			</nav>
		</div>
	</div>
</header>

<style>
	header {
		display: grid;
		grid-template-columns:150px 1fr;
		grid-template-rows: auto;
		height: 80px;	
		box-shadow: 1px 1px;
		background: rgb(19, 17, 17);
		padding-right: 150px;	
	}

	.logo  {
		grid-column: 1;
		grid-row: 1;				
		justify-self: center;	
		padding-top: 15px;
		padding-left: 10px;	
		}

	.logo img {		
		max-width: 67%;
		max-height: 67%;
		opacity: 0.7;		
		border-style: solid;
		border-color: rgba(12, 227, 235, 0.7);		
	}
	.logo img:hover {	
		max-width: 67%;
		max-height: 67%;		
		border-style: solid;
		opacity: 0.6;		
		border-color: rgba(12, 227, 235, 0.6);		
	}


	.statusbar {
		display: grid;
		justify-self: center;
		grid-template-columns: repeat(3, 2fr);	
		grid-row: 1;
		grid-column: 2;
		height: 60px;
		padding-top: 25px;
		
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
		padding-right: 0em;
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

	.statusbar-row a:hover {
		color: var(--color-text-hover);
		box-shadow: 0px 0px 2px;
	}
	nav b {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 2.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 1.0rem;
		text-transform: uppercase;
		letter-spacing: 0.8em;
		text-decoration: none;
		
	}
	nav c {
		display: flex;
		height: 100%;
		align-items: center;				
		color: var(--color-text);
		font-weight: 700;
		font-size: 1.0rem;
		text-transform: uppercase;
		letter-spacing: 1.2em;
		text-decoration: none;	
		
	}

</style>
