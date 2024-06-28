<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let newTodo = '';

  function handleAddTodo() {
    if (newTodo.trim()) {
      dispatch('addTodo', newTodo);
      newTodo = '';
    }
  }
</script>

<div>
  <input type="text" bind:value={newTodo} placeholder="Add a new task..." />
  <button on:click={handleAddTodo}>Add Task</button>
</div>


