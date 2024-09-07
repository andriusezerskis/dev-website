document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to my website, I'm Andrius! I'm 20 years old and I'm a computer science student. During my free time, I love to play video games and code. Feel free to look around!";
    const delay = 50; // Delay between each character in milliseconds

    const welcomeText = document.getElementById("welcome-text");
    let index = 0;

    const typeWriter = () => {
        if (index < text.length) {
            welcomeText.innerHTML += text.charAt(index++);
            setTimeout(typeWriter, delay);
        }
    };

    typeWriter();
});