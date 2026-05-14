function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.className = 'task-item';

        const taskTextSpan = document.createElement('span');
        taskTextSpan.className = 'task-text';
        taskTextSpan.textContent = taskText;

        const buttons = document.createElement('div');
        buttons.className = 'task-buttons';

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            const newTaskText = prompt('Edit Task:', taskTextSpan.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskTextSpan.textContent = newTaskText.trim();
            }
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);
        li.appendChild(taskTextSpan);
        li.appendChild(buttons);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}