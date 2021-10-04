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
        const checkBox = document.createElement('div');
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
        checkBox.addEventListener('click', function() {
            console.log('clicked');
            text.classList.toggle('active');
            checkBox.classList.toggle('active');

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


        /*
        const checkBoxActive =  checkBox.classList.add('active');
        const checkBoxNaked =  checkBox.classList.remove('active');

        function myFunction() {
            if (checkBoxActive) {
                span.innerText = +span.innerText - 1;
                console.log('active');
            }
            else {
                span.innerText = +span.innerText;
                console.log('notActive');
            }
        }

        myFunction();
        */
    } 
}); 

