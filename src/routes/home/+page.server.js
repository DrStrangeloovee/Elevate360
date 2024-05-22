export async function load({ locals }) {
    return {
        notes: await locals.pb.collection('notes').getFullList({
            filter: `owner.id = "${locals.user.id}"` // Filter notes of current user
        })
    };
}