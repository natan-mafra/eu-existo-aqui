const pessoasPorPais = {
  // Países com pessoas encontradas
  "alemanha": [
    { "name": "Nyke Slawik", "img": "images/nyke-slawik.webp" },
    { "name": "Tessa Ganserer", "img": "images/tessa-ganserer.webp" }
  ],
  "argentina": [
    { "name": "Flor de la V", "img": "images/flor-de-la-v.webp" },
    { "name": "Mariana Genesio Peña", "img": "images/mariana-genesio-pena.webp" },
    { "name": "La Tota Santillán", "img": "images/la-tota-santillan.webp" }
  ],
  "australia": [
    { "name": "Georgie Stone", "img": "images/georgie-stone.webp" },
    { "name": "Andreja Pejić", "img": "images/andreja-pejic.webp" }
  ],
  "belgica": [
    { "name": "Petra De Sutter", "img": "images/petra-de-sutter.webp" },
    { "name": "Bo Van Spilbeeck", "img": "images/bo-van-spilbeeck.webp" }
  ],
  "brasil": [
    { "name": "Erika Hilton", "img": "images/erika-hilton.webp" },
    { "name": "Linn da Quebrada", "img": "images/linn-da-quebrada.webp" },
    { "name": "Laerte Coutinho", "img": "images/laerte-coutinho.webp"},
    { "name": "Duda Salabert", "img": "images/duda-salabert.webp" }
  ],
  "canada": [
    { "name": "Elliot Page", "img": "images/elliot-page.webp" },
    { "name": "Gigi Gorgeous", "img": "images/gigi-gorgeous.webp" }
  ],
  "chile": [
    { "name": "Daniela Vega", "img": "images/daniela-vega.webp" },
    { "name": "Lux Pascal", "img": "images/lux-pascal.webp" }
  ],
  "colombia": [ // Novo!
    { "name": "Brigitte Baptiste", "img": "images/brigitte-baptiste.webp" },
    { "name": "Mara Cifuentes", "img": "images/mara-cifuentes.webp" }
  ],
  "dinamarca": [ // Novo!
    { "name": "Lili Elbe", "img": "images/lili-elbe.webp" }
  ],
  "espanha": [
    { "name": "Carla Antonelli", "img": "images/carla-antonelli.webp" },
    { "name": "Abril Zamora", "img": "images/abril-zamora.webp" }
  ],
  "estadosunidos": [
    { "name": "Laverne Cox", "img": "images/laverne-cox.webp" },
    { "name": "Hunter Schafer", "img": "images/hunter-schafer.webp" },
    { "name": "Indya Moore", "img": "images/indya-moore.webp" },
    { "name": "Mj Rodriguez", "img": "images/mj-rodriguez.webp" }
  ],
  "filipinas": [ // Novo!
    { "name": "Geraldine Roman", "img": "images/geraldine-roman.webp" }
  ],
  "finlandia": [ // Novo!
    { "name": "Marja-Sisko Aalto", "img": "images/marja-sisko-aalto.webp" }
  ],
  "franca": [
      { "name": "Marie Cau", "img": "images/marie-cau.webp" }
  ],
  "india": [
      { "name": "Gauri Sawant", "img": "images/gauri-sawant.webp" },
      { "name": "Laxmi Narayan Tripathi", "img": "images/laxmi-narayan-tripathi.webp" }
  ],
  "irlanda": [ // Novo!
      { "name": "Lydia Foy", "img": "images/lydia-foy.webp" },
      { "name": "Sara R Phillips", "img": "images/sara-r-phillips.webp" }
  ],
  "islandia": [ // Novo!
      { "name": "Ólöf Bjarki Antons", "img": "images/olof-bjarki-antons.webp" }
  ],
  "italia": [
      { "name": "Vladimir Luxuria", "img": "images/vladimir-luxuria.webp" }
  ],
  "japao": [
      { "name": "Tomoya Hosoda", "img": "images/tomoya-hosoda.webp" }
  ],
  "mexico": [
      { "name": "Victoria Volkova", "img": "images/victoria-volkova.webp" },
      { "name": "Morganna Love", "img": "images/morganna-love.webp" }
  ],
  "novazelandia": [
      { "name": "Georgina Beyer", "img": "images/georgina-beyer.webp" }
  ],
  "paisesbaixos": [ // Novo!
      { "name": "Lisa van Ginneken", "img": "images/lisa-van-ginneken.webp" }
  ],
  "paquistao": [ // Novo!
      { "name": "Marvia Malik", "img": "images/marvia-malik.webp" },
      { "name": "Nayyab Ali", "img": "images/nayyab-ali.webp" }
  ],
  "polonia": [
      { "name": "Anna Grodzka", "img": "images/anna-grodzka.webp" }
  ],
  "portugal": [ // Novo!
      { "name": "Marina Machete", "img": "images/marina-machete.webp" },
      { "name": "Maria João Vaz", "img": "images/maria-joao-vaz.webp" }
  ],
  "reinounido": [
    { "name": "Munroe Bergdorf", "img": "images/munroe-bergdorf.webp"},
    { "name": "Shon Faye", "img": "images/shon-faye.webp"},
    { "name": "Travis Alabanza", "img": "images/travis-alabanza.webp" }
  ],
  "suecia": [ // Novo!
    { "name": "Lina Axelsson Kihlblom", "img": "images/lina-axelsson-kihlblom.webp" },
    { "name": "Saga Becker", "img": "images/saga-becker.webp" }
  ],
  "tailandia": [ // Novo!
    { "name": "Treechada Petcharat", "img": "images/treechada-petcharat.webp" },
    { "name": "Parinya Charoenphol", "img": "images/parinya-charoenphol.webp" }
  ],
  "uruguai": [ // Novo!
    { "name": "Gloria Meneses", "img": "images/gloria-meneses.webp" }
  ],
  "venezuela": [
      { "name": "Tamara Adrián", "img": "images/tamara-adrian.webp" }
  ],
  
  // Países vazios, prontos para serem preenchidos
  "afeganistao": [], "africadosul": [], "arabiasaudita": [], "austria": [], "bangladesh": [], "bolivia": [], "china": [], "coreiadosul": [], "costarica": [], "cuba": [], "egito": [], "emiradosarabes": [], "equador": [], "grecia": [], "guatemala": [], "honduras": [], "hungria": [], "indonesia": [], "ira": [], "iraque": [], "jordania": [], "kuwait": [], "libano": [], "libia": [], "malasia": [], "marrocos": [], "mocambique": [], "nepal": [], "nigeria": [], "noruega": [], "paraguai": [], "peru": [], "qatar": [], "quenia": [], "republicadominicana": [], "republicatcheca": [], "romenia": [], "russia": [], "senegal": [], "serraleoa": [], "singapura": [], "siria": [], "somalia": [], "srilanka": [], "suica": [], "tanzania": [], "tunisia": [], "turquia": [], "ucrania": [], "uganda": [], "uzbequistao": [], "vietna": [], "zambia": [], "zimbabue": []
};
