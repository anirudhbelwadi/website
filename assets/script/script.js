var countDownDate = new Date("March 19, 2021 09:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "00D 00H 00M 00S";
    }
}, 1000);