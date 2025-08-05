<script lang="ts"> 
  import { testing1, testing2 } from "$lib/testing/query.remote";
  import Component from "./Component.svelte";

  const length = 10

  let testTest1 = $derived(await testing1(length))
</script>

<div class="flex flex-col gap-2">
  <div class="p-2 border-1">
    <h1>Page</h1>
    <p>Length: {length}</p>
    <p>
      Value of $effect.pending(): <span class="font-bold">{$effect.pending()}</span>
    </p>

    <div class="flex flex-col">
      <div class="flex gap-2">
        <p>values:</p>
        {#each testTest1 as value (value)}
          <p>{value}</p>
        {/each}
      </div>
    </div>
  </div>

  <Component />
  {#if $effect.pending()}
    <span class="font-bold">$effect.pending() is &gt; 1 on page</span>
  {/if}
</div>

<div class="prose">
  <h2>Findings</h2>
  <ul>
    <li>
      $effect.pending() is stuck at 1 after initial load.
    </li>
    <li>
      Any {@html "{#if}...{/if}"}-blocks which reads $effect.pending() will be stuck.
    </li>
    <li>
      Navigating away and back to this page increments $effect.pending().
    </li>
    <li>
      Navigating to this page from itself (by clicking Case 1) sets $effect.pending() to 0. But only after the initial load. If this page is navigated to from another page, clicking the link again does nothing.
    </li>
    <li>
      The &lt;Component /&gt; renders when this page is loaded, but not when this page is navigated to.
    </li>
  </ul>
</div>