 let number = document.querySelector("#number");
 let numberValue = number.innerHTML
 let increase = document.querySelector("#increase");
 let decrease = document.querySelector("#decrease");
 let reset = document.querySelector("#reset");
 let multiply = document.querySelector("#multiply");
//  let value = 0;

const increaseEvent = (a)=>{
   return  a + 1; // თუ რეთურნია a ++ არ მუშაობს, ესე კიდე მუშაობს 
}

const decreaseEvent = (a) =>{
   if(a>0){
   return a - 1;
   }else{
    return  a=0
   } }
 const multiplyVariable = (a)=>{
   return  a * 10
 }
increase.addEventListener('click', ()=>{

   number.innerHTML = increaseEvent(Number(numberValue));
   numberValue = increaseEvent(Number(numberValue));
})
decrease.addEventListener('click',()=>{
   number.innerHTML = decreaseEvent(Number(numberValue));
   numberValue = decreaseEvent(Number(numberValue))
})

reset.addEventListener('click',()=>{
 number.innerHTML = 0;
 numberValue = 0;
})

multiply.addEventListener('click',()=>{
   number.innerHTML =multiplyVariable(Number(numberValue))
   numberValue = multiplyVariable(Number(numberValue))
})



