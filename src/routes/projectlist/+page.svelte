<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	import '../styles.css';
	import database from '$lib/images/icon/database.png';
	import lakefs from '$lib/images/icon/lakefs.png';
	import spotify from '$lib/images/icon/spotify.png';
	import lambda from '$lib/images/icon/lambda.png';

	const imageMap: { [key: string]: string } = {
		database: database,
		lakefs: lakefs,
		spotify: spotify,
		lambda: lambda
	};

</script>

<svelte:head>
	<title>TPcoded</title>
	<meta name="description" content="TPcoded" />
</svelte:head>

<mainsection>
	<h1mp>Projects</h1mp>
	<content-txt>
		<div class="overflow-x-auto">
			<table class="table table-xs">
				<thead>
					<tr class="text-left">
						<th>Name</th>
						<th>About</th>
						<th>Updated</th>
						<th>Link</th>
						<th>Git</th>
					</tr>
				</thead>				
				<tbody
					>{#each data.records as post}
						<tr
							class="class:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-transparent">
							<td>{post.name}</td>
							<td>{post.about_text}</td>
							<td>{post.updated}</td>
							<td><a class="link link-accent" href={post.url}> Link </a></td>
							<td><a class="link link-accent" href={post.url}> Readme </a></td>							
						</tr>				
					{/each}
				</tbody>
			</table>
		</div>
	</content-txt>
	<date-txt>23.Jan 2024 - Michael</date-txt>
</mainsection>

<style>


</style>
