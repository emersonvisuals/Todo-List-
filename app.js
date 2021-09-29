
// toggle footer 
const all = document.querySelector('#all');
const active = document.querySelector('#active');
const completed = document.querySelector('#completed');

all.addEventListener('click', function(){
    all.classList.toggle('active');
    active.classList.remove('active');
    completed.classList.remove('active');
});

active.addEventListener('click', function(){
    all.classList.remove('active');
    active.classList.toggle('active');
    completed.classList.remove('active');
});

completed.addEventListener('click', function(){
    all.classList.remove('active');
    active.classList.remove('active');
    completed.classList.toggle('active');
});


// enter 
const input = document.querySelector('#todoInput');
const toDoList = document.querySelector('.todoList')


input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        input.value = '';
        console.log('Enter');
        
        // toDo DIV
        const toDoDiv = document.createElement('div');
        toDoDiv.classList.add('todo');
        // create LI 
        const newToDo = document.createElement('li');
        newToDo.innerText = 'item test';
        newToDo.classList.add('todoItem');
        toDoDiv.appendChild(newToDo);
        // Append to List
        toDoList.appendChild(toDoDiv);
    } 
}); 



