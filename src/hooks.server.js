import { PUBLIC_POCKETBASE_URL } from "$env/static/public";
import PocketBase from "pocketbase";


/**
 * This handle-hook checks checks for every request if the user is authenticated.
 * The user information is accessible `data.user` object in the front end.
 * @param {*} param0 
 * @returns The intercepted request with (if available) a cookie set to the `data.user` object.`
 */
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    event.locals.pb = new PocketBase(PUBLIC_POCKETBASE_URL);

    // load the store data from the request cookie string
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

    if (event.locals.pb.authStore.isValid) {
        // serializes the response from pocketbase to an object
        event.locals.user = structuredClone(event.locals.pb.authStore.model);
    } else {
        // not authenticated/session expired
        event.locals.user = undefined;
    }

    // resolve the rest of the request
    const response = await resolve(event);

    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: false })); // TODO: in a real deployment this should be fixed

    // return the reponse with the cookie set
    return response;
}