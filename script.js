

function CalcScore(){
    var a101 = document.getElementById("1-1").value;
    var a102 = document.getElementById("1-2").value;
    var a103 = document.getElementById("1-3").value;
    var a201 = document.getElementById("2-1").value;
    var a202 = document.getElementById("2-2").value;
    var a203 = document.getElementById("2-3").value;
    var a301 = document.getElementById("3-1").value;
    var a302 = document.getElementById("3-2").value;
    var a303 = document.getElementById("3-3").value;
    
    var firstyear = Number(a101) + Number(a102) + Number(a103);
    var secondyear= Number(a201) + Number(a202) + Number(a203);
    var thirdyear= Number(a301) + Number(a302) + Number(a303);
    console.log((Number(firstyear)/3)*0.2);
    console.log((Number(secondyear)/3)*0.4);
    console.log((Number(secondyear)/3)*0.4);
    var total = ((Number(firstyear)/3) * (20/100)) + ((Number(secondyear)/3) * (40/100)) + ((Number(thirdyear)/3)* (40/100));
    

    document.getElementById("Pout").innerHTML = total;

}