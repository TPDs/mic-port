<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	import '../styles.css';
	import template from '$lib/images/icon/lakefs.png';
	console.log(data.records);
</script>

<svelte:head>
	<title>TPcoded</title>
	<meta name="description" content="TPcoded" />
</svelte:head>
<mainsection>
	<content-txt>
		<h class="h4mp">LakeFs & Lambda</h>
		<p>
			Time to try and make some data move with a local LakeFS server and AWS Lambda. <br />
			This would just be to prove a concept and see if it is possible to make a data lake that can send
			my server data to AWS, do some minor ETL and load it back here <br />
		</p>
		<br />
		<div class="overflow-x-auto">
			<table class="table table-xs">
				<thead>
					<tr class="text-left">
						<th>Ip</th>
						<th>Country</th>
						<th>Payload</th>
						<th>Timestamp</th>
						<th>CVE</th>
					</tr>
				</thead>
				<tbody
					>{#each data.records as post}
						<tr
							class="class:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-transparent"
						>
							<td>{post.ip}</td>
							<td>{post.country}</td>
							<td>{post.payload}</td>
							<td>{post.Timestamp}</td>
							<td>{post.CVE}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<br />

		**CVE - Common Vulnerabilities and Exposures is a work in progress
	</content-txt>
	<date-txt>21.Mar 2024 - Michael</date-txt>
</mainsection>
