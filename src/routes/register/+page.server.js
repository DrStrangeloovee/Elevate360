import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
    register: async ({ locals, request }) => {
        const formData = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection("users").create(formData);

            locals.pb.authStore.clear();
        } catch (ex) {
            console.log(ex);

            return fail(422, {
                error: true,
                message: JSON.stringify(ex)
            });
        }

        redirect(303, "/login");
    }
};