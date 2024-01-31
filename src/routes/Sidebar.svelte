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
		grid-template-columns: 2em;	        
		padding-top: 5em;	
		
	}

	.sidebar {
		grid-column: 1;
		grid-row: 2;
		padding-top: 15em;
		width: 2.2em;  /* Styre size af icons */

		
		
	}
	.sidebar a {
		position: relative;
		left: 0;
		top: 0;
		align-items: center;
		justify-content: center;		
		padding-left: 0.1em;	
		
	}

	.sidebar img {		
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
		filter: invert(100%);
		object-fit: contain;		
		color: rgba(243, 28, 20, 0.7); 		
	}
</style>
