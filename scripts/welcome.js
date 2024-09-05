document.addEventListener("DOMContentLoaded", function () {
    var text = "Welcome to my website, I'm Andrius  ! I'm 20 years old and I'm a computer science student. During my free time, I \
        love to play video games and code. Feel free to look around!";
    var delay = 50; // Delay between each character in milliseconds

    var welcomeText = document.getElementById("welcome-text");
    var index = 0;

    function typeWriter() {
        if (index < text.length) {
            welcomeText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, delay);
        }
    }

    typeWriter();
});