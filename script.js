document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input[name='task']");
  const addBtn = document.querySelector(".add button");

  // Create a container for the task list
  const taskList = document.createElement("ul");
  taskList.className = "task-list";
  document.querySelector(".box").appendChild(taskList);

  // Add task on button click
  addBtn.addEventListener("click", () => {
    addTask();
  });

  // Add task on Enter key
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.className = "delete";
    delBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);

    input.value = ""; // clear input
  }
});
