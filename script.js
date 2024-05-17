let input = document.querySelector('#in');
let ul = document.querySelector('ul');

document.querySelector('.btn').onclick = () => {
    if(input.value == '')
        {
            alert('Add something')
        }
        else
        {
            let li = document.createElement('li');
            li.textContent = input.value;
            ul.appendChild(li);
            
        
            let span = document.createElement('span');
            span.textContent = '\u00d7';
            li.appendChild(span);
        
            ul.onclick = (e) => {
                if(e.target.tagName == 'SPAN')
                    {
                        e.target.parentElement.remove();
                    }
                else if(e.target.tagName == "LI")
                    {
                        e.target.classList.toggle('liCon')
                    }
            }
            input.value = ''
        }
   
}