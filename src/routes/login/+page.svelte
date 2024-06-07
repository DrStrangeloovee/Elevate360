<script>
    let { form } = $props();
</script>

<div class="row justify-content-center">
    {#if form?.error}
        <p>{form.message}</p>
    {/if}
    <div class="col-3">
        <form method="POST" action="?/login" class="border rounded p-3 mb-3">
            <div class="text-center mb-3">
                <h1>Login</h1>
                <small class="text-body-secondary"
                    >or <a href="/register">register</a> a new account.</small
                >
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" name="email" id="email" required />
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
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</div>
