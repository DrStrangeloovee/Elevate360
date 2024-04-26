<script>
    // Import our custom CSS
    import '../styles.scss';
    // Import all of Bootstrap's JS
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
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
