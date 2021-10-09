// toggle footer 
let all = document.querySelector('#all');
let active = document.querySelector('#active');
let completed = document.querySelector('#completed');

all.classList.add('active');

all.addEventListener('click', function(){
    all.classList.add('active');
    active.classList.remove('active');
    completed.classList.remove('active');
});

active.addEventListener('click', function(){
    all.classList.remove('active');
    active.classList.add('active');
    completed.classList.remove('active');
});

completed.addEventListener('click', function(){
    all.classList.remove('active');
    active.classList.remove('active');
    completed.classList.add('active');
});

// enter on form
const input = document.querySelector('#todoInput');
const toDoList = document.querySelector('.todoList');
const todoListTest = document.querySelector('.todoListTest');
const placeholder = document.querySelector('placeholder');

// enter Function
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        console.log('Enter');
        
        // create li
        const todoLi = document.createElement('li');
        todoLi.classList.add('itemTest');
        todoListTest.appendChild(todoLi);

        // create checkBox
        let checkBox = document.createElement('div');
        checkBox.classList.add('checkBox');
        checkBox.innerHTML = '<input type="checkbox" id="submit">';
        todoLi.appendChild(checkBox);

        // create text
        const text = document.createElement('div');
        text.classList.add('words');
        text.innerText = input.value;
        todoLi.appendChild(text);

        // create cross 
        let cross = document.createElement('div');
        cross.classList.add('cross');
        cross.innerHTML = '<img src="/images/icon-cross.svg" alt="cross">';
        todoLi.appendChild(cross);

        // remove text after enter 
        input.value = '';


        // enter Count
        let number = 0;
        let span = document.querySelector('span#itemsLeft');
        
        function countUp(number) {
            span.innerText = +span.innerText + number;
        }
        countUp(1);

        // checkBox Clicked
        let checkBoxToggle = document.querySelector('input#submit');

        checkBox.addEventListener('click', function() {
            console.log('checkbox clicked');
            text.classList.toggle('active');
            checkBox.classList.toggle('active');


            // checkBox Count
            function checkBoxCount (number) {
                if (checkBox.classList.contains('active')) {
                    span.innerText = +span.innerText - number;
                } else {
                    span.innerText = +span.innerText + number;
                }
            }
            checkBoxCount(1);
        });


        // cross Click
        cross.addEventListener('click', function(){
            todoLi.removeChild(cross);
            todoLi.removeChild(text);
            todoLi.removeChild(checkBox);
            todoListTest.removeChild(todoLi);
            cross.classList.add('active');

            // cross Count
            function countDown(number) {
                if (checkBox.classList.contains('active')) {
                    span.innerText = +span.innerText;
                } else {
                    span.innerText = +span.innerText - number;
                }
            }
            countDown(1);
        });



        // Clear Completed Button
        let clearCompleted = document.querySelector('#clearCompleted p');

        clearCompleted.addEventListener('click', function(){
            console.log('clear completed clicked');

            function clearCompletedTask() {
                if (checkBox.classList.contains('active')) {
                    todoLi.removeChild(cross);
                    todoLi.removeChild(text);
                    todoLi.removeChild(checkBox);
                    todoListTest.removeChild(todoLi);
                    checkBox.classList.add('clearCompleted');
                }
                else {
                    return
                }
            }
            clearCompletedTask();
        });


        // All Tasks Button 
        all.addEventListener('click', function(){
            console.log('all tasks clicked');

            // remove elements containing cross
            function allTasksCross() {
                if(cross.classList.contains('active')) {
                    todoLi.removeChild(cross);
                    todoLi.removeChild(text);
                    todoLi.removeChild(checkBox);
                    todoListTest.removeChild(todoLi);
                } else {
                    // create li
                    todoListTest.appendChild(todoLi);

                    // create checkBox
                    todoLi.appendChild(checkBox);

                    // create text
                    todoLi.appendChild(text);

                    // create cross 
                    todoLi.appendChild(cross);
                }
            }
            allTasksCross();

            // remove elements containing clear completed
            function allTasksClearCompleted () {
                if(checkBox.classList.contains('active') && checkBox.classList.contains('clearCompleted')) {
                    todoLi.removeChild(cross);
                    todoLi.removeChild(text);
                    todoLi.removeChild(checkBox);
                    todoListTest.removeChild(todoLi);
                } else {
                    return
                }
            }
            allTasksClearCompleted();
        });


        // Active Tasks Button 
        active.addEventListener('click', function(){
            console.log('active tasks clicked');

            function activeActive() {
                if(checkBox.classList.contains('active')) {
                    todoLi.removeChild(cross);
                    todoLi.removeChild(text);
                    todoLi.removeChild(checkBox);
                    todoListTest.removeChild(todoLi);
                } else {
                    // create li
                    todoListTest.appendChild(todoLi);

                    // create checkBox
                    todoLi.appendChild(checkBox);

                    // create text
                    todoLi.appendChild(text);

                    // create cross 
                    todoLi.appendChild(cross);
                }
            }
            activeActive();

            // remove elements containing cross
            function activeCross() {
                if(cross.classList.contains('active')) {
                    todoLi.removeChild(cross);
                    todoLi.removeChild(text);
                    todoLi.removeChild(checkBox);
                    todoListTest.removeChild(todoLi);
                } else {
                    return
                }
            }
            activeCross();

            // remove elements containing clear completed
            function activeTasksClearCompleted () {
                if(checkBox.classList.contains('active') && checkBox.classList.contains('clearCompleted')) {
                    todoLi.removeChild(cross);
                    todoLi.removeChild(text);
                    todoLi.removeChild(checkBox);
                    todoListTest.removeChild(todoLi);
                } else {
                    return
                }
            }
            activeTasksClearCompleted();
        })


        // Completed Tasks Button 
        completed.addEventListener('click', function(){
            console.log('completed tasks clicked');

            function completedActive() {
                if(checkBox.classList.contains('active')) {
                    // create li
                    todoListTest.appendChild(todoLi);

                    // create checkBox
                    todoLi.appendChild(checkBox);

                    // create text
                    todoLi.appendChild(text);

                    // create cross 
                    todoLi.appendChild(cross);
                } else {
                    todoLi.removeChild(cross);
                    todoLi.removeChild(text);
                    todoLi.removeChild(checkBox);
                    todoListTest.removeChild(todoLi);
                }
            }
            completedActive();

            // remove elements containing cross
            function completedCross() {
                if(cross.classList.contains('active')) {
                    todoLi.removeChild(cross);
                    todoLi.removeChild(text);
                    todoLi.removeChild(checkBox);
                    todoListTest.removeChild(todoLi);
                } else {
                    return
                }
            }
            completedCross();

            // remove elements containing clear completed
            function completedTasksClearCompleted () {
                if(checkBox.classList.contains('active') && checkBox.classList.contains('clearCompleted')) {
                    todoLi.removeChild(cross);
                    todoLi.removeChild(text);
                    todoLi.removeChild(checkBox);
                    todoListTest.removeChild(todoLi);
                } else {
                    return
                }
            }
            completedTasksClearCompleted();

        });

        // disable enter 
    } 
}); 


// light mode 
let lightButton = document.querySelector('#darkToLight');
let bodyLight = document.body;
let headerLight = document.querySelector('header');
let todoListLight = document.querySelector('.todoTest');
let valueContainerLight = document.querySelector('.valueContainer');
let formLight = document.querySelector('form');
let footer = document.querySelector('footer');


lightButton.addEventListener('click', function(){
    console.log('clicked');
    bodyLight.classList.toggle('light');
    headerLight.classList.toggle('light');
    todoListLight.classList.toggle('light');
    valueContainerLight.classList.toggle('light');
    formLight.classList.toggle('light');
    footer.classList.toggle('light');
});