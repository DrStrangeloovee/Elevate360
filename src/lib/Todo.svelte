<script lang="ts">
  import type { ITodo } from '$root/types/todo';
  import { createEventDispatcher } from 'svelte';
  export let todo: ITodo;
  export let completeTodo: (id: string) => void;
  export let removeTodo: (id: string) => void;
  export let editTodo: (id: string, newTodo: string) => void;
  const dispatch = createEventDispatcher();
  let isEditing = false;
  let editedText = todo.text;

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
    editTodo(todo.id, editedText);
    isEditing = false;
  }

  function cancelEdit() {
    isEditing = false;
    editedText = todo.text;
  }
</script>

<div class="task-item">
  {#if isEditing}
    <input type="text" bind:value={editedText} />
    <button on:click={saveEdit}>Save</button>
    <button on:click={cancelEdit}>Cancel</button>
  {:else}
    <input type="checkbox" checked={todo.completed} on:change={handleComplete} />
    <span>{todo.text}</span>
    <button on:click={handleEdit}>Edit</button>
    <button on:click={handleRemove}>Delete</button>
  {/if}
</div>

