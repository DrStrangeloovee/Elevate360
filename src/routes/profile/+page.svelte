<script>
    let { data } = $props();

    let greetingTime = new Date().getHours();

    $effect(() => {
        console.log(data);
        console.log(greetingTime);
    });
</script>

<style>
    .profile-pic {
        object-fit: cover;
        width: 128px;
        height: 128px;
    }
    figure {
        display: inline-block;
        border: 1px dotted gray;
    }
    figure img {
        display: block;
        margin: auto;
    }
</style>

<div class="col-4 offset-2">
    <h3>User profile</h3>
    <div>
        <label for="name">Name:</label>
        <input name="name" value="{data.user.name}">
        <label for="email">E-mail:</label>
        <input name="email" value="{data.user.email}">
        <label for="verified">Verified:</label>
        <input type="checkbox" name="verified" checked="{data.user.verified}" disabled>
        <figure>
            <img class="profile-pic rounded-circle" src="{data.user.avatarURL}" alt="profile">
            <figcaption>{data.user.avatar}</figcaption>
        </figure>
        <p>Member since: {data.user.created}</p>
    </div>
</div>