<script>
	import { applyAction, enhance } from '$app/forms';

	/** @type {import ($app/forms).SubmitFunction}*/
	const action = async () => {
		return async ({ result }) => {
			applyAction(result);
		};
	};
</script>

<b>Both the endpoint and action redirect to home page.</b>
<main>
	<div>
		<p>Vanilla post</p>
		<form method="post" action="/form">
			<button>Using Page Action</button>
		</form>
		<form method="post" action="/api">
			<button>Using Endpoint</button>
		</form>
	</div>
	<div>
		<p>Enhanced using ApplyAction</p>
		<form method="post" action="/form" use:enhance={action}>
			<button>Using Page action</button>
		</form>

		<form method="post" action="/api" use:enhance={action}>
			<button>Using Endpoint</button>
		</form>
	</div>
</main>

<p>Using ApplyAction on a post call to an endpoint that redirects causes the following error</p>
<pre>
	500
Unexpected token '&lt;', "&lt;!DOCTYPE "... is not valid JSON
SyntaxError: Unexpected token '&lt;', "&lt;!DOCTYPE "... is not valid JSON
    at JSON.parse (<anonymous
		>)
    at deserialize (http://localhost:5173/node_modules/.pnpm/@sveltejs+kit@1.0.0-next.571_svelte@3.53.1+vite@3.2.4/node_modules/@sveltejs/kit/src/runtime/app/forms.js?v=07a48e8a:21:22)
    at HTMLFormElement.handle_submit (http://localhost:5173/node_modules/.pnpm/@sveltejs+kit@1.0.0-next.571_svelte@3.53.1+vite@3.2.4/node_modules/@sveltejs/kit/src/runtime/app/forms.js?v=07a48e8a:106:13)
</anonymous></pre>

<style>
	main {
		display: flex;
		flex-direction: row;
		column-gap: 1em;
	}

	main {
		margin-top: 1em;
	}
	form {
		width: 200px;
	}
	div {
		border: 1px solid black;
		padding: 1em;
	}
	div,
	form,
	button {
		display: flex;
		flex-direction: column;
		row-gap: 1em;
	}
	pre {
		background-color: #eeeeee;
		padding: 1em;
		border-radius: 1mm;
		border: 1px solid #cccccc;
	}
</style>
