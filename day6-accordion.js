

// created by online student .ie


// created by online student .ie

document.addEventListener('DOMContentLoaded', () =>{
    
    const accordion_header = document.querySelectorAll('.accordion-header')
    
    accordion_header.forEach((header) => {
    
        header.addEventListener('click', (e) => {
              e.preventDefault();
             const next_subling = header.nextElementSibling;
    
    if(next_subling.classList.contains('text-wrapper') ){
    
        next_subling.classList.remove('text-wrapper')
        next_subling.classList.add('text-wrapper-ON')
    }
    
    else{
        next_subling.classList.remove('text-wrapper-ON')
        next_subling.classList.add('text-wrapper')
        }
       })
      });
      
    });