<script>
	import { page } from '$app/stores';
	import home from '$lib/images/menu/home.png';
	import apps from '$lib/images/menu/apps.png';
	import job from '$lib/images/menu/job.png';
	import user from '$lib/images/menu/user.png';
</script>

<meta name="viewport" content="width=device-width, initial-scale=1" />
<header>
	<div class="statusbar">
		<div class="statusbar-row">
			<nav>
				<ul>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/">
							<img src={home} alt="" />
							News</a
						>
					</li>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/projectlist"> <img src={apps} alt="" />Projects</a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="statusbar-row">
			<nav>
				<ul2>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<b>TPcoded</b>
					</li>
				</ul2>
			</nav>
		</div>
		<div class="statusbar-row">
			<nav>
				<ul3>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/jobpage"> <img src={job} alt="" />Job</a>
					</li>
					<li aria-current={$page.url.pathname === '/aboutme' ? 'page' : undefined}>
						<a href="/aboutme"> <img src={user} alt="" />About</a>
					</li>
				</ul3>
			</nav>
		</div>
	</div>
</header>

<style>
	header {
		display: grid;
		width: 80rem;
		align-self: center;
		grid-template-columns: auto;
		grid-template-rows: 4rem;
		background: var(--color-box);
		border-radius: 0.01rem;
	}

	.statusbar {
		display: grid;
		justify-self: center;
		position: relative;
		grid-template-columns: 20rem 20rem 20rem;
		grid-row: 1;
		grid-column: 1;
		padding-top: 1.5rem;		
	}
	.statusbar-row {
		text-align: center;
	}

	.statusbar-row img {
		height: 1.5rem;	
		padding-right: 0.5rem;
		padding-bottom: 0.15rem;
	}

	nav {
		grid-template-areas: header;
		grid-column: 2;
		grid-row: 1;
		justify-self: start;		
		justify-content: center;
		opacity: 0.6;
		--background: var(--color-box);		
	}

	ul {
		position: relative;
		height: 2rem;
		display: flex;
		justify-content: left;
		list-style: none;
	}

	ul2 {
		position: relative;
		margin: 0;
		height: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 4rem;
		list-style: none;
	}

	ul3 {
		position: relative;
		margin: 0;
		height: 2rem;
		display: flex;
		justify-content: right;
		list-style: none;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 1.2rem;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		text-decoration: none;
		transition: color 0.2s linear;
		-webkit-transition: all 0.5s ease-out;
		-moz-transition: all 0.5s ease-out;
		-o-transition: all 0.5s ease-out;
		-ms-transition: all 0.5s ease-out;
		transition: all 0.5s ease-out;
	}

	.statusbar-row a:hover {
		color: var(--color-text-hover);
		border-radius: 0.5em;
		background-color: var(--color-box-hover);
		box-shadow: 0em 0em 0.2em;
		/* text-shadow: -1rem 6rem 0rem var(--color-box-hover); */
	}


	nav b {
		@supports (background-clip: text) or (-webkit-background-clip: text) {
			background-image: url("data:image/svg+xml,%3Csvg width='2250' height='900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath fill='%2300A080' d='M0 0h2255v899H0z'/%3E%3Ccircle cx='366' cy='207' r='366' fill='%2300FDCF'/%3E%3Ccircle cx='177.5' cy='318.5' r='477.5' fill='%2300FDCF'/%3E%3Ccircle cx='1215' cy='737' r='366' fill='%23008060'/%3E%3C/g%3E%3C/svg%3E%0A");
			background-size: 110% auto;
			background-position: center;
			color: var(--color-text);
			opacity: 0.7;
			-webkit-background-clip: text;
			background-clip: text;
			font-size: 3rem;
			font-weight: 700;
			letter-spacing: -0.4rem;
			text-transform: uppercase;
			text-align: center;
			margin: auto;
			white-space: nowrap;
			padding-right: 1rem;
		}
	}

	@media only screen and (max-width: 768px) {
		.statusbar {
			width: 50%;
			grid-template-columns: 1fr 1fr; /* Single column layout for mobile */
			grid-template-rows: auto; /* Allow rows to size based on content */
			justify-content: center; /* Center the content */
			padding: 0rem; /* Adjust padding for spacing on mobile */
			text-align: center; /* Center text in the statusbar */
		}

		.statusbar-row {
			margin: 0.5rem 0; /* Add vertical margin for spacing between rows */
		}

		.statusbar-row img {
			width: 25%; /* Adjust image size for mobile */
			height: auto; /* Allow height to adjust proportionally */
			margin: 0rem; /* Add some margin for spacing */
		}

		nav {
			grid-column: 1; /* Place the navigation below the statusbar */
			grid-row: 2; /* Adjust row placement for navigation */
			border: none; /* Remove the border on mobile */
		}

		nav a {
			display: flex;
			align-items: center;
			color: var(--color-text);
			font-weight: 700;
			font-size: 1rem;
			text-transform: uppercase;
			border: none; /* Remove the border on mobile */
		}

		ul {
			justify-content: center; /* Center the navigation items */
			padding-left: 0; /* Remove left padding */
		}
		li {
			width: 35%;
			height: 50%;
		}

		nav a {
			padding: 0rem 1.5rem 1.5rem 0.5rem; /* Adjust padding for touch-friendly tap areas */
		}

		nav b {
			text-shadow: none; /* Remove text shadow for mobile */
		}
	}
</style>
