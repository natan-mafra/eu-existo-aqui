
let index = 0;
const wordDiv = document.getElementById("word");

function showWord() {
    if (languages.length === 0) return;

    languages.sort((a, b) => a.country.localeCompare(b.country));

    const current = languages[index];
    wordDiv.innerText = current.word.toLowerCase();
    wordDiv.dataset.country = current.country; 

    index = (index + 1) % languages.length;
}


function redirect() {
    const wordElement = document.getElementById("word");
    const countryKey = wordElement.dataset.country.toLowerCase().replace(/\s+/g, '').replace(/ç/g, 'c').replace(/ã/g, 'a');
    const countryDisplayName = wordElement.dataset.country;

    if (countryKey) {
        window.location.href = `pessoas.html?key=${encodeURIComponent(countryKey)}&name=${encodeURIComponent(countryDisplayName)}`;
    }
}

index = Math.floor(Math.random() * languages.length);
showWord(); 

setInterval(showWord, 800);
