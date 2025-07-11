let index = 0;
const wordDiv = document.getElementById("word");

function showWord() {
    if (languages.length === 0) return;

    const current = languages[index];
    wordDiv.innerText = current.word.toLowerCase();
    wordDiv.dataset.country = current.country.toLowerCase();

    index = (index + 1) % languages.length;
}

function redirect() {
    const country = wordDiv.dataset.country;
    if (country) {
        window.location.href = "pessoas.html?country=" + encodeURIComponent(country);
    }
}

setInterval(showWord, 500);
showWord();
