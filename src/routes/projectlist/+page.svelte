<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	import '../styles.css';
	

	async function getAvatar(img: string) {
		console.log(img);
		const images = await new URL (`./lib/images/tempdata/${img}.png`) /* @vite-ignore */
		console.log(images);
		return images;
	}

</script>

<svelte:head>
	<title>TPcoded</title>
	<meta name="description" content="TPcoded" />
</svelte:head>

<mainsection>
	<h1mp>Projects</h1mp>
	<about-txt>
		<table class="table-fixed border-separate border-spacing-5">
			<thead>
				<tr>
					<th
						class="max-w-md mx-auto bg-[#1b1b1b] rounded-xl shadow-md overflow-hidden md:max-w-2xl"
						>Project</th
					>
					<th
						class="max-w-md mx-auto bg-[#1b1b1b] rounded-xl shadow-md overflow-hidden md:max-w-2xl"
						>About</th
					>
				</tr>
			</thead>
			<br />
			<tbody>
				{#each data.records as post}
					<tr>
						<td> <h5mp>{post.name}</h5mp></td>
						<td> <h5mp>{post.about_text}</h5mp></td>
						
						<td> <img src="../lib/images/tempdata/{post.image}.png" alt=" " /></td>
						<td><a href={post.url} class="hmplink"> Link </a></td>
					</tr>
				{/each}
			</tbody>
		</table></about-txt
	>

	<date-txt>23.Jan 2024 - Michael</date-txt>
</mainsection>

<style>
</style>
