<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex p-2 flex-col">
	<svelte:boundary>
		{#snippet pending()}
			<p>Loading in pending snippet...</p>
		{/snippet}
		<nav class="flex">
			<a class="block p-2 hover:bg-neutral-200" href="/">Home</a>
			<a class="block p-2 hover:bg-neutral-200" href="/1">Case 1</a>
			<a class="block p-2 hover:bg-neutral-200" href="/2">Case 2</a>
			<a class="block p-2 hover:bg-neutral-200" href="/3">Case 3</a>
			<a class="block p-2 hover:bg-neutral-200" href="/4">Case 4</a>
		</nav>
		<div class="p-2">
			{@render children?.()}
		</div>
	</svelte:boundary>
</div>
