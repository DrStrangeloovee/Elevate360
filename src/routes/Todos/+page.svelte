<script>
    import { onMount } from 'svelte';
    import Todolist from '$lib/Todos.svelte';
    import PocketBase from 'pocketbase';

    const pb = new PocketBase('http://127.0.0.1:8090'); 

    let todos = [];

    onMount(async () => {
        try {
            const records = await pb.collection('todos').getFullList();
            todos = records.map(record => ({
                id: record.id,
                task: record.task,
                reminder: record.reminder,
                deadline: record.deadline
            }));
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    });

    async function addTodo(newTodo) {
        try {
            const record = await pb.collection('todos').create({
                task: newTodo.task,
                reminder: newTodo.reminder,
                deadline: newTodo.deadline
            });
            todos = [...todos, { id: record.id, ...newTodo }];
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    }

    async function updateTodo(updatedTodo) {
        try {
            await pb.collection('todos').update(updatedTodo.id, updatedTodo);
            todos = todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    }

    async function deleteTodo(id) {
        try {
            await pb.collection('todos').delete(id);
            todos = todos.filter(todo => todo.id !== id);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    }
</script>

<Todolist {todos} on:addTodo={addTodo} on:updateTodo={updateTodo} on:deleteTodo={deleteTodo} />
