import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090'); // Die URL deines PocketBase-Servers

export const actions = {
    // Laden der To-Do-Daten aus PocketBase
    load: async ({ params }) => {
        const records = await pb.collection('todos').getFullList();
        return { todos: records };
    },
    // Hinzufügen eines neuen To-Dos
    addTodo: async ({ request }) => {
        const formData = await request.formData();
        const newTodo = {
            text: formData.get('text'),
            reminder: formData.get('reminder'),
            deadline: formData.get('deadline'),
            completed: false
        };

        await pb.collection('todos').create(newTodo);

        return { success: true };
    },
    // Aktualisieren eines To-Dos
    updateTodo: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        const updatedTodo = {
            text: formData.get('text'),
            reminder: formData.get('reminder'),
            deadline: formData.get('deadline'),
            completed: formData.get('completed') === 'true'
        };

        await pb.collection('todos').update(id, updatedTodo);

        return { success: true };
    },
    // Löschen eines To-Dos
    deleteTodo: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        await pb.collection('todos').delete(id);

        return { success: true };
    }
};
