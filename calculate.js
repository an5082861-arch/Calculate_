let inputField = document.getElementById("input_number");
inputField.focus();
const front_text = inputField.selectionStart;
const back_text = inputField.selectionEnd;

function result(){
    let procent_num = inputField.value;
    procent_num = procent_num

        .replace(/(\d+(?:\.\d+)?)\s*([\+\-])\s*(\d+(?:\.\d+)?)%/g, '$1 $2 ($1 * 0.01 * $3)')
        .replace(/(\d+(?:\.\d+)?)%/g), '($1 * 0.01)';

    try{
        let result = eval(procent_num);
        inputField.value = result;
    }catch(error){
        inputField.value = "Ошибка";
    };
};

//Number
function zero(){
    inputField.value += "0";
    inputField.focus();
};

function one(){
    inputField.value += "1";
    inputField.focus();
};

function two(){
    inputField.value += "2";
    inputField.focus();
};

function three(){
    inputField.value += "3";
    inputField.focus();
};

function four(){
    inputField.value += "4";
    inputField.focus();
};

function five(){
    inputField.value += "5";
    inputField.focus();
};

function six(){
    inputField.value += "6";
    inputField.focus();
};

function seven(){
    inputField.value += "7";
    inputField.focus();
};

function eight(){
    inputField.value += "8";
    inputField.focus();
};

function nine(){
    inputField.value += "9";
    inputField.focus();
};

//matematic
function division(){
    inputField.value += "/";
    inputField.focus();
};

function multiplications(){
    inputField.value += "*";
    inputField.focus();
};

function procent(){
    inputField.value += "%";
    inputField.focus();
};

function plus(){
    inputField.value += "+";
    inputField.focus();
};

function minus(){
    inputField.value += "-";
    inputField.focus();
};

function decimal(){
    inputField.value += ".";
    inputField.focus();
};

function deleteResult(){
    inputField.value = "";
    count = 0;
    inputField.focus();
};

let count = 0;
function staples(){


    let text = inputField.value;
    let simbol = text.slice(-1);
    if(count > 0  && simbol != "(" && simbol != ""){
        inputField.value += ")";
        count -= 1;
    }else{
        inputField.value += "(";
        count++;
    };

    /*return function(){
        count++;
        return count;
    };*/
    console.log(count);



    inputField.focus();
};

function backspace(){
    let backspace = inputField.value;
    let back_simbol = backspace;
    if(backspace.includes("(", backspace.length -1) && count > 0){
        count -= 1;
    }else if(backspace.includes(")", backspace.length -1)){
        count += 1;
    };
    console.log(count);


    if(backspace.length > 0){
        inputField.value = backspace.slice(0, -1);
        inputField.focus();
    };
};




