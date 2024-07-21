// DOM
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// Required
let string = "";
let arr = Array.from(buttons);

const operators = ['+', '-', '*', '/'];

arr.forEach(button => {
    
    // Add Click Event 
    button.addEventListener('click', (e) => {
    
        const value = e.target.innerHTML;

        if (value === '=') {
            // check for Empty String
            if (string.length === 0){
                input.value = "Error"
            }else{
                string = eval(string);
                input.value = string;
            }
        } else if (value === 'AC') {
            string = "";
            input.value = string;
        } else if (value === 'DE') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (value === "%") {
            string = (Number(string) / 100).toString();
            input.value = string;
        } else {
            // Check For Multiple Operations
            if (operators.includes(value) && operators.includes(string.slice(-1))) {
                string = string.slice(0, -1) + value; 
            } else {
                string += value;
            }
            input.value = string;
        }
        
    });
});
