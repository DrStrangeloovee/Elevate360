<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let newTodo = '';
  let reminder = '';
  let deadline = '';

  function handleAddTodo() {
    if (newTodo.trim()) {
      dispatch('addTodo', { text: newTodo, reminder, deadline });
      newTodo = '';
      reminder = '';
      deadline = '';
    }
  }
</script>

<div class="add-todo">
  <input type="text" bind:value={newTodo} placeholder="Add a new task..." class="input-large" />
  <div class="input-group">
    <label for="reminder">Reminder</label>
    <input id="reminder" type="datetime-local" bind:value={reminder} class="input-large" />
  </div>
  <div class="input-group">
    <label for="deadline">Deadline</label>
    <input id="deadline" type="datetime-local" bind:value={deadline} class="input-large" />
  </div>
  <button on:click={handleAddTodo} class="btn">Add Task</button>
</div>

<style>
  .add-todo {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .input-large {
    width: 100%;
    padding: 10px;
    font-size: 1.1rem;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .btn {
    padding: 10px;
    font-size: 1.1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>
