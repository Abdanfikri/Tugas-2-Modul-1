document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;

    if (todoText === '') {
        alert('Please enter a task');
        return;
    }

    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');

    const todoContent = document.createElement('input');
    todoContent.type = 'text';
    todoContent.value = todoText;
    todoContent.setAttribute('readonly', true);
    li.appendChild(todoContent);



    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    todoInput.value = '';
}
