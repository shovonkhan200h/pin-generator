const btns =()=>{
  const btns = document.querySelectorAll(`.btns`);
  btns.forEach(element => {
      element.addEventListener('click',(e) => {
          const caclDisplay = document.getElementById(`calc-display`)
          const result = e.target.innerHTML
          caclDisplay.value += result;
      })
  });
}

btns()
let leftAttempts = 3;
const submitButton=()=>{
        const caclDisplay = document.getElementById(`calc-display`)
        const caclDisplayValue = parseInt(caclDisplay.value)
        const generateValue = document.getElementById(`generate-display`).value
        
        if(caclDisplayValue == generateValue){
              document.getElementById(`matched`).style.display = `block`
        }
        else {
             document.getElementById(`unmathced`).style.display = `block`
             leftAttempts--;
             if (leftAttempts > 0) {
              document.getElementById(`lefts`).textContent = `${leftAttempts} try left`;
            } else {
              document.getElementById(`lefts`).textContent = `0 try left`;
              document.getElementById('submitBtn').disabled = true;
            }
        }
       
}


const generateBtn =()=>{
           const randomNumber = parseInt(Math.random() * 9999)
           const generateDisplay = document.getElementById(`generate-display`)
           generateDisplay.value = randomNumber;
}

const singleRemove =()=>{
          const currentValue = document.getElementById(`calc-display`).value;
          const newValue = currentValue.slice(0, -1);;
          document.getElementById(`calc-display`).value = newValue;
 
}

const cBtn = ()=>{
  const currentValue = document.getElementById(`calc-display`).value =``
}
