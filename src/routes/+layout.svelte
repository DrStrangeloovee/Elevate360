<script>
    // Import our custom CSS
    import '../styles.scss';

    let { data } = $props();
</script>

<div class="row mb-5 bg-white" class:sticky-top={!data.user}>
    <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between border-bottom px-2"
    >
        <div class="col-md-3 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                Elevate360 Logo
            </a>
        </div>
        {#if data.user}
            <ul class="nav col-9 col-md-auto mb-2 justify-content-center mb-md-0 text-center">
                <li class="nav-item px-2">
                    <a class="nav-link" href="/home">
                        <i class="bi bi-house d-block mx-auto"></i>
                        Home
                    </a>
                </li>
                <li class="nav-item px-2">
                    <a class="nav-link" href="/notes">
                        <i class="bi bi-list-nested d-block mx-auto"></i>
                        Notes
                    </a>
                </li>
                <li class="nav-item px-2">
                    <a class="nav-link" href="/calender">
                        <i class="bi bi-calendar d-block mx-auto"></i>
                        Calendar
                    </a>
                </li>
                <li class="nav-item px-2">
                    <a class="nav-link" href="/todos">
                        <i class="bi bi-check2-square d-block mx-auto"></i>
                        To-Dos
                    </a>
                </li>
                <li class="nav-item px-2">
                    <a class="nav-link" href="/tracker">
                        <i class="bi bi-thermometer-half d-block mx-auto"></i>
                        Tracker
                    </a>
                </li>
            </ul>
            <div class="col-md-3 text-end">
                <form action="/logout" method="POST">
                    <button type="submit" class="btn btn-danger">Logout</button>
                </form>
            </div>
        {:else}
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-center">
                <li><a href="/" class="nav-link px-2">Start</a></li>
                <li><a href="/#features" class="nav-link px-2">Features</a></li>
                <li><a href="/#about" class="nav-link px-2">About</a></li>
            </ul>
            <div class="col-md-3 text-end">
                <a href="/login" class="btn btn-primary m-2">Login </a>
                <a href="/register" class="btn btn-primary m-2">Register </a>
            </div>
        {/if}
    </header>
</div>

<div class="row">
    <slot />
</div>
