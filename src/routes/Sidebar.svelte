<script>
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linked.png';
</script>

<div class="sidebar sticky">
	<a href="https://github.com/TPDs">
		<img src={github} alt="GitHub" />
	</a>
	<a href="https://www.linkedin.com/in/michael-petersen0303/">
		<img src={linkedin} alt="LinkedIn" />
	</a>
</div>

<style>
	.sidebar {
		background: var(--color-box-light);
		border: 1px solid #1f1c1c;
		border-radius: 4px;	
		width: 100%;
		height: 100%;
		margin-right: 0;
		padding-top: 7em;
		position: relative;
	}


	.sidebar img {
		padding-top: 5em;
		width: 2rem;
		filter: invert(60%);
		object-fit: contain;
		transition: color 0.5s linear;
		-webkit-transition: all 0.5s ease-out;
		-moz-transition: all 0.5s ease-out;
		-o-transition: all 0.5s ease-out;
		-ms-transition: all 0.5s ease-out;
		transition: all 0.5s ease-out;
	}
	.sidebar img:hover {
		width: 2rem;
		filter: invert(100%);
		object-fit: contain;
		color: rgba(243, 28, 20, 0.7);
	}
</style>
