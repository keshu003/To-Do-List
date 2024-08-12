document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const timeInput = document.getElementById('todo-time');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskText = input.value.trim();
        const taskTime = timeInput.value;
        if (taskText !== '' && taskTime !== '') {
            addTask(taskText, taskTime);
            input.value = '';
            timeInput.value = '';
        }
    });

    function addTask(taskText, taskTime) {
        const li = document.createElement('li');

        const spanText = document.createElement('span');
        spanText.textContent = taskText;
        spanText.classList.add('task-text');
        li.appendChild(spanText);

        const spanTime = document.createElement('span');
        spanTime.textContent = taskTime;
        spanTime.classList.add('task-time');
        li.appendChild(spanTime);

        const editButton = document.createElement('button');
        editButton.textContent = '✏️';
        editButton.classList.add('edit');
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        li.appendChild(deleteButton);

        todoList.appendChild(li);

        editButton.addEventListener('click', function() {
            const newTaskText = prompt('Edit Task:', spanText.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                spanText.textContent = newTaskText.trim();
            }
            const newTaskTime = prompt('Edit Time:', spanTime.textContent);
            if (newTaskTime !== null && newTaskTime.trim() !== '') {
                spanTime.textContent = newTaskTime.trim();
            }
        });

        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });
    }
});
