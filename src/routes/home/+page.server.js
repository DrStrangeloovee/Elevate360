export async function load({ locals }) {
    return {
        notes: await locals.pb.collection('notes').getFullList({
            fields: 'id,title,created,updated',
            filter: `owner.id = "${locals.user.id}"` // Filter notes of current user
        })
    };
}