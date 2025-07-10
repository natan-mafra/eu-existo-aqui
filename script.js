const words = [
  { text: "transsexual", lang: "en" },
  { text: "transexual", lang: "pt-br" },
  { text: "transexual", lang: "es" },
  { text: "transexuelle", lang: "fr" },
  { text: "トランスセクシュアル", lang: "ja" },
];

let current = 0;
const wordElement = document.getElementById("word");

function updateWord() {
  const word = words[current];
  wordElement.textContent = word.text;
  wordElement.href = `pages/${word.lang}.html`;
  current = (current + 1) % words.length;
}

updateWord();
setInterval(updateWord, 1000);