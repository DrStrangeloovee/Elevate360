import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {

    return json({ status: 200, ok: true, text: 'Successfully saved note.' });

    /*try {

        if (id === null) {
            console.log("saving new", id);
            const test = await locals.pb.collection('notes').create(content);
            console.log(test);
        } else {
            await locals.pb.collection('notes').update(id, content);
        }

        return json({ status: 200, ok: true, text: 'Successfully saved note.' });
    } catch (ex) {
        error(404, `${JSON.stringify(ex)}`);
    }*/
}