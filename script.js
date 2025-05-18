const text = "Python Programmer & Web Developer | Problem Solver | Fast Learner";
const typedTextElement = document.getElementById("typed-text");
let index = 0;

function type() {
  if (index < text.length) {
    typedTextElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

window.onload = () => {
  type();
  console.log("Welcome to Raj’s portfolio! 🚀");
};
