import { writable } from 'svelte/store';

export const user = writable(null);  // Current user's session
export const todos = writable([]);   // List of todos that the user can access
