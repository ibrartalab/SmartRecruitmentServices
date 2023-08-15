//Removing a class from the button.


// function matching(x){
    
//     let ch = document.querySelector('.ch-box>a');

// if(x.matches){
   
//     ch.classList.remove('btn-login-signup');
// }
// }
// var x = window.matchMedia("(max-width:479px)");
// matching(x);

   //Toggle button functionality
   const toggleButton = document.getElementById('toggle-btn');
   let navLinks = document.getElementById('items');

   toggleButton.addEventListener('click', () => {
     navLinks.classList.toggle('active');
   })
