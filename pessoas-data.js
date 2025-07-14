const pessoasPorPais = {
  // Países com pessoas encontradas
  "alemanha": [
    { "name": "Nyke Slawik", "img": "images/nyke-slawik.jpg" },
    { "name": "Tessa Ganserer", "img": "images/tessa-ganserer.jpg" }
  ],
  "argentina": [
    { "name": "Flor de la V", "img": "images/flor-de-la-v.jpg" },
    { "name": "Mariana Genesio Peña", "img": "images/mariana-genesio-pena.jpg" },
    { "name": "La Tota Santillán", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Tota_Santillan_en_Showmatch_2017.jpg/440px-Tota_Santillan_en_Showmatch_2017.jpg" }
  ],
  "australia": [
    { "name": "Georgie Stone", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Georgie_Stone_2019.jpg/440px-Georgie_Stone_2019.jpg" },
    { "name": "Andreja Pejić", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Andreja_Pejic_2016.jpg/440px-Andreja_Pejic_2016.jpg" }
  ],
  "belgica": [
    { "name": "Petra De Sutter", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Petra_De_Sutter_2020.jpg/440px-Petra_De_Sutter_2020.jpg" },
    { "name": "Bo Van Spilbeeck", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Bo_Van_Spilbeeck_2018.jpg/440px-Bo_Van_Spilbeeck_2018.jpg" }
  ],
  "brasil": [
    { "name": "Erika Hilton", "img": "images/erika-hilton.jpg" },
    { "name": "Linn da Quebrada", "img": "images/linn-da-quebrada.jpg" },
    { "name": "Laerte Coutinho", "img": "images/laerte-coutinho.jpg"},
    { "name": "Duda Salabert", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Duda_Salabert_em_2022.jpg/440px-Duda_Salabert_em_2022.jpg" }
  ],
  "canada": [
    { "name": "Elliot Page", "img": "images/elliot-page.jpg" },
    { "name": "Gigi Gorgeous", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Gigi_Gorgeous_2016.jpg/440px-Gigi_Gorgeous_2016.jpg" }
  ],
  "chile": [
    { "name": "Daniela Vega", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Daniela_Vega_Premios_Caleuche_2018.jpg/440px-Daniela_Vega_Premios_Caleuche_2018.jpg" },
    { "name": "Lux Pascal", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Lux_Pascal_Premios_Caleuche_2023.jpg/440px-Lux_Pascal_Premios_Caleuche_2023.jpg" }
  ],
  "espanha": [
    { "name": "Carla Antonelli", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Carla_Antonelli_2019.jpg/440px-Carla_Antonelli_2019.jpg" },
    { "name": "Abril Zamora", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Abril_Zamora_-_Fotogramas_de_Plata_2021.jpg/440px-Abril_Zamora_-_Fotogramas_de_Plata_2021.jpg" }
  ],
  "estadosunidos": [
    { "name": "Laverne Cox", "img": "images/laverne-cox.jpg" },
    { "name": "Hunter Schafer", "img": "images/hunter-schafer.jpg" },
    { "name": "Indya Moore", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Indya_Moore_2019_by_Andy_Leung.jpg/440px-Indya_Moore_2019_by_Andy_Leung.jpg" },
    { "name": "Mj Rodriguez", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mj_Rodriguez_at_the_2019_PaleyFest.jpg/440px-Mj_Rodriguez_at_the_2019_PaleyFest.jpg" }
  ],
  "franca": [
      { "name": "Marie Cau", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Marie_Cau_2020.jpg/440px-Marie_Cau_2020.jpg" }
  ],
  "india": [
      { "name": "Gauri Sawant", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Gauri_Sawant_at_the_launch_of_Vicks%27s_%27Touch_of_Care%27_campaign.jpg/440px-Gauri_Sawant_at_the_launch_of_Vicks%27s_%27Touch_of_Care%27_campaign.jpg" },
      { "name": "Laxmi Narayan Tripathi", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Laxmi_Narayan_Tripathi_at_Godrej_India_Culture_Lab.jpg/440px-Laxmi_Narayan_Tripathi_at_Godrej_India_Culture_Lab.jpg" }
  ],
  "italia": [
      { "name": "Vladimir Luxuria", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vladimir_Luxuria_-_3.jpg/440px-Vladimir_Luxuria_-_3.jpg" }
  ],
  "japao": [
      { "name": "Tomoya Hosoda", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tomoya_Hosoda_2017.jpg/440px-Tomoya_Hosoda_2017.jpg" }
  ],
  "mexico": [
      { "name": "Victoria Volkova", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Victoria_Volkova_2022.jpg/440px-Victoria_Volkova_2022.jpg" },
      { "name": "Morganna Love", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Morganna_Love_2018.jpg/440px-Morganna_Love_2018.jpg" }
  ],
  "novazelandia": [
      { "name": "Georgina Beyer", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Georgina_Beyer_2005.jpg/440px-Georgina_Beyer_2005.jpg" }
  ],
  "polonia": [
      { "name": "Anna Grodzka", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Anna_Grodzka_2012.jpg/440px-Anna_Grodzka_2012.jpg" }
  ],
  "reinounido": [
    { "name": "Munroe Bergdorf", "img": "images/munroe-bergdorf.jpg"},
    { "name": "Shon Faye", "img": "images/shon-faye.jpg"},
    { "name": "Travis Alabanza", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Travis_Alabanza_2020.jpg/440px-Travis_Alabanza_2020.jpg" }
  ],
  "venezuela": [
      { "name": "Tamara Adrián", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tamara_Adri%C3%A1n_2022.jpg/440px-Tamara_Adri%C3%A1n_2022.jpg" }
  ],
  
  // Países sem pessoas publicamente conhecidas encontradas (ou onde a informação não é segura/verificável)
  "afeganistao": [], "africadosul": [], "arabiasaudita": [], "austria": [], "bangladesh": [], "bolivia": [], "china": [], "colombia": [], "coreiadosul": [], "costarica": [], "cuba": [], "dinamarca": [], "egito": [], "emiradosarabes": [], "equador": [], "filipinas": [], "finlandia": [], "grecia": [], "guatemala": [], "honduras": [], "hungria": [], "indonesia": [], "ira": [], "iraque": [], "irlanda": [], "islandia": [], "jordania": [], "kuwait": [], "libano": [], "libia": [], "malasia": [], "marrocos": [], "mocambique": [], "nepal": [], "nigeria": [], "noruega": [], "paisesbaixos": [], "paquistao": [], "paraguai": [], "peru": [], "portugal": [], "qatar": [], "quenia": [], "republicadominicana": [], "republicatcheca": [], "romenia": [], "russia": [], "senegal": [], "serraleoa": [], "singapura": [], "siria": [], "somalia": [], "srilanka": [], "suecia": [], "suica": [], "tailandia": [], "tanzania": [], "tunisia": [], "turquia": [], "ucrania": [], "uganda": [], "uruguai": [], "uzbequistao": [], "vietna": [], "zambia": [], "zimbabue": []
};
