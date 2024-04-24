<script>
    // Import our custom CSS
    import '../styles.scss';
    // Import all of Bootstrap's JS
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

<slot />
