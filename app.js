
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


// variables
const input = document.querySelector('#todoInput');
const toDoList = document.querySelector('.todoList');
const todoListTest = document.querySelector('.todoListTest');


// enter on form
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        input.value = '';
        console.log('Enter');
        
        // create li
        const todoLi = document.createElement('li');
        todoLi.classList.add('itemTest');
        todoListTest.appendChild(todoLi);

        // create checkBox
        const checkBox = document.createElement('div');
        checkBox.classList.add('checkBox');
        checkBox.innerHTML = '<input type="checkbox" id="submit">';
        todoLi.appendChild(checkBox);

        // create text
        const text = document.createElement('div');
        text.classList.add('words');
        text.innerText = 'testing words...';
        todoLi.appendChild(text);

        // create cross 
        let cross = document.createElement('div');
        cross.classList.add('cross');
        cross.innerHTML = '<img src="/images/icon-cross.svg" alt="cross">';
        todoLi.appendChild(cross);

        cross.addEventListener('click', function(){
            todoLi.removeChild(cross);
            todoLi.removeChild(text);
            todoLi.removeChild(checkBox);
            todoListTest.removeChild(todoLi);
        });

        checkBox.addEventListener('click', function(){
            console.log('clicked');
            text.classList.toggle('active');
        })
    } 
}); 


// removal of items


