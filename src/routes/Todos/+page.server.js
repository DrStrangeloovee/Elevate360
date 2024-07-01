import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const actions = {
    // Laden der To-Do-Daten aus PocketBase
    load: async ({ params }) => {
        try {
            const records = await pb.collection('To_do_list').getFullList();
            return { todos: records };
        } catch (error) {
            console.error('Error loading todos:', error);
            return { todos: [] };
        }
    },
    // Hinzufügen eines neuen To-Dos
    addTodo: async ({ request }) => {
        try {
            const formData = await request.formData();
            const newTodo = {
                text: formData.get('text'),
                reminder: formData.get('reminder'),
                deadline: formData.get('deadline'),
                completed: false
            };
            await pb.collection('To_do_list').create(newTodo);
            return { success: true };
        } catch (error) {
            console.error('Error adding todo:', error);
            return { success: false };
        }
    },
    // Aktualisieren eines To-Dos
    updateTodo: async ({ request }) => {
        try {
            const formData = await request.formData();
            const id = formData.get('id');
            const updatedTodo = {
                text: formData.get('text'),
                reminder: formData.get('reminder'),
                deadline: formData.get('deadline'),
                completed: formData.get('completed') === 'true'
            };
            await pb.collection('To_do_list').update(id, updatedTodo);
            return { success: true };
        } catch (error) {
            console.error('Error updating todo:', error);
            return { success: false };
        }
    },
    // Löschen eines To-Dos
    deleteTodo: async ({ request }) => {
        try {
            const formData = await request.formData();
            const id = formData.get('id');
            await pb.collection('To_do_list').delete(id);
            return { success: true };
        } catch (error) {
            console.error('Error deleting todo:', error);
            return { success: false };
        }
    }
};
