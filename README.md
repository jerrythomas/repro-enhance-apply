# Reproduction of an issue with ApplyAction

The following error occurs when a `ApplyAction` is used to make a post request to an endpoint that redirects to some other page.

```text
500
Unexpected token '<', "<!DOCTYPE "... is not valid JSON
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
    at JSON.parse (<anonymous>)
    at deserialize (http://localhost:5173/node_modules/.pnpm/@sveltejs+kit@1.0.0-next.571_svelte@3.53.1+vite@3.2.4/node_modules/@sveltejs/kit/src/runtime/app/forms.js?v=5b196e18:21:22)
    at HTMLFormElement.handle_submit (http://localhost:5173/node_modules/.pnpm/@sveltejs+kit@1.0.0-next.571_svelte@3.53.1+vite@3.2.4/node_modules/@sveltejs/kit/src/runtime/app/forms.js?v=5b196e18:106:13)
```

To test it out, clone the repo and start the app. click on all the buttons in the page. Notice that the last button click causes the error.
