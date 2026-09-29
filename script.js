const words = [
    "Aspiring Software Developer",
    "C Programmer",
    "Web Developer",
    "Problem Solver"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {

    currentWord = words[i];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentWord.substring(0, j++);
    } else {
        document.getElementById("typing").textContent =
            currentWord.substring(0, j--);
    }

    if (!isDeleting && j === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();