window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const words = document.querySelector(".words");

recognition.interimResults = true; // allows you to see what you are saying as it happens

let p = document.createElement("p");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }

  p.textContent = transcript;
});

recognition.addEventListener("end", recognition.start);

recognition.start();
