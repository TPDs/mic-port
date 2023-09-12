<script>
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linked.png';
</script>

<container>
	<div class="sidebar">
		<a href="https://github.com/TPDs">
			<img src={github} alt="GitHub" />
		</a>
		<a href="https://www.linkedin.com/in/michael-petersen0303/">
			<img src={linkedin} alt="LinkedIn" />
		</a>
	</div>
</container>

<style>
	container {
		display: grid;
		grid-template-columns: 50px;	
        width: 45px;
		padding-top: 85px;	
		
	}

	.sidebar {
		grid-column: 1;
		grid-row: 2;
		padding-top: 20em;
		width: 3em;
		
		
	}
	.sidebar a {
		position: relative;
		left: 0;
		top: 0;
		align-items: center;
		justify-content: center;		
		padding-left: 0.1em;
		padding-top: 0.1em;
		
	}

	.sidebar img {
		width: 2em;
		height: 3em;
		filter: invert(60%);
		object-fit: contain;
	}
	.sidebar img:hover {
		filter: invert(100%);
		object-fit: contain;
		box-shadow: 0px 1px;
		color: rgba(243, 28, 20, 0.7); 
	}
</style>
