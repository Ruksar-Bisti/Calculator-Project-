const screen = document.getElementById("screen");
const button = document.querySelectorAll("button");
let string = "";
button.forEach(number=>{
    number.addEventListener('click', (Event)=>{
        let btnText = Event.target.innerText;
        screen.value += btnText;
        if (btnText == "AC") {
            string = "";
            screen.value=string;
            
        }
        else if (btnText == "sqrt") {
            string=Math.sqrt(string);
            screen.value=string;
            
        }
        else if (btnText == "="){
            string=eval(string);
            screen.value=string;

        }
        else if (btnText == "C"){
            string= string.toString().slice(0 , -1);
             screen.value=string;
        }

        else{
            string+=btnText;
            screen.value=string;

        }
    })
})