let number = document.querySelectorAll(".btnNumber")    
let btnOperation = document.querySelectorAll(".operationCalculator")
// console.log(btn);
let showNumber = document.querySelector(".operation")
let showResult = document.querySelector(".result")
let DeleteBtn = document.querySelector(".delete")
let EqualBtn = document.querySelector(".equal")
let tempString = ""
let data = localStorage.getItem('HisResult')
let HisResult = []
let historyboard = document.querySelector(".historyanswer")
if (data !== null){
    HisResult = JSON.parse(data)
}
console.log(data);
answerBoard()

for (let i = 0; i < number.length; i++){
    number[i].addEventListener("click", function(){
        tempString = tempString + number[i].innerText;
        showNumber.innerHTML = tempString;
    })
} 

for (let k = 0; k <btnOperation.length; k++){
    btnOperation[k].addEventListener("click", function(){
        tempString =  tempString + " " + btnOperation[k].innerText + " ";
        showNumber.innerHTML = tempString;
    })
}
DeleteBtn.addEventListener("click", function(){
    let CheckString = tempString.charAt(tempString.length -1)
    if(CheckString == " "){
        tempString = tempString.substring(0, tempString.length -3)
    }else{
        tempString = tempString.substring(0, tempString.length -1)
    }
    showNumber.innerHTML = tempString;
    
})
EqualBtn.addEventListener("click", function() {
    let ArrayNumber = tempString.split(" ");
    if(ArrayNumber[1] == "+"){
        Plus(Number(ArrayNumber[0]), Number(ArrayNumber[2]))
    } else if(ArrayNumber[1] == "-"){
        Minus(Number(ArrayNumber[0]), Number(ArrayNumber[2]))
    } else if(ArrayNumber[1] == "x"){
        Product(Number(ArrayNumber[0]), Number(ArrayNumber[2]))
    }else if(ArrayNumber[1] == "/"){
        Divide(Number(ArrayNumber[0]), Number(ArrayNumber[2]))
    }
    HisResult.push(Number(showResult.innerText))
    localStorage.setItem("HisResult", JSON.stringify(HisResult))
    console.log(showResult);
    answerBoard()

})
function Plus(a, b) {
    showResult.innerText = a + b
    HisResult.push(showResult.value)
}
function Minus(a, b) {
    showResult.innerText = a - b
}
function Product(a, b) {
    showResult.innerText = a * b
}
function Divide(a, b) {
    showResult.innerText = a / b

}

function answerBoard (){
    historyboard.innerHTML = ""
 for(let i = 0; i < HisResult.length; i++){
    let Data2 = document.createElement("Data2")
    Data2.textContent = HisResult[i] 
    //  Data2.style.display = null
    historyboard.appendChild(Data2)  
        // historyboard.innerText += "<br>"
    let lineBreak = document.createElement("br");
        historyboard.appendChild(lineBreak);
 }
}