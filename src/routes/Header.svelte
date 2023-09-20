<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/mp icon.png';	
	import home from '$lib/images/menu/home.png';
	import apps from '$lib/images/menu/apps.png';
	import job from '$lib/images/menu/job.png';
	import user from '$lib/images/menu/user.png';
</script>

<header>
	<div class="mylogo">
		<a href="/">		
			<img  src={logo} alt="home" />
		</a>
	</div>

	<div class="statusbar">		
		<div class="statusbar-row">
			<nav>
				<ul>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a  href="/">
							<img src={home} alt="" />
							News</a>
					</li>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/projectlist">
							<img src={apps} alt="" />Projects</a>
					</li>

				</ul>
			</nav>
		</div>
		<div class="statusbar-row">
			<nav>
				<ul2>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<b>MP code</b> 
					</li>
				</ul2>
			</nav>
		</div>
		<div class="statusbar-row">
			<nav>
				<ul3>			
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/jobpage">
							<img src={job} alt="" />Job</a>
					</li>
					<li aria-current={$page.url.pathname === '/aboutme' ? 'page' : undefined}>
						<a href="/aboutme">
							<img src={user} alt="" />About</a>
					</li>
				</ul3>
			</nav>
		</div>
	</div>
</header>

<style>
	header {
		display: grid;
		grid-template-columns:5em 1fr;
		grid-template-rows:7em;			
		box-shadow: 0em 0.2em;
		background: rgb(19, 17, 17);
		
	}

	.mylogo  {
		grid-column: 1;
		grid-row: 1;		
		position: relative;	
		z-index: 10;
		padding-top: 2em;	
		padding-left: 1em;		
		}
	
	.mylogo img {				
		max-width: 90%;
  		max-height:90%;						
		opacity: 0.7;
		border: 5px solid;
		border-radius: 5px;
		border-color: cvar(--color-text);
		transition: all 2.5;
	
	}
	.mylogo img:hover {							
		opacity: 0.8;	
		border: 5px solid;	
		border-color: cvar(--color-text);		
	}


	.statusbar {
		display: grid;
		justify-self: center;
		grid-template-columns: 2fr 2fr 2fr;	
		grid-row: 1;
		grid-column: 2;
		height: 5em;
		padding-top: 2.5em;
		padding-right: 6em;	
		
	}
	.statusbar-row {				
		text-align: center;
	}


	.statusbar-row  img{				
		height: 60%;
		width: 60%;		
		padding-right: 0.5em;
		padding-bottom: 0.15em;
	}

	nav {
		grid-template-areas: header;
		grid-column: 2;
		grid-row: 1;		
		justify-self: start;		
		border-block-end: solid;
		border-color: rgb(38, 87, 79);
		justify-content: center;
		opacity: 0.8;
		--background: rgb(19, 17, 17);
	}

	ul {
		position: relative;
		height: 2em;
		display: flex;
		justify-content: left;
		align-items: left;
		list-style: none;
		padding-left: 2em;
		background: var(--background);
		background-size: contain;
		
	}

	ul2 {
		position: relative;		
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
		margin: 0;
		height: 2em;
		display: flex;
		justify-content: right;
		align-items: left;
		list-style: none;		
		background: var(--background);
		background-size: contain;
		padding-right: 2em;
	}

	li {
		position: relative;
		height: 100%;
	}


	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;		
	}

	.statusbar-row a:hover {
		color: var(--color-text-hover);
		border-radius: 0.5em;
		background-color: var(--color-box-hover);
		box-shadow: 0em 0em  0.2em;
		text-shadow: -15px 40px 2px var(--color-box-hover);
	}
	nav b {
		display: flex;		
		align-items: center;
		padding: 0 6rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 1em;
		text-decoration: none;
		text-shadow: 0px 40px 2px var(--color-box-hover);
				
	}

</style>
