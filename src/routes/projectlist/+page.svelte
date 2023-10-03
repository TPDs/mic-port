<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
	import '../styles.css';		
</script>

<svelte:head>
	<title>MPcoded</title>
	<meta name="description" content="MPcoded" />
</svelte:head>


<mainsection>
	<h1mp>Projects</h1mp>
	<about-txt>	<ul>
		{#each data.data as post}
			<li>
				<a href="{post.link}">
					{post.readme}
				</a>
			</li>
		{/each}
	</ul></about-txt>


	<date-txt>10.Sep 2023 - Michael</date-txt>
</mainsection>

<style>



</style>
