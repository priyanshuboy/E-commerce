const buttons = document.querySelectorAll(".btn");
const cartValue = document.getElementById("value"); 

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
     
    let count = parseInt(cartValue.textContent); 
    cartValue.textContent = count + 1; 
    if(cartValue.textContent>0){
        cartValue.style.color ='#FF0000'
       
    }
 const toast = document.getElementById('toast');
  toast.classList.add('show');

  // Hide toast after 2 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
  });
});
