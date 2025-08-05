<script lang="ts"> 
  import { testing1, testing2 } from "$lib/testing/query.remote";
  import Component from "./Component.svelte";

  let length = $state(10)

  let testTest1 = $derived(await testing1(length))
</script>

<div class="p-2 border-1">
  <div class="flex flex-col gap-2">
    <h1>Page</h1>
    <div>
      <button class="size-10 border-1" onclick={() => length--}>-</button>
      <button class="size-10 border-1" onclick={() => length++}>+</button>
    </div>
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
  <p>
    In this case, the $effect.pending() is stuck at 1 after initial load. Pressing any + or - button seems to clear it.
  </p>
  <p>
    Except for the initial "stuckness", this example is working as expected.
  </p>
</div>