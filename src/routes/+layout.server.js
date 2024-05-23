import { redirect } from '@sveltejs/kit';

/**
 * Propagate the user information throughout the application
 * @param {*} param0 
 * @returns 
 */
export const load = ({ locals, url }) => {
    // User is logged in
    if (locals.user) {
        // Redirect to users home if logged in
        if (url.pathname === '/') redirect(307, '/home');
        return {
            user: locals.user
        }
    }

    // User is not logged in
    return {
        user: undefined
    }
} 