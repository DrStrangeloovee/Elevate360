/**
 * Propagate the user information throughout the application
 * @param {*} param0 
 * @returns 
 */
export const load = ({ locals }) => {
    if (locals.user) {
        return {
            user: locals.user
        }
    }

    return {
        user: undefined
    }

} 