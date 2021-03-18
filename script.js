console.log("Added Screen");
let screen=document.getElementById('screen');
button = document.querySelectorAll('button');
let screenValue='';
for(let item of button){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ',buttonText);
 
     if(buttonText=='='){
         screen.value= eval(screenValue);
     }
     else if(buttonText=='C'){

         screenValue=" ";
         screen.value = screenValue;
     }
     else if(buttonText=='<'){
         screen.value = screen.value.slice(0,-1);
     }
     else{
         screenValue += buttonText;
         screen.value = screenValue;
             }
            

             
    })
}