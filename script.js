let index = 0;
const wordDiv = document.getElementById("word");

// Função responsável por exibir as palavras na tela
function showWord() {
    if (languages.length === 0) return;

    // Garante que a lista esteja em ordem alfabética para o ciclo
    languages.sort((a, b) => a.country.localeCompare(b.country));

    const current = languages[index];
    wordDiv.innerText = current.word.toLowerCase();
    
    // Armazena o nome original do país, com acentos, para a função de clique
    wordDiv.dataset.country = current.country; 

    index = (index + 1) % languages.length;
}

// Função de clique (redirect) com a lógica corrigida
function redirect() {
    const wordElement = document.getElementById("word");
    const countryDisplayName = wordElement.dataset.country; // Ex: "Canadá"

    // Lógica corrigida para garantir a remoção correta de acentos
    const countryKey = countryDisplayName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
        .replace(/\s+/g, ''); // Remove os espaços

    if (countryKey) {
        window.location.href = `pessoas.html?key=${encodeURIComponent(countryKey)}&name=${encodeURIComponent(countryDisplayName)}`;
    }
}

// Lógica para iniciar o site
// 1. Escolhe um índice aleatório para a primeira palavra
index = Math.floor(Math.random() * languages.length);

// 2. Mostra a primeira palavra imediatamente
showWord(); 

// 3. Inicia o ciclo de troca de palavras a cada 0.8 segundos
setInterval(showWord, 800);
