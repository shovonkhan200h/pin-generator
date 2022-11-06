const randomNumber =()=>{
    document.getElementById(`generate-button`).addEventListener(`click`,()=>{
    let inputValue= document.getElementById(`generate-display`);
    let newValue = parseInt(inputValue.value);
    newValue = Math.floor(Math.random()*10000)
    for(let i=0; i<5; i++){
        const value = newValue+ i;
        inputValue.value= value;
    }    
    });
}

randomNumber()

const calcButton=()=>{
    const buttons = document.querySelectorAll(`.btns`);
    const calDisplay = document.getElementById(`calc-display`)
    buttons.forEach((button)=>{
        button.addEventListener(`click`, (e)=>{
            calDisplay.value += e.target.innerHTML;
        })
    })
};

calcButton()


const submitButton=()=>{
    document.getElementById(`submitButton`).addEventListener(`click`,()=>{
        
        const calNumber = document.getElementById(`calc-display`);
        const generateDispla= document.getElementById(`generate-display`);
        if( calNumber.value == generateDispla.value ){
            return document.getElementById(`matched`).style.display=`block`
            
        }
        else{
            return document.getElementById(`unmathced`).style.display=`block`
        }
    })

}

submitButton()


