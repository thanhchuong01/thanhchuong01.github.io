// Set the date we're counting down to
var countDownDate = new Date("Feb 17, 2026 00:00:00").getTime();

function addLeadingZero(num) {
    return num < 10 ? '0' + num : num;
}

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with respective ids
    document.getElementById("days-num").innerHTML = addLeadingZero(days);
    document.getElementById("hours-num").innerHTML = addLeadingZero(hours);
    document.getElementById("minutes-num").innerHTML = addLeadingZero(minutes);
    document.getElementById("seconds-num").innerHTML = addLeadingZero(seconds);

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "CHÚC MỪNG NĂM MỚI";
    }
}, 1000);

// YouTube Player Control
const iframe = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");
let isMuted = true;

// Function to send commands to the YouTube iframe
function sendCommandToPlayer(command) {
    iframe.contentWindow.postMessage(
        JSON.stringify({
            event: "command",
            func: command,
            args: []
        }),
        "*"
    );
}

// Mute/Unmute Button
muteBtn.addEventListener("click", function () {
    if (isMuted) {
        sendCommandToPlayer("unMute");
        muteBtn.textContent = "🔊";
    } else {
        sendCommandToPlayer("mute");
        muteBtn.textContent = "🔇";
    }
    isMuted = !isMuted;
});