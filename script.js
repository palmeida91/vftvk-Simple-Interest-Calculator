console.log("hello");
function compute() {
    var principal = document.getElementById("principal").value;
    if (principal < 1) {
        alert("Please enter a positive number!");
        document.getElementById("principal").focus(); //turn the focus to the principal element
        return; //end the function before the calculations
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var result = document.getElementById("result");
    //using <mark> to highlight the numbers
    result.innerHTML = "If you deposit <mark>" + principal + "</mark><br>" + "at an interest rate of <mark>" + rate + "%</mark>.<br>" +
        "You will receive an amount of <mark>" + interest + "</mark>, <br>in the year <mark>" + year + "</mark>.";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval + "%";
    console.log("hello3");
}
