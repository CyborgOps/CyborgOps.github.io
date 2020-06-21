$(document).ready(function () {
    $('#logo').click(function () {
        let msg = new SpeechSynthesisUtterance("Welcome to CyborgOps");
        msg.volume = 0.2;
        msg.rate = 1.2;
        msg.onend = (ev) => {
        // do something
        }
        window.speechSynthesis.speak(msg);
    })
});