'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal')
console.log(btnsOpenModal);

for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click', function(){
        console.log('Button Clicked');
        // to show modal remove hidden class 
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    btnCloseModal.addEventListener('click', function(){
        // to hide the modal window add hidden class
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });
}

overlay.addEventListener('click', function(){
    // to close the modal window add hidden class
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

//event handling pressing a key
document.addEventListener('keydown',function(e){
    if(e.key=='Escape'){
        if(!modal.classList.contains('hidden')){
            modal.classList.add('hidden');
            overlay.classList.add('hidden'); 
        }      
    }
});

