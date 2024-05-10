import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
    register: async ({ locals, request }) => {
        const formData = Object.fromEntries(await request.formData());
        console.log(typeof formData, formData);

        // const data = {
        //     username: "test_username",
        //     email: "test@example.com",
        //     emailVisibility: true,
        //     password: "12345678",
        //     passwordConfirm: "12345678",
        //     name: "test"
        // };

        try {
            const newUser = await locals.pb.collection("users").create(formData);

            // await locals.pb.users.authViaEmail(formData.email, formData.password);

            locals.pb.authStore.clear();
        } catch (error) {
            console.log(error);
            console.log(error.response);
            //throw Error(500, "Something went wrong");

            return fail(422, {
                error: true,
                message: JSON.stringify(error)
            });
        }

        throw redirect(303, "/login");
    }
};