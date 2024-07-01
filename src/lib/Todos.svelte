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
              { id: Date.now(), text: newTodo, reminder: reminder || '', deadline: deadline || '', completed: false }
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

  function checkExpiredDates() {
      todos.forEach(todo => {
          if (todo.reminder && isDateExpired(todo.reminder)) {
              todo.reminderExpired = true;
          } else {
              todo.reminderExpired = false;
          }
          if (todo.deadline && isDateExpired(todo.deadline)) {
              todo.deadlineExpired = true;
          } else {
              todo.deadlineExpired = false;
          }
      });
  }

  // Überprüfung der abgelaufenen Daten alle 30 Sekunden
  setInterval(checkExpiredDates, 30000);

  function handleKeyPress(event) {
      if (event.key === 'Enter') {
          if (newTodo.trim()) {
              handleAddTodo();
          }
      }
  }
</script>

<main>
  <h1 class="title">To-do</h1>

  <section class="todos">
      <div class="add-todo">
          <input type="text" bind:value={newTodo} placeholder="Add a new task..." class="input-large add-task-input" on:keypress={handleKeyPress} />
          <button on:click={handleAddTodo} class="btn add-task-button">Add Task</button>
      </div>

      {#if todos.length}
          <ul class="todo-list">
              {#each todos as todo (todo.id)}
                  <div class="task-item">
                      <div class="task-content">
                          <div class="task-text">
                              <input type="checkbox" checked={todo.completed} on:change={() => handleComplete(todo.id)} class="checkbox" />
                              <span class={todo.reminderExpired || todo.deadlineExpired ? 'expired-text' : ''}>{todo.text}</span>
                          </div>
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
                                  <button on:click={() => saveEdit(todo.id)} class="btn small outlined-btn">Save</button>
                                  <button on:click={cancelEdit} class="btn cancel small outlined-btn">Cancel</button>
                              </div>
                          {:else}
                              {#if todo.reminder}
                                  <div class:expired={todo.reminderExpired}>
                                      Reminder: {new Date(todo.reminder).toLocaleString()}
                                  </div>
                              {/if}
                              {#if todo.deadline}
                                  <div class:expired={todo.deadlineExpired}>
                                      Deadline: {new Date(todo.deadline).toLocaleString()}
                                  </div>
                              {/if}
                              <div class="action-buttons">
                                  <button on:click={() => handleEdit(todo.id, todo.text, todo.reminder, todo.deadline)} class="btn small outlined-btn">Edit</button>
                                  <button on:click={() => handleRemove(todo.id)} class="btn cancel small outlined-btn">Delete</button>
                                  <button on:click={() => handleEdit(todo.id, todo.text, todo.reminder, todo.deadline)} class="btn small outlined-btn">Set Reminder/Deadline</button>
                              </div>
                          {/if}
                      </div>
                  </div>
              {/each}
          </ul>

          <div class="actions">
              <span class="todo-count">{todos.filter(todo => !todo.completed).length} left</span>
              <div>
                  <button class="clear-completed" on:click={() => todos = todos.filter(todo => !todo.completed)}>Clear completed</button>
              </div>
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
      background-color: #fff;
      color: #333;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      margin: 0 auto;
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
  .add-task-input {
      padding: 15px;
  }
  .add-task-button {
      background-color: white;
      color: #007bff;
      border: 1px solid #007bff; /* Dünner Rand */
      padding: 10px; /* Innenabstand anpassen */
      cursor: pointer;
      font-size: 1.1rem;
  }
  .task-item {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 15px; /* Größerer Abstand für den Task */
      border-bottom: 1px solid #ededed;
  }
  .task-content {
      display: flex;
      flex-direction: column;
  }
  .task-text {
      display: flex;
      align-items: center;
      font-size: 1.1rem; /* Größere Schriftgröße für den Task-Text */
  }
  .action-buttons {
      display: flex;
      gap: 10px;
      margin-top: 5px;
  }
  .checkbox {
      margin-right: 10px;
  }
  .expired {
      font-size: 0.9em;
      color: red;
  }
  .expired-text {
      color: red;
  }
  .outlined-btn {
      border: 1px solid #007bff;
      background-color: transparent;
      color: #007bff;
      padding: 5px 10px;
      cursor: pointer;
      font-size: 0.9rem;
  }
  .cancel {
      border-color: red;
      color: red;
  }
  .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
  }
  .clear-completed {
      padding: 5px 10px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
  }
</style>
