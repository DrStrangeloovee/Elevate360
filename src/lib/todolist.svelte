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
  
  function clearCompleted() {
    todos = todos.filter(todo => !todo.completed);}


  function addTodo(event: CustomEvent<{ text: string; reminder?: string; deadline?: string }>) {
    const newTodo: ITodo = {
      id: generateRandomId(),
      text: event.detail.text,
      completed: false,
      reminder: event.detail.reminder,
      deadline: event.detail.deadline,
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

  function editTodo(id: string, newText: string, reminder?: string, deadline?: string): void {
    let currentTodo = todos.findIndex((todo) => todo.id === id);
    todos[currentTodo].text = newText;
    if (reminder !== undefined) todos[currentTodo].reminder = reminder;
    if (deadline !== undefined) todos[currentTodo].deadline = deadline;
  }
</script>
<main>
  <h1 class="title">To-do</h1>

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
        <button on:click={clearCompleted} class="clear-completed">Clear completed</button>
      </div>
    {/if}
  </section>
</main>

<style>
  .title {
    font-size: 24px;
    padding: 20px;
    text-align: center;
    color: #333;
  }
  .todos {
    width: 400px;
    background-color: #eaf8f4;
    color: #333;
    border-radius: 4px;
    border: 1px solid #ced4da;
    box-shadow: 0 0 4px #b4d4d4;
    margin: 0 auto;
    padding: 20px;
  }
  .todo-list {
    list-style: none;
    padding: 0;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid #ced4da;
  }
  .todo-count {
    font-size: 0.9em;
    color: #6c757d;
  }
  .clear-completed {
    color: #6c757d;
    background: none;
    border: none;
    cursor: pointer;
  }
</style>
