function getNumber(num){

    var result = document.getElementById("result")

   result.value += num;
}

function clearResult(){
    var result = document.getElementById("result")
    result.value = ""

}

function getResult(){
    var result = document.getElementById("result")
    result.value = eval(result.value)
}

function percent() {
    var result = document.getElementById("result")
    result.value = eval(result.value)/100
}  

function backSpace(){
    var result = document.getElementById('result')
    result.value = result.value.substring(0,result.value.length - 1);
}