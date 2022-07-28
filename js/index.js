window.onload = function() {

const newTaskInput = document.querySelector('#new-task');
const addButton = document.querySelector('#add');
const result = document.querySelector('.main__list');

addButton.addEventListener('click', (e) => {
    if (newTaskInput.value === '') { 
        return; 
    }
    ManipulateElement(newTaskInput.value);
})

function ManipulateElement(value) {

    const div = document.createElement('div');
    const span = document.createElement('span');
    const img = document.createElement('img');

    div.className = 'item';
    span.textContent = value;  
    img.src = 'media/img/icons8-trash-64.png';

    div.appendChild(span);
    div.appendChild(img);

    img.addEventListener('click', (e) => {  
        result.removeChild(div);
    })

    div.addEventListener('click', (e) => {
        div.classList.toggle('done');           
    })
    
    newTaskInput.value = '';
    result.appendChild(div);
}

}