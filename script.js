// Event listener for button click
const button =document.getElementByID('btn')
button.addEventListener('click',submitfunction);

async function submitfunction(){
  const inputValue=document.getElementByID('text').value;
  const delayValue=document.getElementByID('delay').value;
  const output=document.getElementByID('output');
   //output.textContent=5;
  await delay(Number(delayValue))
  
  //changed value
  output.textContent=inputValue;
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// delay function in detail

// function delay(ms){
//   const myPromise= new Promise(function(resolve){
//     setTimeout(resolve,ms);
//   })
// }