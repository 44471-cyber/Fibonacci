let input = document.getElementById("input");
let messageEl = document.getElementById("message");
let submit = document.getElementById("submit");
let clean = document.getElementById("clean");

function submitBtn() {
    let a = 0, b = 1;
    let temp;
    
    if (input.value === "") {
        messageEl.textContent = "Please enter a number.";
        setTimeout(() => { messageEl.textContent = "" }, 1000);
    } else if (input.value >= 1478) {
        messageEl.textContent = "I can not fulfill this request.";
        setTimeout(() => { messageEl.textContent = "" }, 1000);
    } else {
        for (let i = 0; i < input.value; i++) {
            messageEl.textContent += a + " ";
            temp = a;
            a = b;
            b += temp;
        }
        
        submit.style.display = "none";
        clean.style.display = "inline-block";
    }
}

function cleanBtn() {
    messageEl.textContent = "";
    clean.style.display = "none";
    submit.style.display = "inline-block";
}