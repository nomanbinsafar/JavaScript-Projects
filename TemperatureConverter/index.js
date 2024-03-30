
const input=document.getElementById("input");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelcius=document.getElementById("toCelcius");
const result=document.getElementById("result");
let ans;


function convert() {
    if (toFahrenheit.checked) {
        ans=Number(input.value);
        ans=(ans*(9/5)+32);
        result.textContent = ans.toFixed(1)+"°F";
    } else if (toCelcius.checked) {
        ans=Number(input.value);
        ans=(5/9)*(ans-32);
        result.textContent = ans.toFixed(1)+"°C";
    } else {
        result.textContent = "select a unit";
    }
}


