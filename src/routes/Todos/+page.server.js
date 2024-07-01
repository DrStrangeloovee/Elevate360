import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
    let newRecordId = null;
    try {
        
        const newTodo = {
            task: 'Neues To-do', 
            reminder: '', 
            deadline: '', 
            completed: false 
        };

        const record = await locals.pb.collection('To_do_list').create(newTodo);
        newRecordId = record.id;
    } catch (error) {
        console.error('Fehler beim Erstellen des To-dos:', error);
    }

    redirect(302, `/todo?id=${newRecordId}`);
}
