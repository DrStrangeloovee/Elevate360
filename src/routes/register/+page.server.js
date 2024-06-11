import { fail, redirect } from "@sveltejs/kit";

export const actions = {
    register: async ({ locals, request }) => {
        const formData = Object.fromEntries(await request.formData());

        let validationFailed = false
        let errors = []

        if(formData.password !== formData.passwordConfirm) {
            validationFailed = true
            errors.push("Confirm password failed")
        }
        if(formData.password.length < 8 || formData.password.length > 72) {
            validationFailed = true
            errors.push("Password need to be between 8 and 72 characters")
        }
        if(formData.username.length < 3) {
            validationFailed = true
            errors.push("Username must be longer than 3 characters")
        }


        if(validationFailed) {
            return fail(422, {
                error: true,
                message: JSON.stringify(errors)
            });
        }

        try {
            await locals.pb.collection("users").create(formData);

            locals.pb.authStore.clear();
        } catch (ex) {
            console.log(ex);

            if (ex.data.data.username && ex.data.data.username.code) {
                validationFailed = true
                errors.push("Username already exist")
            }
            if (ex.data.data.email && ex.data.data.email.code) {
                validationFailed = true
                errors.push("Email address already exists")
            }

            return fail(422, {
                error: true,
                message: JSON.stringify(validationFailed ? errors : ex)
            });
        }

        redirect(303, "/login");
    }
};