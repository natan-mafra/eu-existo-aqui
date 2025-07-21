
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
    const countryDisplayName = wordElement.dataset.country; // Ex: "Canadá"

    // Lógica corrigida para garantir a remoção de acentos
    const countryKey = countryDisplayName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
        .replace(/\s+/g, ''); // Remove os espaços

    if (countryKey) {
        window.location.href = `pessoas.html?key=${encodeURIComponent(countryKey)}&name=${encodeURIComponent(countryDisplayName)}`;
    }
}

    if (countryKey) {
        window.location.href = `pessoas.html?key=${encodeURIComponent(countryKey)}&name=${encodeURIComponent(countryDisplayName)}`;
    }
}

index = Math.floor(Math.random() * languages.length);
showWord(); 

setInterval(showWord, 800);
