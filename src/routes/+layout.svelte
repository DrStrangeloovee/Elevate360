<script>
    // Import our custom CSS
    import '../styles.scss';

    let { data } = $props();
</script>

<div class="row mb-5">
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
                    <a class="nav-link" href="/">
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
                        Calender
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
                <button type="button" class="btn btn-danger">Logout</button>
            </div>
        {:else}
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-center">
                <li><a href="#" class="nav-link px-2">Home</a></li>
                <li><a href="#" class="nav-link px-2">Features</a></li>
                <li><a href="#" class="nav-link px-2">About</a></li>
            </ul>
            <div class="col-md-3 text-end">
                <button type="button" class="btn btn-outline-primary me-2">Login</button>
                <button type="button" class="btn btn-primary">Sign-up</button>
            </div>
        {/if}
    </header>
</div>

<div class="row">
    <slot />
</div>

<!-- <div class="row flex-nowrap">
    <div class="col-auto col-md-3 bg-dark">
        <div
            class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
        >
            <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
            >
                <li>
                    <a href="/notes" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-file-text"></i>
                        <span class="ms-1 d-none d-sm-inline">Notes</span>
                    </a>
                </li>
                <li>
                    <a href="/calender" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-table"></i>
                        <span class="ms-1 d-none d-sm-inline">Calender</span></a
                    >
                </li>
                <li>
                    <a href="/todos" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-list-task"></i>
                        <span class="ms-1 d-none d-sm-inline">To-Dos</span></a
                    >
                </li>
                <li>
                    <a href="/tracker" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-journal-check"></i>
                        <span class="ms-1 d-none d-sm-inline">Tracker</span>
                    </a>
                    <ul
                        class="collapse show nav flex-column ms-1"
                        id="submenu3"
                        data-bs-parent="#menu"
                    >
                        <li class="w-100">
                            <a href="/tracker/budget" class="nav-link px-0"
                                ><i class="fs-4 bi-1-circle"></i>
                                <span class="d-none d-sm-inline">Budget</span></a
                            >
                        </li>
                        <li>
                            <a href="/tracker/habit" class="nav-link px-0"
                                ><i class="fs-4 bi-2-circle"></i>
                                <span class="d-none d-sm-inline">Habit</span></a
                            >
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/favorites" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-star"></i>
                        <span class="ms-1 d-none d-sm-inline">Favorites</span>
                    </a>
                </li>
            </ul>
            <hr />
            <div class="dropdown pb-4">
                <ul
                    class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                    id="menu"
                >
                    <li>
                        <a
                            href="/settings"
                            data-bs-toggle="collapse"
                            class="nav-link px-0 align-middle"
                        >
                            <i class="fs-4 bi-gear"></i>
                            <span class="ms-1 d-none d-sm-inline">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/gettingstarted"
                            data-bs-toggle="collapse"
                            class="nav-link px-0 align-middle"
                        >
                            <i class="fs-4 bi-book"></i>
                            <span class="ms-1 d-none d-sm-inline">Getting Started</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            data-bs-toggle="collapse"
                            class="nav-link px-0 align-middle"
                        >
                            <i class="fs-4 bi-info-circle"></i>
                            <span class="ms-1 d-none d-sm-inline">About</span>
                        </a>
                    </li>
                </ul>
                <hr />
                <a
                    href="#"
                    class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img src="" alt="" width="30" height="30" class="rounded-circle" />
                    <span class="d-none d-sm-inline mx-1">User</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a class="dropdown-item" href="/settings">Settings</a></li>
                    <li><a class="dropdown-item" href="/user">Profile</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="/user/logout">Sign out</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-auto">
        <slot />
    </div>
</div> -->
