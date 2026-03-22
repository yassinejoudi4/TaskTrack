let tasks = [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    list.innerHTML += `
      <div class="task">
        <div class="task-header">
          <div class="left">
            <div class="checkbox ${task.done ? 'checked' : ''}" onclick="toggle(${index})"></div>
            <div class="task-title">${task.title}</div>
          </div>
          <div class="buttons">
            <button class="edit" onclick="editTask(${index})">✏️</button>            <button class="delete" onclick="deleteTask(${index})">🗑️</button>
          </div>
        </div>
        <div class="task-body">
          ${task.description}<br>
          📅 ${task.date} ⏰ ${task.time}
        </div>
      </div>
    `;
  });
}

function addTask() {
  const title = prompt("Titre de la tâche:");
  const description = prompt("Description:");
  const date = prompt("Date:");
  const time = prompt("Heure:");

  if (title) {
    tasks.push({ title, description, date, time, done: false });
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  tasks[index].description = prompt("Nouvelle description:", tasks[index].description);
  tasks[index].date = prompt("Nouvelle date:", tasks[index].date);
  tasks[index].time = prompt("Nouvelle heure:", tasks[index].time);
  renderTasks();
}

function toggle(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}
