<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;	
	import '../styles.css';	
</script>

<svelte:head>
	<title>MPcoded</title>
	<meta name="description" content="MPcoded" />
</svelte:head>

<mainsection>
	<h1mp>Projects</h1mp>
	<about-txt>
		<ul>
			{#each data.records as post}
				<li> <a href={post.url}> Link </a>
					{post.name}
					{post.about_text}  
				</li>
			{/each}
		</ul></about-txt
	>

	<date-txt>10.Sep 2023 - Michael</date-txt>
</mainsection>

<style>
</style>
