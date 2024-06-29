<script>
  let todos = [];
  let newTodo = '';
  let reminder = '';
  let deadline = '';
  let isEditing = null;
  let editedText = '';
  let newReminder = '';
  let newDeadline = '';

  function handleAddTodo() {
    if (newTodo.trim()) {
      todos = [
        ...todos,
        { id: Date.now(), text: newTodo, reminder, deadline, completed: false }
      ];
      newTodo = '';
      reminder = '';
      deadline = '';
    }
  }

  function handleComplete(todoId) {
    todos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
  }

  function handleRemove(todoId) {
    todos = todos.filter(todo => todo.id !== todoId);
  }

  function handleEdit(todoId, text, reminder, deadline) {
    isEditing = todoId;
    editedText = text;
    newReminder = reminder || '';
    newDeadline = deadline || '';
  }

  function saveEdit(todoId) {
    todos = todos.map(todo =>
      todo.id === todoId
        ? { ...todo, text: editedText, reminder: newReminder, deadline: newDeadline }
        : todo
    );
    isEditing = null;
  }

  function cancelEdit() {
    isEditing = null;
  }

  function isDateExpired(dateStr) {
    const currentDate = new Date();
    const targetDate = new Date(dateStr);
    return currentDate > targetDate;
  }
</script>

<main>
  <h1 class="title">To-do</h1>

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
              {#if isEditing === todo.id}
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
                  <button on:click={() => saveEdit(todo.id)} class="btn small">Save</button>
                  <button on:click={cancelEdit} class="btn cancel small">Cancel</button>
                </div>
              {:else}
                <span>{todo.text}</span>
                {#if todo.reminder}
                  <div class:expired={isDateExpired(todo.reminder)}>
                    Reminder: {new Date(todo.reminder).toLocaleString()}
                  </div>
                {/if}
                {#if todo.deadline}
                  <div class:expired={isDateExpired(todo.deadline)}>
                    Deadline: {new Date(todo.deadline).toLocaleString()}
                  </div>
                {/if}
                <div class="action-buttons">
                  <input type="checkbox" checked={todo.completed} on:change={() => handleComplete(todo.id)} class="checkbox" />
                  <button on:click={() => handleEdit(todo.id, todo.text, todo.reminder, todo.deadline)} class="btn small">Edit</button>
                  <button on:click={() => handleRemove(todo.id)} class="btn cancel small">Delete</button>
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </ul>

      <div class="actions">
        <span class="todo-count">{todos.filter(todo => !todo.completed).length} left</span>
        <button class="clear-completed" on:click={() => todos = todos.filter(todo => !todo.completed)}>Clear completed</button>
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
  .expired {
    font-size: 0.9em;
    color: red;
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
