document.getElementById('add-button').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;

    if (todoText === '') {
        alert('Tidak boleh kosong');
        return;
    }

    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');

    const todoContent = document.createElement('input');
    todoContent.type = 'text';
    todoContent.value = todoText;
    todoContent.setAttribute('readonly', true);
    li.appendChild(todoContent);



    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(li);
    });
    li.appendChild(deleteButton);

    todoList.appendChild(li);
    todoInput.value = '';
}
