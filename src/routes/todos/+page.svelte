<script>
    import { onMount } from 'svelte';
    import Todolist from '$lib/Todos.svelte';
    let todos = [];

    onMount(async () => {
        const response = await fetch('/api/todos');
        todos = await response.json();
    });

    async function addTodo(newTodo) {
        const response = await fetch('/api/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo)
        });
        const createdTodo = await response.json();
        todos = [...todos, createdTodo];
    }

    async function updateTodo(updatedTodo) {
        await fetch(`/api/todos/${updatedTodo.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTodo)
        });
        todos = todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));
    }

    async function deleteTodo(id) {
        await fetch(`/api/todos/${id}`, { method: 'DELETE' });
        todos = todos.filter((todo) => todo.id !== id);
    }
</script>

<Todolist {todos} on:addTodo={addTodo} on:updateTodo={updateTodo} on:deleteTodo={deleteTodo} />

<footer>
    <p>&copy; 2024</p>
</footer>
