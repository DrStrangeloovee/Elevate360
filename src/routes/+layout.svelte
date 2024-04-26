<script>
    // Import our custom CSS
    import '../styles.scss';
    // Import all of Bootstrap's JS
    //import 'bootstrap/dist/js/bootstrap.bundle.min.js';

    import { onMount } from 'svelte';

    onMount(() => {
        // Initialize all tooltip elements
        const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
        const dropdownList = dropdownElementList.map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));
    });

</script>

<nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Elevate360</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                    <a class="nav-link" href="notes">Notes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="calender">Calender</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="todo">To-Dos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="tracker">Tracker</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <a data-mdb-dropdown-init class="nav-link dropdown-toggle" href="user" id="navbarDropdown" role="button"
               data-mdb-toggle="dropdown" aria-expanded="false"> <i class="fas fa-user mx-1"></i> Profile </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                    <a class="dropdown-item" href="#">My account</a>
                </li>

                <li>
                    <a class="dropdown-item" href="#">Log out</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                        <a href="/notes" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-file-text"></i> <span class="ms-1 d-none d-sm-inline">Notes</span> </a>
                    </li>
                    <li>
                        <a href="/calender" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Calender</span></a>
                    </li>
                    <li>
                        <a href="/todos" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-list-task"></i> <span class="ms-1 d-none d-sm-inline">To-Dos</span></a>
                    </li>
                    <li>
                        <a href="/tracker" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-journal-check"></i> <span class="ms-1 d-none d-sm-inline">Tracker</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="/tracker/budget" class="nav-link px-0"><i class="fs-4 bi-1-circle"></i> <span class="d-none d-sm-inline">Budget</span></a>
                            </li>
                            <li>
                                <a href="/tracker/habit" class="nav-link px-0"><i class="fs-4 bi-2-circle"></i> <span class="d-none d-sm-inline">Habit</span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/favorites" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-star"></i> <span class="ms-1 d-none d-sm-inline">Favorites</span> </a>
                    </li>
                </ul>
                <hr>
                <div class="dropdown pb-4">
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li>
                            <a href="/settings" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-gear"></i> <span class="ms-1 d-none d-sm-inline">Settings</span> </a>
                        </li>
                        <li>
                            <a href="/gettingstarted" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-book"></i> <span class="ms-1 d-none d-sm-inline">Getting Started</span> </a>
                        </li>
                        <li>
                            <a href="/about" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-info-circle"></i> <span class="ms-1 d-none d-sm-inline">About</span> </a>
                        </li>
                    </ul>
                    <hr>
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="" alt="" width="30" height="30" class="rounded-circle">
                        <span class="d-none d-sm-inline mx-1">User</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="/settings">Settings</a></li>
                        <li><a class="dropdown-item" href="/user">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="/user/logout">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3">
            <slot />
        </div>
    </div>
</div>
