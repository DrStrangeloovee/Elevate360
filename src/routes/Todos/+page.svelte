<script>
    import { onMount } from 'svelte';
    import Todolist from '$lib/Todos.svelte';
    import PocketBase from 'pocketbase';

    const pb = new PocketBase('http://127.0.0.1:8090');

    let todos = [];

    onMount(async () => {
        try {
            const records = await pb.collection('To_do_list').getFullList();
            todos = records.map(record => ({
                id: record.id,
                text: record.task,
                reminder: record.reminder,
                deadline: record.deadline,
                completed: record.completed
            }));
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    });

    async function addTodo(newTodo) {
        try {
            const record = await pb.collection('To_do_list').create({
                task: newTodo.text,
                reminder: newTodo.reminder,
                deadline: newTodo.deadline,
                completed: newTodo.completed
            });
            todos = [...todos, { id: record.id, ...newTodo }];
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    }

    async function updateTodo(updatedTodo) {
        try {
            await pb.collection('To_do_list').update(updatedTodo.id, {
                task: updatedTodo.text,
                reminder: updatedTodo.reminder,
                deadline: updatedTodo.deadline,
                completed: updatedTodo.completed
            });
            todos = todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    }

    async function deleteTodo(id) {
        try {
            await pb.collection('To_do_list').delete(id);
            todos = todos.filter(todo => todo.id !== id);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    }
</script>

<Todolist {todos} on:addTodo={addTodo} on:updateTodo={updateTodo} on:deleteTodo={deleteTodo} />
