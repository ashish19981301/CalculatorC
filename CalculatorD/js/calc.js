let numberCalc = document.getElementById('number_calc');
function display(num) {
    numberCalc.value += num;
}

function Calculate() {
    try {
        numberCalc.value = eval(numberCalc.value);
    }
    catch (err) {
        alert("Invalid!!");
    }
}

function Clear() {
    numberCalc.value = "";
}

function del() {
    numberCalc.value = numberCalc.value.slice(0, -1);
}