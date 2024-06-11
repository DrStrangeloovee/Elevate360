<script>
    let { form } = $props();
</script>

<style>
    .logo {
        width: 50px;
    }
</style>

<div class="justify-content-center">
    <div class="mx-auto col-3">
        <form method="POST" action="?/login" class="border rounded p-3 mb-3">
            <div class="text-center mb-4">
                <img class="logo" src="logo.png" alt="Elevate360 logo">
                <h1>Login</h1>
                <small class="text-body-secondary"
                    >or <a href="/register">register</a> a new account.</small
                >
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" name="email" id="email" required
                       pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{"{2,4}"}$'/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    required
                />
            </div>
            {#if form?.error}
                <div class="alert alert-danger" role="alert">{form.message}</div>
            {/if}
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</div>
