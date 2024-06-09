<script lang="ts">
  import type { ITodo } from '$root/types/todo';
  import { createEventDispatcher } from 'svelte';
  export let todo: ITodo;
  export let completeTodo: (id: string) => void;
  export let removeTodo: (id: string) => void;
  export let editTodo: (id: string, newTodo: string, reminder?: string, deadline?: string) => void;

  const dispatch = createEventDispatcher();
  let isEditing = false;
  let editedText = todo.text;
  let newReminder = todo.reminder || '';
  let newDeadline = todo.deadline || '';

  function handleComplete() {
    completeTodo(todo.id);
  }

  function handleRemove() {
    removeTodo(todo.id);
  }

  function handleEdit() {
    isEditing = true;
  }

  function saveEdit() {
    editTodo(todo.id, editedText, newReminder, newDeadline);
    isEditing = false;
  }

  function cancelEdit() {
    isEditing = false;
    editedText = todo.text;
    newReminder = todo.reminder || '';
    newDeadline = todo.deadline || '';
  }
</script>

<div class="task-item">
  <div class="task-content">
    <span>{todo.text}</span>
    {#if todo.reminder}
      <div class="reminder">Reminder: {todo.reminder}</div>
    {/if}
    {#if todo.deadline}
      <div class="deadline">Deadline: {todo.deadline}</div>
    {/if}
  </div>
  <div class="action-buttons">
    {#if !isEditing}
      <input type="checkbox" checked={todo.completed} on:change={handleComplete} class="checkbox" />
      <button on:click={handleEdit} class="btn small">Edit</button>
      <button on:click={handleRemove} class="btn cancel small">Delete</button>
    {:else}
      <input type="text" bind:value={editedText} class="input-large" />
      <div class="input-group">
        <label for="edit-reminder">Reminder</label>
        <input id="edit-reminder" type="datetime-local" bind:value={newReminder} class="input-large" />
      </div>
      <div class="input-group">
        <label for="edit-deadline">Deadline</label>
        <input id="edit-deadline" type="datetime-local" bind:value={newDeadline} class="input-large" />
      </div>
      <div class="action-buttons">
        <button on:click={saveEdit} class="btn small">Save</button>
        <button on:click={cancelEdit} class="btn cancel small">Cancel</button>
      </div>
    {/if}
  </div>
</div>

<style>
  .task-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-bottom: 1px solid #ededed;
  }
  .task-content {
    display: flex;
    flex-direction: column;
  }
  .reminder, .deadline {
    font-size: 0.9em;
    color: gray;
  }
  .completed {
    text-decoration: line-through;
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
  .btn.cancel {
    background-color: red;
  }
  .small {
    padding: 5px;
    font-size: 0.8rem;
  }
  .action-buttons {
    display: flex;
    gap: 5px;
    justify-content: flex-end;
  }
  .checkbox {
    margin-right: 10px;
  }
</style>