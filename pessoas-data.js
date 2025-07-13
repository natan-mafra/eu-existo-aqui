const pessoasPorPais = {
  brasil: [
    { name: "Bruna Benevides", img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Bruna_Benevides.jpg" },
    { name: "Erica Malunguinho", img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Erica_Malunguinho.jpg" },
    { name: "Linn da Quebrada", img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Linn_da_Quebrada.jpg" },
    { name: "Duda Salabert", img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Duda_Salabert_em_2023.jpg" }
  ],
  estadosunidos: [
    { name: "Laverne Cox", img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Laverne_Cox_2014.jpg" },
    { name: "Jazz Jennings", img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Jazz_Jennings_2014.jpg" },
    { name: "Janet Mock", img: "https://upload.wikimedia.org/wikipedia/commons/2/25/Janet_Mock_2014.jpg" },
    { name: "Angelica Ross", img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Angelica_Ross_2019.jpg" },
    { name: "Elliot Page", img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Elliot_Page_2021.jpg" }
  ],
  argentina: [
    { name: "Lohana Berkins", img: "https://upload.wikimedia.org/wikipedia/commons/0/06/Lohana_Berkins.jpg" },
    { name: "Diana Sacayán", img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Diana_Sacay%C3%A1n.jpg" },
    { name: "Alba Rueda", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Alba_Rueda.jpg" }
  ],
  canada: [
    { name: "Morgane Oger", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Morgane_Oger.jpg" }
  ],
  alemanha: [
    { name: "Nyke Slawik", img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Nyke_Slawik_2022.jpg" },
    { name: "Tessa Ganserer", img: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Tessa_Ganserer_2019.jpg" }
  ],
  franca: [
    { name: "Marie Cau", img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Marie_Cau.jpg" },
    { name: "Julia Serano", img: "https://upload.wikimedia.org/wikipedia/commons/6/67/Julia_Serano_2014.jpg" }
  ],
  reinounido: [
    { name: "April Ashley", img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/April_Ashley_2012.jpg" },
    { name: "Munroe Bergdorf", img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Munroe_Bergdorf.jpg" }
  ],
  australia: [
    { name: "Georgie Stone", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Georgie_Stone_2019.jpg" }
  ],
  mexico: [
    { name: "Jessica Marjane", img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Jessica_Marjane.jpg" }
  ],
  portugal: [
    { name: "Gisberta Salce", img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Gisberta_Salce_Junior.jpg" }
  ],

  // Demais países com placeholders gerados automaticamente abaixo
  afeganistao: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  africadosul: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  arabiasaudita: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  bangladesh: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  belgica: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  bolivia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  chile: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  china: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  colombia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  coreiadosul: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  costarica: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  cuba: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  dinamarca: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  egito: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  emiradosarabes: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  equador: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  espanha: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  filipinas: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  finlandia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  grecia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  guatemala: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  honduras: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  hungria: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  india: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  indonesia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  ira: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  iraque: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  irlanda: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  islandia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  italia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  japao: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  jordania: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  kuwait: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  libano: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  libia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  malasia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  marrocos: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  mocambique: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  nepal: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  nigeria: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  noruega: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  novazelandia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  paisesbaixos: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  paquistao: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  paraguai: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  peru: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  polonia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  qatar: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  quenia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  republicadominicana: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  republicatcheca: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  romenia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  russia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  senegal: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  serraleoa: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  singapura: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  siria: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  somalia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  srilanka: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  suecia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  suica: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  tailandia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  tanzania: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  tunisia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  turquia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  ucrania: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  uganda: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  uruguai: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  uzbequistao: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  venezuela: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  vietna: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  zambia: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }],
  zimbabue: [{ name: "Nome Exemplo", img: "https://via.placeholder.com/150" }]
};
