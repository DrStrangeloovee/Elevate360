import { redirect } from "@sveltejs/kit";

export const POST = ({ locals }) => {
    // Clear the authstore/cookie
    locals.pb.authStore.clear();
    locals.user = undefined;

    redirect(303, '/login');
}