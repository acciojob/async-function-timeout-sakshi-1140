// Event listener for button click
const button =document.getElementById('btn')
button.addEventListener('click',submitfunction);

async function submitfunction(){
  const inputValue=document.getElementById('text').value;
  const delayValue=document.getElementById('delay').value;
  const output=document.getElementById('output');
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
