<script>
    let { form, data } = $props();

    let greetingTime = new Date().getHours();

    $effect(() => {
        console.log(data);
        console.log(greetingTime);
    });
</script>

<style>
    .profile-pic {
        margin: auto;
        object-fit: cover;
        width: 128px;
        height: 128px;
    }
    .info {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .img-div {
        max-width: 200px;
    }
    .mw {
        min-width: 50px;
    }
    .item {
        width: 40%;
        max-width: 300px;
    }
    figure {
        display: inline-block;
        border: 1px dotted gray;
        max-width: 200px;
    }
    figcaption {
        word-wrap: break-word;
        max-width: 150px;

    }
    p {
        word-wrap: break-word;
    }
</style>

<div class="col-4 offset-2">
    <h3>User profile</h3>
</div>

<div class="mt-5 justify-content-center">
    <div class="mx-auto col-8">
        <form method="POST" action="?/update" enctype="multipart/form-data" class="border rounded p-3 mb-3">
            {#if form?.error}
                <p>{form.message}</p>
            {/if}
            <div class="text-center info mt-3">
                <div class="item m-2">
                    <div class="mb-3">
                        <label class="form-label" for="name">Name:</label>
                        <input class="mw form-control" name="name" value="{data.user.name}">
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="email">E-mail:</label>
                        <input class="mw form-control" name="email" value="{data.user.email}">
                    </div>
                    <label class="form-check-label" for="verified">Verified:</label>
                    <input class="form-check-input" type="checkbox" name="verified" checked="{data.user.verified}" disabled>
                    <p class="mt-2">Member since: {data.user.created}</p>
                </div>
                <div class="item m-2 img-div">
                    {#if data.user.avatar}
                        <figure>
                            <img class="mt-2 profile-pic rounded-circle" src="{data.user.avatarURL}" alt="profile">
                            <label class="form-check-label" for="deleteImage">Delete Image:</label>
                            <input class="form-check-input" name="deleteImage" type="checkbox" id="deleteImage">
                            <figcaption class="mt-2 mb-2 ms-2 me-2">{data.user.avatar}</figcaption>
                        </figure>
                    {/if}
                    <label class="form-label" for="fileInput">Upload new image:</label>
                    <input class="form-control" name="avatar" type="file" id="fileInput">
                </div>
            </div>
            <button type="submit" class="mx-auto mt-3 mb-3 d-block btn btn-primary">Update</button>
        </form>
    </div>
</div>