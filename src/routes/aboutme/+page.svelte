<script>
	import '../styles.css';
	import avatar from '$lib/images/avatar.png';
</script>

<svelte:head>
	<title>MPcoded</title>
	<meta name="description" content="MPcoded" />
</svelte:head>

<br /><br /><br />

<aboutsection>
	<h1>Who am I</h1>
	<avatar-img>
		<img src={avatar} alt="Avatar" />
	</avatar-img>
	<about-txt>
		Im Michael Petersen and im a 36 year old man, living in Cophagen Denmark with a flair for coding and all it wonders. <br
		/>
		I made this site to try and expose some of the areas that I want to learn and show others
		<br /><br />
		
		My Background: 

		<br /><br /><br />
		2022-2023 &nbsp &nbsp - &nbsp &nbsp
		<a href="https://kompetence.kea.dk/uddannelser/it/diplom-i-it-sikkerhed"
			>Bachelor in It-Security, KEA Guldbergsgade
		</a> <br />
		2019-2022 &nbsp &nbsp - &nbsp &nbsp
		<a href="https://kea.dk/uddannelser/erhvervsakademi/datamatiker">
			DataScience, KEA Lygten 16
		</a> <br />
		2017-2019 &nbsp &nbsp - &nbsp &nbsp HF, HF-Centret Efterslægten <br />
		<br /><br />

		**Work in Progress**
	</about-txt>

	<date-txt>
		<h3>5.Sep 2023 - Michael</h3>
	</date-txt>
</aboutsection>

<style>
	aboutsection {
		display: grid;
		grid-template-rows: 50px 450px 250px;
		grid-template-columns: 250px 650px 150px;
		padding-top: 50px;
		border-width: 2px;
		padding: 10px;
		align-self: center;
		border-radius: 1rem;
		height: 650px;
		width: 1200px;
		background: linear-gradient(110deg, rgba(43, 41, 41) 50%, rgba(12, 227, 235, 0.001));
		border-color: #000000;
		border-style: solid;
		box-shadow: 2px 2px #000000;
	}

	avatar-img {
		grid-row-start: 2;
		grid-row-end: 2;
		grid-column-start: 1;
		grid-column-end: 1;
		border-radius: 50%;
		padding-top: 50px;
	}

	about-txt {
		justify-content: center;
		grid-row-start: 2;
		grid-row-end: 2;
		grid-column-start: 2;
		grid-column-end: 2;
		padding-top: 80px;
	}

	date-txt {
		justify-content: left;
		padding-top: 80px;
		grid-row-start: 3;
		grid-row-end: 3;
		grid-column-start: 1;
		grid-column-end: 1;
	}

	a:link,
	a:visited {
		color: rgba(12, 227, 235, 0.7);
		text-decoration: none;
	}
	a:hover,
	a:active {
		background-color: rgba(12, 227, 235, 0.1);
	}
</style>
