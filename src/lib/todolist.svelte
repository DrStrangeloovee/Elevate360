<script>
  import { createContext, setContext, getContext } from 'svelte';
  import { onMount } from 'svelte';

  let todos = [];
  let newTodo = '';
  let reminder = '';
  let deadline = '';
  let isEditing = false;
  let editedText = '';
  let newReminder = '';
  let newDeadline = '';

  const eventContext = createContext({
    handlers: {},
    dispatch(eventName, eventData) {
      const { handlers } = getContext('eventContext');
      if (handlers[eventName]) {
        handlers[eventName](eventData);
      }
    },
    on(eventName, handler) {
      setContext('eventContext', {
        ...getContext('eventContext'),
        handlers: { ...getContext('eventContext').handlers, [eventName]: handler }
      });
    },
    off(eventName) {
      setContext('eventContext', {
        ...getContext('eventContext'),
        handlers: { ...getContext('eventContext').handlers, [eventName]: undefined }
      });
    }
  });

  onMount(() => {
    setContext('eventContext', eventContext);
    const { on } = getContext('eventContext');

    on('addTodo', ({ text, reminder, deadline }) => {
      todos = [
        ...todos,
        { id: Date.now(), text, reminder, deadline, completed: false }
      ];
    });

    on('completeTodo', (id) => {
      todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    });

    on('removeTodo', (id) => {
      todos = todos.filter(todo => todo.id !== id);
    });

    on('editTodo', ({ id, text, reminder, deadline }) => {
      todos = todos.map(todo => todo.id === id ? { ...todo, text, reminder, deadline } : todo);
    });
  });

  function handleAddTodo() {
    if (newTodo.trim()) {
      const { dispatch } = getContext('eventContext');
      dispatch('addTodo', { text: newTodo, reminder, deadline });
      newTodo = '';
      reminder = '';
      deadline = '';
    }
  }

  function handleComplete(todo) {
    const { dispatch } = getContext('eventContext');
    dispatch('completeTodo', todo.id);
  }

  function handleRemove(todo) {
    const { dispatch } = getContext('eventContext');
    dispatch('removeTodo', todo.id);
  }

  function handleEdit(todo) {
    isEditing = true;
    editedText = todo.text;
    newReminder = todo.reminder || '';
    newDeadline = todo.deadline || '';
  }

  function saveEdit(todo) {
    const { dispatch } = getContext('eventContext');
    dispatch('editTodo', { id: todo.id, text: editedText, reminder: newReminder, deadline: newDeadline });
    isEditing = false;
  }

  function cancelEdit(todo) {
    isEditing = false;
    editedText = todo.text;
    newReminder = todo.reminder || '';
    newDeadline = todo.deadline || '';
  }

  function isDateExpired(dateStr) {
    const currentDate = new Date();
    const targetDate = new Date(dateStr);
    return currentDate > targetDate;
  }
</script>

<main>
  <h1 class="title">Planned</h1>

  <section class="todos">
    <div class="add-todo">
      <input type="text" bind:value={newTodo} placeholder="Add a new task..." class="input-large" />
      <div class="input-group">
        <label for="reminder">Reminder</label>
        <input id="reminder" type="datetime-local" bind:value={reminder} class="input-large" />
      </div>
      <div class="input-group">
        <label for="deadline">Deadline</label>
        <input id="deadline" type="datetime-local" bind:value={deadline} class="input-large" />
      </div>
      <button on:click={handleAddTodo} class="btn">Add Task</button>
    </div>

    {#if todos.length}
      <ul class="todo-list">
        {#each todos as todo (todo.id)}
          <div class="task-item">
            <div class="task-content">
              <span>{todo.text}</span>
              {#if todo.reminder}
                <div class:reminder={isDateExpired(todo.reminder)}>Reminder: {todo.reminder}</div>
              {/if}
              {#if todo.deadline}
                <div class:deadline={isDateExpired(todo.deadline)}>Deadline: {todo.deadline}</div>
              {/if}
            </div>
            <div class="action-buttons">
              {#if !isEditing}
                <input type="checkbox" checked={todo.completed} on:change={() => handleComplete(todo)} class="checkbox" />
                <button on:click={() => handleEdit(todo)} class="btn small">Edit</button>
                <button on:click={() => handleRemove(todo)} class="btn cancel small">Delete</button>
              {:else}
                <input type="text" bind:value={editedText} class="input-large" />
                <div class="input-group">
                  <label for="edit-reminder">Reminder</label>
                  <input id="edit-reminder" type="datetime-local" bind:value={newReminder} class="input-large" />
                </div>
                <div class="input-group">
                  <label for="edit-deadline">Deadline</label>
                  <input id="edit-deadline" type="datetime-local" bind:value={newDeadline} class="input-large" />
                </div>
                <div class="action-buttons">
                  <button on:click={() => saveEdit(todo)} class="btn small">Save</button>
                  <button on:click={() => cancelEdit(todo)} class="btn cancel small">Cancel</button>
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </ul>

      <div class="actions">
        <span class="todo-count">{todos.filter(todo => !todo.completed).length} left</span>
        <button class="clear-completed">Clear completed</button>
      </div>
    {/if}
  </section>
</main>

<style>
  .title {
    font-size: 24px;
    padding: 20px;
    text-align: center;
    color: #333;
  }
  .todos {
    width: 400px;
    background-color: #eaf8f4;
    color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }
  .add-todo {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .input-large {
    width: 100%;
    padding: 10px;
    font-size: 1.1rem;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .btn {
    padding: 10px;
    font-size: 1.1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  .task-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-bottom: 1px solid #ededed;
  }
  .task-content {
    display: flex;
    flex-direction: column;
  }
  .reminder, .deadline {
    font-size: 0.9em;
    color: gray;
  }
  .input-large {
    width: 100%;
    padding: 10px;
    font-size: 1.1rem;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .btn.cancel {
    background-color: red;
  }
  .small {
    padding: 5px;
    font-size: 0.8rem;
  }
  .action-buttons {
    display: flex;
    gap: 5px;
    justify-content: flex-end;
  }
  .checkbox {
    margin-right: 10px;
  }
</style>
