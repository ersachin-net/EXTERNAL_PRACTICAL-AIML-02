function checkArmstrong() {
    let num = parseInt(document.getElementById("number").value);
    let originalNum = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit ** 3;
        num = Math.floor(num / 10);
    }

    let result = document.getElementById("result");

    if (sum === originalNum) {
        result.innerHTML = originalNum + " is an Armstrong Number ✅";
        result.style.color = "green";
    } else {
        result.innerHTML = originalNum + " is Not an Armstrong Number ❌";
        result.style.color = "red";
    }
}