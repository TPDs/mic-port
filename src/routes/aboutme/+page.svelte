<script>
	import '../styles.css';	
	import avatar from '$lib/images/avatar.png';
</script>

<svelte:head>
	<title>TPcoded</title>
	<meta name="description" content="TPcoded" />
</svelte:head>


<mainsection>
	<h1mp>Who am I</h1mp>
	<avatar-img>
		<img src={avatar} alt="Avatar" />
	</avatar-img>
	<about-txt>
		<br>
		My name is Michael Petersen and I live in Copenhagen Denmark <br
		/>
		I made this site to try and expose some of the areas that I want to learn and show others what I have made, but at the same "It's my playground" for learning a trying new technologies.
		<br /><br /> <br>
		
		My educational background: 
		
		<br /><br />
		2022-2023 &nbsp &nbsp - &nbsp &nbsp
		<a href="https://kompetence.kea.dk/uddannelser/it/diplom-i-it-sikkerhed" target="_blank" rel="noreferrer noopener"
			>Bachelor in It-Security, KEA Guldbergsgade
		</a> <br />
		2019-2022 &nbsp &nbsp - &nbsp &nbsp
		<a href="https://kea.dk/uddannelser/erhvervsakademi/datamatiker" target="_blank" rel="noreferrer noopener">
			Datascience, KEA Lygten
		</a> <br />
		2017-2019 &nbsp &nbsp - &nbsp &nbsp HF, HF-Centret Efterslægten <br />
		<br /><br />
		See my <a href="https://www.linkedin.com/in/michael-petersen0303/" target="_blank" rel="noreferrer noopener" style="text-decoration: underline;">LinkedIn</a> Profile for more information
		<br />
	</about-txt>
	<date-txt>
		4.Mar 2024 - Michael
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
