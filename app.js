
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