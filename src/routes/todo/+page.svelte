<script>
    import PocketBase from 'pocketbase';
    import { onMount } from 'svelte';
    import { user, todos } from '../../store';

    // Instantiate PocketBase client
    const pb = new PocketBase('http://127.0.0.1:8090');

    let title = '';
    let description = '';

    // Load todos from PocketBase
    async function loadTodos() {
        if (!$user) return;

        try {
            // Load todos that belong to the user
            const userTodosResponse = await pb.collection('todos').getList();

            const userTodos = userTodosResponse.items.filter(todo => todo.userId.includes($user.id) || todo.sharedWith.includes($user.id));
            todos.set(userTodos)

        } catch (error) {
            console.error('Failed to load todos:', error);
        }
    }

    // Add a new todo to PocketBase
    async function addTodo() {
        if (!$user) return;

        try {
            await pb.collection('todos').create({
                title: title,
                description: description,
                userId: [$user.id], // Wrap the user ID in an array
                sharedWith: [], // Initialize sharedWith array
                complete: false
            });
            await loadTodos();  // Reload todos to reflect the new entry
        } catch (error) {
            console.error('Failed to add todo:', error);
        }
    }

    // Share a todo with the specified user IDs
    async function shareTodo(todoId, sharedWith) {
        try {
            await pb.collection('todos').update(todoId, { sharedWith: sharedWith });
            await loadTodos();
        } catch (error) {
            console.error('Failed to share todo: please check that the shared id is correct', error);
        }
    }

    // Delete a todo item
    async function deleteTodo(todoId) {
        let todo = $todos.find(t => t.id === todoId);

        if (!todo || !todo.userId.includes($user.id)) {
            console.error('You do not have permission to delete this todo.');
            return;
        }

        try {
            await pb.collection('todos').delete(todoId);
            await loadTodos();
        } catch (error) {
            console.error('Failed to delete todo:', error);
        }
    }

    // Call loadTodos on component mount if the user is already logged in
    onMount(() => {
        if (!!$user) {
            loadTodos();
        } else {
            window.location.href = '/login';
        }
    });
</script>

<!-- Todo input and list styled with Bootstrap -->
<div class="container">
    <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" bind:value={title} class="form-control" id="title" placeholder="Title">
    </div>
    <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea bind:value={description} class="form-control" id="description" placeholder="Description"></textarea>
    </div>
    <button on:click={addTodo} class="btn btn-success" disabled={!user}>Add Todo</button>

    {#if $user}
        <ul class="list-group mt-3">
            {#each $todos as todo}
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <strong>{todo.title}</strong> - {todo.description}
                        <div class="form-group">
                            <label for="sharedWith">Share With (User IDs, separated by commas)</label>
                            <input type="text" bind:value={todo.sharedWith} class="form-control" id="sharedWith" placeholder="Shared With">
                        </div>
                    </div>
                    <div>
                        <button on:click={() => shareTodo(todo.id, todo.sharedWith.split(',').map(id => id.trim()))} class="btn btn-primary">Share</button>
                        <button on:click={() => deleteTodo(todo.id)} class="btn btn-danger">Delete</button>
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
</div>
