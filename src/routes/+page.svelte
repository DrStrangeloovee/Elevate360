<script>
    export let data;
    console.log(data);
    console.log('data');
</script>

<div class="container-fluid pb-5">
    <div class="row">
        <div class="col-8 offset-2">
            <h2 class="text-center">Welcome to <span class="elevate360-text">Elevate360</span>!</h2>
            <p class="text-body-secondary text-center">
                Your assistant to help you stay organized.
            </p>
        </div>
    </div>
    <hr />
    <div class="row">
        <div class="col-12 mt-2">
            <h3 id="features" class="text-center">Features</h3>
            <div id="featureCarousel" class="carousel slide">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#featureCarousel"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#featureCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#featureCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#featureCarousel"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src="/images/carouselNotes.jpg"
                            class="d-block w-100"
                            alt="Rich text notes"
                        />
                        <div
                            class="carousel-caption d-none d-md-block bg-secondary-subtle text-secondary-emphasis"
                        >
                            <h5>Rich text notes</h5>
                            <p class="lead">
                                A featureful note editor with several utilites to style your notes
                                to your needs.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src="/images/carouselCalendar.jpg"
                            class="d-block w-100"
                            alt="Calendar with planner"
                        />
                        <div
                            class="carousel-caption d-none d-md-block bg-secondary-subtle text-secondary-emphasis"
                        >
                            <h5>Calendar with planner functionality</h5>
                            <p class="lead">
                                A calendar which keeps you up to date with your deadlines and todos.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src="/images/carouselHabitTracker.jpg"
                            class="d-block w-100"
                            alt="Habit tracker"
                        />
                        <div
                            class="carousel-caption d-none d-md-block bg-secondary-subtle text-secondary-emphasis"
                        >
                            <h5>Habit tracker</h5>
                            <p class="lead">
                                Build helpful habits to stay on track on your journey of
                                self-improvement.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src="/images/carouselBudgetTracker.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                        <div
                            class="carousel-caption d-none d-md-block bg-secondary-subtle text-secondary-emphasis"
                        >
                            <h5>Budget tracker</h5>
                            <p class="lead">
                                The integrated budget tracker helps you to keep an overview of your
                                spendings.
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#featureCarousel"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#featureCarousel"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    <hr />
    <div class="row">
        <div class="col-4 offset-4 mt-2">
            <h3 id="about" class="text-center">About</h3>
            <p class="lead">
                <span class="elevate360-text">Elevate360</span> was a project developed by students of the <a
                    href="https://www.technikum-wien.at/"
                    >University of Applied Sciences Technikum Wien</a
                >. The project was realized over the second semester of our Computer Science
                Bachelor's degree in the context of the IT Project course.
            </p>
            <img class="logo row" src="logo_full.png" alt="Elevate360 logo">
        </div>
    </div>
    <hr />
    <div class="row">
        <div class="col-4 offset-4 mt-2">
            <h3 class="text-center">Team</h3>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item lead">
                    <a href="mailto:if23b023@technikum-wien.at">Radwan Mariam</a><br />as Project
                    lead
                </li>
                <li class="list-group-item lead">
                    <a href="mailto:if23b004@technikum-wien.at">Ahmed Hagar</a>
                </li>
                <li class="list-group-item lead">
                    <a href="mailto:if23b501@technikum-wien.at">Auenhammer Marco</a>
                </li>
                <li class="list-group-item lead">
                    <a href="mailto:if22b016@technikum-wien.at">Taher Imad</a>
                </li>
                <li class="list-group-item lead">
                    <a href="mailto:if23b503@technikum-wien.at">Müllner Nick</a>
                </li>
            </ul>
        </div>
    </div>
    <hr />
    <div class="row">
        <div class="col">
            <h3 class="text-center">Technologies</h3>
            <p class="text-center lead">
                The following technologies have been used to develop <span class="elevate360-text">Elevate360</span>:
            </p>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-1 ms-1 justify-content-center">
        <div class="card m-1 p-2" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img
                        src="/images/SvelteKit.svg"
                        class="card-img-top technologies"
                        alt="Svelte(Kit) logo"
                    />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-center">
                            <a
                                class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                href="https://svelte.dev/">Svelte</a
                            >
                            &
                            <a
                                class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                href="https://kit.svelte.dev/">SvelteKit</a
                            >
                        </h5>
                        <p class="card-text">
                            Svelte is used to aid us in creating reactive SPA on the front end which
                            is accompanied by SvelteKit in back end to serve the app.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card m-1 p-2" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img
                        src="/images/PocketBase.svg"
                        class="card-img-top technologies"
                        alt="PocketBase logo"
                    />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-center">
                            <a
                                class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                href="https://pocketbase.io/">PocketBase</a
                            >
                        </h5>
                        <p class="card-text">
                            PocketBase is our database and data storage to handle user data.
                            Additionally it gives us the tools needed for a secure user
                            authentication. All of this is provided in a single binary utilizing
                            migrations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card m-1 p-2" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img
                        src="/images/Bootstrap.svg"
                        class="card-img-top technologies"
                        alt="Bootstrap logo"
                    />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-center">
                            <a
                                class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                href="https://getbootstrap.com/">Bootstrap</a
                            >
                        </h5>
                        <p class="card-text">
                            Boostrap is our CSS framework which gives us the styles for a modern,
                            simple and modular application right from the start with only fine
                            grained customization needed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    div.carousel-caption {
        right: 0;
        left: 0;
    }

    img.technologies {
        width: 170px;
        height: 150px;
    }

    .logo {
        width: 200px;
        margin: auto;
    }

    @font-face {
        font-family: 'Apex-Mk2-Bold-Extended';
        src:url('Apex-Mk2-Bold-Extended.ttf.woff') format('woff'),
        url('Apex-Mk2-Bold-Extended.ttf.svg#Apex-Mk2-Bold-Extended') format('svg'),
        url('Apex-Mk2-Bold-Extended.ttf.eot'),
        url('Apex-Mk2-Bold-Extended.ttf.eot?#iefix') format('embedded-opentype');
        font-weight: normal;
        font-style: normal;
    }

    .elevate360-text {
        font-family: 'Apex-Mk2-Bold-Extended', system-ui;
    }
</style>
