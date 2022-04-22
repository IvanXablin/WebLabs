window.onload = function() {

    const input = document.querySelector('#in');
    const btn = document.querySelector('#add');
    const result = document.querySelector('#out');

    btn.addEventListener('click', (e) => {
        if (input.value === '') 
        { return; }
        ManipulateElement(input.value);
    })

    
    function ManipulateElement(value) {
        const li = document.createElement('li');
        const img = document.createElement('img');

        li.className = 'list_el';
        li.textContent = value;     
        img.className = 'delete';
        img.src = 'img/cross.png';
        li.appendChild(img);

        img.addEventListener('click', (e) => {  
            result.removeChild(li);
        })

        li.addEventListener('click', (e) => {
            li.classList.toggle('checked');           
        })
        
        result.appendChild(li);
        const html = parent.innerHTML; 
        localStorage.setItem('todo', html);
    }
}       



