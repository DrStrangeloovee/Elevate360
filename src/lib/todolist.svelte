<script lang="ts">
  import type { ITodo } from '$root/types/todo';
  import AddTodo from './AddTodo.svelte';
  import Todo from './Todo.svelte';

  let todos: ITodo[] = [
    { id: '1e4a59703af84', text: 'Todo 1', completed: true },
    { id: '9e09bcd7b9349', text: 'Todo 2', completed: false },
    { id: '9e4273a51a37c', text: 'Todo 3', completed: false },
    { id: '53ae48bf605cc', text: 'Todo 4', completed: false },
  ];

  $: todosAmount = todos.length;

  function generateRandomId(): string {
    return Math.random().toString(16).slice(2);
  }

  function addTodo(event: CustomEvent<string>) {
    const newTodo: ITodo = {
      id: generateRandomId(),
      text: event.detail,
      completed: false,
    };
    todos = [...todos, newTodo];
  }

  function completeTodo(id: string): void {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }

  function removeTodo(id: string): void {
    todos = todos.filter((todo) => todo.id !== id);
  }

  function editTodo(id: string, newTodo: string): void {
    let currentTodo = todos.findIndex((todo) => todo.id === id);
    todos[currentTodo].text = newTodo;
  }
</script>

<main>
  <h1 class="title">To-do's</h1>

  <section class="todos">
    <AddTodo on:addTodo={addTodo} />

    {#if todosAmount}
      <ul class="todo-list">
        {#each todos as todo (todo.id)}
          <Todo {todo} {completeTodo} {removeTodo} {editTodo} />
        {/each}
      </ul>

      <div class="actions">
        <span class="todo-count">{todos.filter(todo => !todo.completed).length} left</span>
        <div class="filters">
          <button class="filter">All</button>
          <button class="filter">Active</button>
          <button class="filter">Completed</button>
        </div>
        <button class="clear-completed">Clear completed</button>
      </div>
    {/if}
  </section>
</main>

