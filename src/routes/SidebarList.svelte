<script>
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linked.png';
</script>

<div class="sidebar_list sticky  pt-14">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<details class="collapse bg-base-200">
		<input type="checkbox" class="peer" />
		<summary
			class="collapse-title text-l font-small peer-checked:bg-secondary peer-checked:text-secondary-content"
			>Project 1 <figure>
				<img src={linkedin} height="50px" width="50px" alt="Shoes"/>
			</figure></summary
		>

		<div class="collapse-content text-sm">
			<p>About me</p>
			<p>Link</p>
			<p>Github</p>
		</div>
	</details>
	<details class="collapse bg-base-200">
		<summary class="collapse-title text-l font-small"
			>Project 2 <figure>
				<img
					src={github} height="50px" width="50px"
					alt="Shoes"
				/>
			</figure></summary
		>
		<div class="collapse-content text-sm">
			<p>About me</p>
			<p>Link</p>
			<p>Github</p>
		</div>
	</details>
	<details class="collapse bg-base-200">
		<summary class="collapse-title text-l font-small"
			>Project 3 <figure>
				<img
					src={linkedin} height="50px" width="50px"
					alt="Shoes"
				/>
			</figure></summary
		>
		<div class="collapse-content text-sm">
			<p>About me</p>
			<p>Link</p>
			<p>Github</p>
		</div>
	</details>
</div>

<style>
	.sidebar_list {
		background: var(--color-box-light);
		border: 1px solid #1f1c1c;
		border-radius: 4px;
		position: relative;
	}
</style>
