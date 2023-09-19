<script>
	import '../styles.css';	
	import avatar from '$lib/images/avatar.png';
</script>

<svelte:head>
	<title>MPcoded</title>
	<meta name="description" content="MPcoded" />
</svelte:head>

<br /><br /><br />

<mainsection>
	<h1>Who am I</h1>
	<avatar-img>
		<img src={avatar} alt="Avatar" />
	</avatar-img>
	<about-txt>
		My name is Michael Petersen and im a 36 year old man living in Copenhagen Denmark, with a flair for coding and all it wonders. <br
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
			Datascience, KEA Lygten
		</a> <br />
		2017-2019 &nbsp &nbsp - &nbsp &nbsp HF, HF-Centret Efterslægten <br />
		<br /><br />

		**Work in Progress**
	</about-txt>

	<date-txt>
		<h3>5.Sep 2023 - Michael</h3>
	</date-txt>
</mainsection>

<style>
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
