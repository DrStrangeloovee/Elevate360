import { error, redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ locals, request }) => {
        const formData = Object.fromEntries(await request.formData());

        try {
            // Tries to authenticate with the provided credentials and updates the auth store
            await locals.pb
                .collection('users')
                .authWithPassword(formData.email, formData.password);

            // Logout user if not verified
            if (!locals.pb.authStore.model.verified) {
                console.log('user not verified');
                locals.pb.authStore.clear();

                return {
                    notVerified: true
                };
            }
        } catch (e) {
            console.error('ERROR', e)
            error(500, 'Something went wrong logging in')
        }

        redirect(303, '/home');
    },
}