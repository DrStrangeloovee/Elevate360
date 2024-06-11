<script>
    let { form, data } = $props();

    // TODO: make use of form & data vars
    $effect(() => {
        console.log(form, data);
    });
</script>

<style>
    .logo {
        width: 50px;
    }
</style>

<div class="justify-content-center">
    {#if form?.error}
        <p>{form.message}</p>
    {/if}
    <div class="mx-auto col-3">
        <form method="POST" action="?/register" class="border rounded p-3 mb-3">
            <div class="text-center mb-4">
                <img class="logo" src="logo.png" alt="Elevate360 logo">
                <h1>Register</h1>
                <small class="text-body-secondary"
                    >or <a href="/login">login</a> with an existing account.</small
                >
            </div>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" name="username" id="username" required />
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
            <div class="mb-3">
                <label for="passwordConfirm" class="form-label">Confirm password</label>
                <input
                    type="password"
                    class="form-control"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    required
                />
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</div>
