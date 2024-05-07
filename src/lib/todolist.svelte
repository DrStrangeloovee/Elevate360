<script>
  let loggedIn = true;

</script>

<style>
  /* CSS-Stile hier */
  #todo-app {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  .task-item {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  #task-input {
    display: flex;
  }

  #new-task {
    flex: 1;
    padding: 8px;
    border-radius: 4px 0 0 4px;
    border: 1px solid #ccc;
  }

  #add-button {
    padding: 8px 12px;
    border-radius: 0 4px 4px 0;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>

<div id="todo-app">
  <h1>To-Do List</h1>
  <div id="task-list">
    {#each tasks as task}
      <div class="task-item">{task}</div>
    {/each}
  </div>
  <div id="task-input">
    <input type="text" id="new-task" placeholder="Add a new task...">
    <button on:click={addTask} id="add-button">Add Task</button>
  </div>
</div>
