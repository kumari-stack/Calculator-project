const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Mouse Click
buttons.forEach(button => {

button.addEventListener("click", () => {

let value = button.innerText;

if(value==="C"){

display.value="";

}

else if(value==="DEL"){

display.value=display.value.slice(0,-1);

}

else if(value==="="){

calculate();

}

else{

display.value+=value;

}

});

});

// Calculate Function
function calculate(){

try{

display.value=eval(display.value);

}

catch{

display.value="Error";

}

}

// Keyboard Support
document.addEventListener("keydown",(e)=>{

let key=e.key;

// Numbers
if((key>='0' && key<='9') ||
key==='+' ||
key==='-' ||
key==='*' ||
key==='/' ||
key==='.' ||
key==='(' ||
key===')'){

display.value+=key;

}

// Enter
else if(key==="Enter"){

calculate();

}

// Backspace
else if(key==="Backspace"){

display.value=display.value.slice(0,-1);

}

// Escape
else if(key==="Escape"){

display.value="";

}

});