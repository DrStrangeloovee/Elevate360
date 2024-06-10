import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
    update: async ({ locals, request }) => {
        const formData = Object.fromEntries(await request.formData());

        if(formData.avatar.size === 0) {
            delete formData.avatar
        }
        if(formData.deleteImage) {
            formData.avatar = null
        }
        try {
            await locals.pb.collection("users").update(locals.user.id, formData);
        } catch (ex) {
            console.log(ex);

            return fail(422, {
                error: true,
                message: JSON.stringify(ex)
            });
        }

        redirect(303, "/profile");
    }
};