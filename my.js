function addition(){
    let first=+document.getElementById("firstnumber").value;
    let second=+document.getElementById("secondnumber").value;
    result=first+second;
    document.getElementById("result").innerHTML="Result Subtraction:"+result;
}

function subtraction(){
    let first=+document.getElementById("firstnumber").value;
    let second=+document.getElementById("secondnumber").value;
    result=first-second;
    document.getElementById("result").innerHTML="Result Subtraction:"+result;
}

function multiplication(){
    let first=+document.getElementById("firstnumber").value;
    let second=+document.getElementById("secondnumber").value;
    result=first*second;
    document.getElementById("result").innerHTML="Result Subtraction:"+result;
}

function divition(){
    let first=+document.getElementById("firstnumber").value;
    let second=+document.getElementById("secondnumber").value;
    result=first/second;
    document.getElementById("result").innerHTML="Result Subtraction:"+result;
}