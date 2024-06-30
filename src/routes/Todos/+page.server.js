import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
    const todoId = url.searchParams.get('id');

    if (todoId) {
        try {
            // Try fetching the requested todo
            return {
                todo: await locals.pb.collection('todos').getOne(todoId)
            };
        } catch (error) {
            console.error('Failed to fetch the todo:', error);
            // Redirect to new empty todo form
            throw redirect(307, '/todo/new');
        }
    } else {
        // Redirect to new empty todo form if no ID is provided
        throw redirect(307, '/todo/new');
    }
}

export async function actions({ locals, request }) {
    const formData = await request.formData();
    const data = {
        text: formData.get('text'),
        reminder: formData.get('reminder'),
        deadline: formData.get('deadline'),
        completed: formData.get('completed') === 'on' ? true : false
    };

    try {
        const todoId = formData.get('id');
        let todo;
        
        if (todoId) {
            // Update existing todo
            todo = await locals.pb.collection('todos').update(todoId, data);
        } else {
            // Create new todo
            todo = await locals.pb.collection('todos').create(data);
        }

        // Redirect to the todo page
        throw redirect(303, `/todo?id=${todo.id}`);
    } catch (error) {
        console.error('Failed to save the todo:', error);
        return {
            status: 500,
            error: 'Failed to save the todo'
        };
    }
}
