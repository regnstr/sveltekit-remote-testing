<script lang="ts"> 
  import { testing1, testing2 } from "$lib/testing/query.remote";

  let length = $state(10)

  let testTest2 = $derived(await testing2(length))
</script>

<div class="p-2 border-1">
  <div class="flex flex-col gap-2">
    <h1>Component</h1>
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
        {#each testTest2 as value (value)}
          <p>{value}</p>
        {/each}
      </div>
    </div>
  </div>
  {#if $effect.pending()}
    <span class="font-bold">$effect.pending() is &gt; 1 in Component</span>
  {/if}
</div>