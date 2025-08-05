<script lang="ts"> 
  import { testing1, testing2 } from "$lib/testing/query.remote";

  let length = $state(10)

  let testTest1 = $derived(await testing1(length))
  let testTest2 = $derived(await testing1(length))
</script>

<div class="p-2 border-1">
  <div class="flex flex-col gap-2">
    <h1>Page</h1>
    <div>
      <button class="size-10 border-1" onclick={() => length--}>-</button>
      <button class="size-10 border-1" onclick={() => length++}>+</button>
    </div>
    <p>Length: {length}</p>

    <div class="flex flex-col">
      <div class="flex gap-2">
        <p>values in 1:</p>
        {#each testTest1 as value (value)}
          <p>{value}</p>
        {/each}
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex gap-2">
        <p>values in 2:</p>
        {#each testTest2 as value (value)}
          <p>{value}</p>
        {/each}
      </div>
    </div>
  </div>
</div>

<div class="prose">
  <p>
    Exactly the same as Case 3, but without $effect.derived()
  </p>
</div>