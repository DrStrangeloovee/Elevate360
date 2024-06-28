import { json } from '@sveltejs/kit';

export async function POST({ locals, request }) {
    const { id, title, content } = await request.json();
    try {
        // Try fetching requested note

        await locals.pb.collection('notes').update(id, {
            "title": title,
            "content": content
        });

    } catch (error) {
        return json({ ok: false });
    }
    return json({ ok: true });
}