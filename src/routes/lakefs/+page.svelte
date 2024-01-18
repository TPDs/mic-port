<script lang="ts">
	import type { PageData } from './$types';
	import '../styles.css';
	import template from '$lib/images/templates/lakefs.png';
	import template2 from '$lib/images/templates/Lambda.png';
	export let data: PageData;
</script>

<svelte:head>
	<title>TPcoded</title>
	<meta name="description" content="TPcoded" />
</svelte:head>
<mainsection>
	<h1mp>LakeFs</h1mp>
	<avatar-img>
		<img src={template} alt="Avatar" />
		<img src={template2} alt="Avatar" />
	</avatar-img>
	<about-txt>
		<b>LakeFs</b> <br /> <br />

		<p>
			<br />Time to try and make some data move with a local LakeFS server and AWS Lambda. <br />
			This would just be to prove a concept and see if it is possible to make a data lake that can send
			my server data to AWS, do some minor ETL and load it back here <br />
		</p>
		<br/>
		<h2>****Template****</h2>
		<br>

		<table class="table-auto w-full">
			<thead class="uppercase tracking-wide text-base text-indigo-500 font-semibold text-left">
				<tr>
					<th class="px-4 py-2">Server</th>
					<th class="px-4 py-2">Log data</th>
					<th class="px-4 py-2">Time</th>
					<th class="px-4 py-2">Download</th>
				</tr>
			</thead>
			<tbody class="text-slate-600">
				<tr>
					<td class="px-4 py-2">Raspberry Pi5</td>
					<td class="px-4 py-2">Server log</td>
					<td class="px-4 py-2">15.Jan-2024</td>
					<td class="px-4 py-2 font-semibold underline">Link</td>
				</tr>
				<tr>
					<td class="px-4 py-2">Raspberry Pi4</td>
					<td class="px-4 py-2">SSH log</td>
					<td class="px-4 py-2">17.Jan-2024</td>
					<td class="px-4 py-2 font-semibold underline">Link</td>
				</tr>
				<tr>
					<td class="px-4 py-2">Raspberry Pi5</td>
					<td class="px-4 py-2">Sys log</td>
					<td class="px-4 py-2">15.Jan-2024</td>
					<td class="px-4 py-2 font-semibold underline">Link</td>
				</tr>
			</tbody>
		</table>

	</about-txt>
	<date-txt>18.Jan 2024 - Michael</date-txt>
</mainsection>

