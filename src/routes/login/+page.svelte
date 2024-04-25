<script>
    import PocketBase from 'pocketbase';

    let email = ''; // Declare email
    let password = ''; // Declare password
    import { user } from '../../store';
    import { writable } from 'svelte/store';
    import alert from 'bootstrap/js/src/alert.js';

    // Instantiate PocketBase client
    const pb = new PocketBase('http://127.0.0.1:8090');

    // Function to log in
    async function login(email, password) {
        try {
            const authUser = await pb.collection('users').authWithPassword(email, password);
            user.set(authUser.record); // Update the user store

            // after the above you can also access the auth data from the authStore
            console.log(pb.authStore.isValid);
            console.log(pb.authStore.token);
            console.log(pb.authStore.model.id);

        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    async function logout() {
        pb.authStore.clear(); // Clear authentication store
        user.set(null);
        console.log('Logged out successfully');
    }
</script>


<!-- Login form styled with Bootstrap -->
{#if !$user}
    <div class="container mt-3">
        <h2>Login</h2>
        <form on:submit|preventDefault={() => login(email, password)} class="mb-3">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" bind:value={email} class="form-control" id="email" placeholder="Enter email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" bind:value={password} class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
{/if}
<!-- Conditional Logout Button -->
{#if $user}
    <div class="container">
        <button on:click={logout} class="btn btn-warning">Logout</button>
    </div>
{/if}