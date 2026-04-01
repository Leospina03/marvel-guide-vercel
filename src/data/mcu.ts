export type Language = "it" | "en";
export type TipoTitolo = "film" | "serie" | "film TV";

export type LocalizedText = {
  it: string;
  en: string;
};

export interface MCUItem {
  id: string;
  titolo: string | LocalizedText;
  titoloOriginale: string;
  anno: number;
  tipo: TipoTitolo;
  fase: number;
  saga: string | LocalizedText;
  ordineUscita: number;
  ordineCronologico: number;
  essenziale: boolean;
  vedereFirst: string[];
  importanza: string | LocalizedText;
  descrizione: string | LocalizedText;
  durata: string;
  piattaforma: string;
}

export function getLocalizedText(
  value: string | LocalizedText,
  language: Language
): string {
  if (typeof value === "string") {
    return value;
  }

  return value[language] ?? value.it;
}

export const mcuData: MCUItem[] = [
  {
    id: "cap-america-1",
    titolo: {
      it: "Captain America: Il Primo Vendicatore",
      en: "Captain America: The First Avenger"
    },
    titoloOriginale: "Captain America: The First Avenger",
    anno: 2011,
    tipo: "film",
    fase: 1,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 5,
    ordineCronologico: 1,
    essenziale: true,
    vedereFirst: [],
    importanza: {
      it: "Introduce Steve Rogers e il Tesseract. Fondamentale per capire HYDRA e le origini degli Avengers.",
      en: "Introduces Steve Rogers and the Tesseract. Essential for understanding HYDRA and the origins of the Avengers."
    },
    descrizione: {
      it: "Rifiutato dall'esercito a causa della sua gracile costituzione, Steve Rogers si sottopone a un esperimento top secret che lo trasforma nel supersoldato Captain America.",
      en: "Rejected by the army because of his frail build, Steve Rogers undergoes a top-secret experiment that turns him into the super-soldier Captain America."
    },
    durata: "2h 4m",
    piattaforma: "Disney+"
  },
  {
    id: "cap-marvel",
    titolo: {
      it: "Captain Marvel",
      en: "Captain Marvel"
    },
    titoloOriginale: "Captain Marvel",
    anno: 2019,
    tipo: "film",
    fase: 3,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 21,
    ordineCronologico: 2,
    essenziale: true,
    vedereFirst: [],
    importanza: {
      it: "Introduce Carol Danvers e spiega l'origine di S.H.I.E.L.D. e del cercapersone di Nick Fury.",
      en: "Introduces Carol Danvers and explains the origin of S.H.I.E.L.D. and Nick Fury's pager."
    },
    descrizione: {
      it: "Ambientato negli anni '90, il film segue Carol Danvers mentre diventa una degli eroi più potenti dell'universo quando la Terra si ritrova nel mezzo di una guerra galattica.",
      en: "Set in the 1990s, the film follows Carol Danvers as she becomes one of the most powerful heroes in the universe while Earth is caught in the middle of a galactic war."
    },
    durata: "2h 3m",
    piattaforma: "Disney+"
  },
  {
    id: "iron-man-1",
    titolo: {
      it: "Iron Man",
      en: "Iron Man"
    },
    titoloOriginale: "Iron Man",
    anno: 2008,
    tipo: "film",
    fase: 1,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 1,
    ordineCronologico: 3,
    essenziale: true,
    vedereFirst: [],
    importanza: {
      it: "Il film che ha lanciato il MCU. Tony Stark diventa Iron Man e getta le basi di tutto l'universo cinematografico Marvel.",
      en: "The film that launched the MCU. Tony Stark becomes Iron Man and lays the foundation for the entire Marvel cinematic universe."
    },
    descrizione: {
      it: "Il miliardario genio e inventore Tony Stark viene rapito e costretto a costruire un'arma devastante. Invece, usa la sua intelligenza per creare un'armatura high-tech e scappare.",
      en: "Billionaire genius and inventor Tony Stark is kidnapped and forced to build a devastating weapon. Instead, he uses his intelligence to create a high-tech suit of armor and escape."
    },
    durata: "2h 6m",
    piattaforma: "Disney+"
  },
  {
    id: "iron-man-2",
    titolo: {
      it: "Iron Man 2",
      en: "Iron Man 2"
    },
    titoloOriginale: "Iron Man 2",
    anno: 2010,
    tipo: "film",
    fase: 1,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 3,
    ordineCronologico: 4,
    essenziale: false,
    vedereFirst: ["Iron Man"],
    importanza: {
      it: "Introduce Natasha Romanoff/Black Widow e approfondisce il mondo di Stark e S.H.I.E.L.D.",
      en: "Introduces Natasha Romanoff/Black Widow and expands Stark's world and S.H.I.E.L.D."
    },
    descrizione: {
      it: "Con il mondo ora a conoscenza della sua doppia vita, Tony Stark affronta le pressioni del governo e una nuova letale minaccia dal suo passato.",
      en: "With the world now aware of his double life, Tony Stark faces pressure from the government and a deadly new threat from his past."
    },
    durata: "2h 4m",
    piattaforma: "Disney+"
  },
  {
    id: "hulk",
    titolo: {
      it: "L'Incredibile Hulk",
      en: "The Incredible Hulk"
    },
    titoloOriginale: "The Incredible Hulk",
    anno: 2008,
    tipo: "film",
    fase: 1,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 2,
    ordineCronologico: 5,
    essenziale: false,
    vedereFirst: [],
    importanza: {
      it: "Introduce Bruce Banner/Hulk. Meno connesso agli altri film, ma parte della Fase 1.",
      en: "Introduces Bruce Banner/Hulk. Less connected to the other films, but still part of Phase 1."
    },
    descrizione: {
      it: "Bruce Banner è in fuga, cercando una cura per la sua mutazione che lo trasforma in un mostro verde quando si arrabbia.",
      en: "Bruce Banner is on the run, searching for a cure for the mutation that turns him into a green monster whenever he gets angry."
    },
    durata: "1h 52m",
    piattaforma: "Acquisto/Noleggio"
  },
  {
    id: "thor-1",
    titolo: {
      it: "Thor",
      en: "Thor"
    },
    titoloOriginale: "Thor",
    anno: 2011,
    tipo: "film",
    fase: 1,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 4,
    ordineCronologico: 6,
    essenziale: true,
    vedereFirst: [],
    importanza: {
      it: "Introduce il regno di Asgard, Thor e Loki. Fondamentale per il lato cosmico del MCU.",
      en: "Introduces the realm of Asgard, Thor, and Loki. Essential for the cosmic side of the MCU."
    },
    descrizione: {
      it: "Il potente e arrogante dio Thor viene esiliato da Asgard e inviato sulla Terra per vivere tra gli umani, dove imparerà cosa serve per essere un vero eroe.",
      en: "The powerful and arrogant god Thor is cast out of Asgard and sent to Earth to live among humans, where he will learn what it takes to be a true hero."
    },
    durata: "1h 55m",
    piattaforma: "Disney+"
  },
  {
    id: "avengers-1",
    titolo: {
      it: "The Avengers",
      en: "The Avengers"
    },
    titoloOriginale: "The Avengers",
    anno: 2012,
    tipo: "film",
    fase: 1,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 6,
    ordineCronologico: 7,
    essenziale: true,
    vedereFirst: ["Iron Man", "Thor", "Captain America: Il Primo Vendicatore"],
    importanza: {
      it: "La prima grande unione degli eroi Marvel. Introduce Thanos e i Chitauri.",
      en: "The first major team-up of Marvel heroes. Introduces Thanos and the Chitauri."
    },
    descrizione: {
      it: "Gli eroi più potenti della Terra devono riunirsi per imparare a combattere come una squadra e fermare il malvagio Loki e il suo esercito alieno.",
      en: "Earth's mightiest heroes must come together, learn to fight as a team, and stop the evil Loki and his alien army."
    },
    durata: "2h 23m",
    piattaforma: "Disney+"
  },
  {
    id: "thor-2",
    titolo: {
      it: "Thor: Il Mondo Oscuro",
      en: "Thor: The Dark World"
    },
    titoloOriginale: "Thor: The Dark World",
    anno: 2013,
    tipo: "film",
    fase: 2,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 8,
    ordineCronologico: 8,
    essenziale: false,
    vedereFirst: ["Thor", "The Avengers"],
    importanza: {
      it: "Introduce l'Etere (Pietra della Realtà). Utile ma non fondamentale.",
      en: "Introduces the Aether (the Reality Stone). Useful, but not essential."
    },
    descrizione: {
      it: "Thor intraprende un viaggio pericoloso per fermare Malekith e gli Elfi Oscuri, che vogliono far sprofondare l'universo nell'oscurità.",
      en: "Thor embarks on a dangerous journey to stop Malekith and the Dark Elves, who want to plunge the universe into darkness."
    },
    durata: "1h 52m",
    piattaforma: "Disney+"
  },
  {
    id: "iron-man-3",
    titolo: {
      it: "Iron Man 3",
      en: "Iron Man 3"
    },
    titoloOriginale: "Iron Man 3",
    anno: 2013,
    tipo: "film",
    fase: 2,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 7,
    ordineCronologico: 9,
    essenziale: false,
    vedereFirst: ["The Avengers"],
    importanza: {
      it: "Approfondisce il PTSD di Tony Stark dopo gli eventi di New York.",
      en: "Explores Tony Stark's PTSD after the events of New York."
    },
    descrizione: {
      it: "Quando il suo mondo viene distrutto da un formidabile terrorista chiamato il Mandarino, Tony Stark inizia un'odissea straziante.",
      en: "When his world is destroyed by a formidable terrorist known as the Mandarin, Tony Stark begins a harrowing odyssey."
    },
    durata: "2h 10m",
    piattaforma: "Disney+"
  },
  {
    id: "cap-america-2",
    titolo: {
      it: "Captain America: The Winter Soldier",
      en: "Captain America: The Winter Soldier"
    },
    titoloOriginale: "Captain America: The Winter Soldier",
    anno: 2014,
    tipo: "film",
    fase: 2,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 9,
    ordineCronologico: 10,
    essenziale: true,
    vedereFirst: ["The Avengers", "Captain America: Il Primo Vendicatore"],
    importanza: {
      it: "Rivoluziona il MCU: svela la caduta di S.H.I.E.L.D. e HYDRA al suo interno.",
      en: "Transforms the MCU by revealing the fall of S.H.I.E.L.D. and HYDRA within it."
    },
    descrizione: {
      it: "Mentre fatica ad adattarsi al mondo moderno, Steve Rogers si allea con la Vedova Nera e Falcon per sventare una cospirazione mortale.",
      en: "While struggling to adapt to the modern world, Steve Rogers teams up with Black Widow and Falcon to uncover a deadly conspiracy."
    },
    durata: "2h 16m",
    piattaforma: "Disney+"
  },
  {
    id: "gotg-1",
    titolo: {
      it: "Guardiani della Galassia",
      en: "Guardians of the Galaxy"
    },
    titoloOriginale: "Guardians of the Galaxy",
    anno: 2014,
    tipo: "film",
    fase: 2,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 10,
    ordineCronologico: 11,
    essenziale: true,
    vedereFirst: [],
    importanza: {
      it: "Apre il lato cosmico del MCU e introduce la Pietra del Potere.",
      en: "Opens up the cosmic side of the MCU and introduces the Power Stone."
    },
    descrizione: {
      it: "Un gruppo di criminali intergalattici deve unire le forze per fermare un guerriero fanatico che minaccia di distruggere l'universo.",
      en: "A group of intergalactic criminals must join forces to stop a fanatical warrior who threatens to destroy the universe."
    },
    durata: "2h 1m",
    piattaforma: "Disney+"
  },
  {
    id: "gotg-2",
    titolo: {
      it: "Guardiani della Galassia Vol. 2",
      en: "Guardians of the Galaxy Vol. 2"
    },
    titoloOriginale: "Guardians of the Galaxy Vol. 2",
    anno: 2017,
    tipo: "film",
    fase: 3,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 15,
    ordineCronologico: 12,
    essenziale: false,
    vedereFirst: ["Guardiani della Galassia"],
    importanza: {
      it: "Approfondisce il passato di Star-Lord e la famiglia dei Guardiani. Introduce Mantis.",
      en: "Explores Star-Lord's past and the Guardians' family dynamic. Introduces Mantis."
    },
    descrizione: {
      it: "I Guardiani devono lottare per mantenere unita la loro famiglia appena trovata, mentre svelano il mistero della vera discendenza di Peter Quill.",
      en: "The Guardians must fight to keep their newly found family together while unraveling the mystery of Peter Quill's true parentage."
    },
    durata: "2h 16m",
    piattaforma: "Disney+"
  },
  {
    id: "avengers-2",
    titolo: {
      it: "Avengers: Age of Ultron",
      en: "Avengers: Age of Ultron"
    },
    titoloOriginale: "Avengers: Age of Ultron",
    anno: 2015,
    tipo: "film",
    fase: 2,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 11,
    ordineCronologico: 13,
    essenziale: true,
    vedereFirst: ["The Avengers", "Thor: Il Mondo Oscuro"],
    importanza: {
      it: "Introduce Visione, Wanda Maximoff e la Pietra della Mente. Getta le basi per Civil War.",
      en: "Introduces Vision, Wanda Maximoff, and the Mind Stone. Lays the groundwork for Civil War."
    },
    descrizione: {
      it: "Quando Tony Stark cerca di avviare un programma di mantenimento della pace dormiente, le cose si complicano e gli Avengers devono fermare il malvagio Ultron.",
      en: "When Tony Stark attempts to launch a dormant global peacekeeping program, things go wrong and the Avengers must stop the evil Ultron."
    },
    durata: "2h 21m",
    piattaforma: "Disney+"
  },
  {
    id: "ant-man-1",
    titolo: {
      it: "Ant-Man",
      en: "Ant-Man"
    },
    titoloOriginale: "Ant-Man",
    anno: 2015,
    tipo: "film",
    fase: 2,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 12,
    ordineCronologico: 14,
    essenziale: false,
    vedereFirst: ["Avengers: Age of Ultron"],
    importanza: {
      it: "Introduce Scott Lang e il Regno Quantico, concetto fondamentale per Endgame.",
      en: "Introduces Scott Lang and the Quantum Realm, a concept that becomes essential in Endgame."
    },
    descrizione: {
      it: "Dotato di una tuta che gli permette di rimpicciolirsi ma accrescere la sua forza, il ladro Scott Lang deve aiutare il suo mentore, il Dr. Hank Pym.",
      en: "Armed with a suit that allows him to shrink while increasing his strength, thief Scott Lang must help his mentor, Dr. Hank Pym."
    },
    durata: "1h 57m",
    piattaforma: "Disney+"
  },
  {
    id: "cap-america-3",
    titolo: {
      it: "Captain America: Civil War",
      en: "Captain America: Civil War"
    },
    titoloOriginale: "Captain America: Civil War",
    anno: 2016,
    tipo: "film",
    fase: 3,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 13,
    ordineCronologico: 15,
    essenziale: true,
    vedereFirst: ["Avengers: Age of Ultron", "Captain America: The Winter Soldier"],
    importanza: {
      it: "Divide gli Avengers. Introduce Black Panther e Spider-Man nel MCU.",
      en: "Splits the Avengers apart. Introduces Black Panther and Spider-Man into the MCU."
    },
    descrizione: {
      it: "L'interferenza politica nelle attività degli Avengers causa una spaccatura tra gli ex alleati Captain America e Iron Man.",
      en: "Political interference in the Avengers' activities causes a rift between former allies Captain America and Iron Man."
    },
    durata: "2h 27m",
    piattaforma: "Disney+"
  },
  {
    id: "black-widow",
    titolo: {
      it: "Black Widow",
      en: "Black Widow"
    },
    titoloOriginale: "Black Widow",
    anno: 2021,
    tipo: "film",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 24,
    ordineCronologico: 16,
    essenziale: false,
    vedereFirst: ["Captain America: Civil War"],
    importanza: {
      it: "Esplora il passato di Natasha Romanoff e introduce Yelena Belova.",
      en: "Explores Natasha Romanoff's past and introduces Yelena Belova."
    },
    descrizione: {
      it: "Natasha Romanoff confronta i lati più oscuri del suo passato quando sorge una pericolosa cospirazione legata alla Stanza Rossa.",
      en: "Natasha Romanoff confronts the darkest parts of her past when a dangerous conspiracy tied to the Red Room emerges."
    },
    durata: "2h 13m",
    piattaforma: "Disney+"
  },
  {
    id: "black-panther-1",
    titolo: {
      it: "Black Panther",
      en: "Black Panther"
    },
    titoloOriginale: "Black Panther",
    anno: 2018,
    tipo: "film",
    fase: 3,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 18,
    ordineCronologico: 17,
    essenziale: true,
    vedereFirst: ["Captain America: Civil War"],
    importanza: {
      it: "Introduce Wakanda e il Vibranio. Fondamentale per Infinity War e Endgame.",
      en: "Introduces Wakanda and Vibranium. Essential for Infinity War and Endgame."
    },
    descrizione: {
      it: "T'Challa, erede del regno nascosto ma avanzato di Wakanda, deve farsi avanti per guidare il suo popolo in un nuovo futuro.",
      en: "T'Challa, heir to the hidden yet advanced kingdom of Wakanda, must step forward to lead his people into a new future."
    },
    durata: "2h 14m",
    piattaforma: "Disney+"
  },
  {
    id: "spider-man-1",
    titolo: {
      it: "Spider-Man: Homecoming",
      en: "Spider-Man: Homecoming"
    },
    titoloOriginale: "Spider-Man: Homecoming",
    anno: 2017,
    tipo: "film",
    fase: 3,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 16,
    ordineCronologico: 18,
    essenziale: true,
    vedereFirst: ["Captain America: Civil War"],
    importanza: {
      it: "Il primo Spider-Man del MCU. Introduce stabilmente Peter Parker nel mondo degli Avengers.",
      en: "The MCU's first Spider-Man solo movie. Establishes Peter Parker within the Avengers' world."
    },
    descrizione: {
      it: "Peter Parker cerca di bilanciare la sua vita da studente liceale con la sua alter-ego da supereroe Spider-Man sotto l'occhio vigile di Tony Stark.",
      en: "Peter Parker tries to balance his life as a high school student with his superhero alter ego Spider-Man under Tony Stark's watchful eye."
    },
    durata: "2h 13m",
    piattaforma: "Netflix"
  },
  {
    id: "doctor-strange-1",
    titolo: {
      it: "Doctor Strange",
      en: "Doctor Strange"
    },
    titoloOriginale: "Doctor Strange",
    anno: 2016,
    tipo: "film",
    fase: 3,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 14,
    ordineCronologico: 19,
    essenziale: true,
    vedereFirst: [],
    importanza: {
      it: "Introduce le arti mistiche e il lato magico del MCU.",
      en: "Introduces the mystic arts and the magical side of the MCU."
    },
    descrizione: {
      it: "Dopo un terribile incidente d'auto, il brillante ma arrogante chirurgo Stephen Strange impara i segreti della magia.",
      en: "After a terrible car accident, the brilliant but arrogant surgeon Stephen Strange learns the secrets of magic."
    },
    durata: "1h 55m",
    piattaforma: "Disney+"
  },
  {
    id: "thor-3",
    titolo: {
      it: "Thor: Ragnarok",
      en: "Thor: Ragnarok"
    },
    titoloOriginale: "Thor: Ragnarok",
    anno: 2017,
    tipo: "film",
    fase: 3,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 17,
    ordineCronologico: 20,
    essenziale: true,
    vedereFirst: ["Thor: Il Mondo Oscuro", "Avengers: Age of Ultron"],
    importanza: {
      it: "Distrugge Asgard e imposta direttamente l'inizio di Infinity War.",
      en: "Destroys Asgard and directly sets up the beginning of Infinity War."
    },
    descrizione: {
      it: "Imprigionato dall'altra parte dell'universo, Thor si ritrova in una corsa contro il tempo per tornare ad Asgard e fermare il Ragnarok.",
      en: "Imprisoned on the other side of the universe, Thor finds himself in a race against time to return to Asgard and stop Ragnarok."
    },
    durata: "2h 10m",
    piattaforma: "Disney+"
  },
  {
    id: "ant-man-2",
    titolo: {
      it: "Ant-Man and the Wasp",
      en: "Ant-Man and the Wasp"
    },
    titoloOriginale: "Ant-Man and the Wasp",
    anno: 2018,
    tipo: "film",
    fase: 3,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 20,
    ordineCronologico: 21,
    essenziale: true,
    vedereFirst: ["Captain America: Civil War"],
    importanza: {
      it: "Introduce in dettaglio il Regno Quantico. La scena post-credit è cruciale per Endgame.",
      en: "Explores the Quantum Realm in detail. The post-credit scene is crucial for Endgame."
    },
    descrizione: {
      it: "Mentre Scott Lang bilancia l'essere un supereroe e un padre, Hope van Dyne e il Dr. Hank Pym presentano una nuova missione urgente.",
      en: "While Scott Lang balances being a superhero and a father, Hope van Dyne and Dr. Hank Pym bring him a new urgent mission."
    },
    durata: "1h 58m",
    piattaforma: "Disney+"
  },
  {
    id: "avengers-3",
    titolo: {
      it: "Avengers: Infinity War",
      en: "Avengers: Infinity War"
    },
    titoloOriginale: "Avengers: Infinity War",
    anno: 2018,
    tipo: "film",
    fase: 3,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 19,
    ordineCronologico: 22,
    essenziale: true,
    vedereFirst: [
      "Thor: Ragnarok",
      "Black Panther",
      "Doctor Strange",
      "The Avengers",
      "Guardiani della Galassia"
    ],
    importanza: {
      it: "Thanos ottiene tutte le Pietre. Lo Schiocco cambia tutto.",
      en: "Thanos obtains all the Stones. The Snap changes everything."
    },
    descrizione: {
      it: "Gli Avengers e i loro alleati devono essere disposti a sacrificare tutto in un tentativo di sconfiggere il potente Thanos.",
      en: "The Avengers and their allies must be willing to sacrifice everything in an attempt to defeat the powerful Thanos."
    },
    durata: "2h 29m",
    piattaforma: "Disney+"
  },
  {
    id: "avengers-4",
    titolo: {
      it: "Avengers: Endgame",
      en: "Avengers: Endgame"
    },
    titoloOriginale: "Avengers: Endgame",
    anno: 2019,
    tipo: "film",
    fase: 3,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 22,
    ordineCronologico: 23,
    essenziale: true,
    vedereFirst: ["Avengers: Infinity War", "Ant-Man and the Wasp", "Captain Marvel"],
    importanza: {
      it: "Il climax della Saga dell'Infinito. Conclusione epica dei primi 22 film.",
      en: "The climax of the Infinity Saga. An epic conclusion to the first 22 films."
    },
    descrizione: {
      it: "Dopo i devastanti eventi di Infinity War, l'universo è in rovina. Gli Avengers rimanenti si riuniscono ancora una volta per annullare le azioni di Thanos.",
      en: "After the devastating events of Infinity War, the universe is in ruins. The remaining Avengers assemble once more to undo Thanos's actions."
    },
    durata: "3h 1m",
    piattaforma: "Disney+"
  },
  {
    id: "loki-1",
    titolo: {
      it: "Loki",
      en: "Loki"
    },
    titoloOriginale: "Loki",
    anno: 2021,
    tipo: "serie",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 27,
    ordineCronologico: 24,
    essenziale: true,
    vedereFirst: ["Avengers: Endgame"],
    importanza: {
      it: "Introduce la TVA e il concetto di Varianti. Dà inizio ufficiale al Multiverso.",
      en: "Introduces the TVA and the concept of Variants. Officially kicks off the Multiverse."
    },
    descrizione: {
      it: "Il volubile cattivo Loki riprende il suo ruolo di Dio dell'Inganno in una nuova serie ambientata dopo gli eventi di Avengers: Endgame.",
      en: "The unpredictable villain Loki resumes his role as the God of Mischief in a new series set after the events of Avengers: Endgame."
    },
    durata: "6 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "what-if",
    titolo: {
      it: "What If...?",
      en: "What If...?"
    },
    titoloOriginale: "What If...?",
    anno: 2021,
    tipo: "serie",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 29,
    ordineCronologico: 25,
    essenziale: false,
    vedereFirst: ["Loki"],
    importanza: {
      it: "Espande il concetto di multiverso mostrando linee temporali alternative.",
      en: "Expands the idea of the multiverse by showing alternate timelines."
    },
    descrizione: {
      it: "Una serie animata che esplora realtà alternative del MCU, mostrando come piccoli cambiamenti possano trasformare completamente il destino degli eroi.",
      en: "An animated series that explores alternate MCU realities, showing how small changes can completely transform the heroes' destinies."
    },
    durata: "9 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "wandavision",
    titolo: {
      it: "WandaVision",
      en: "WandaVision"
    },
    titoloOriginale: "WandaVision",
    anno: 2021,
    tipo: "serie",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 25,
    ordineCronologico: 26,
    essenziale: true,
    vedereFirst: ["Avengers: Endgame"],
    importanza: {
      it: "Wanda elabora il lutto diventando la Strega Scarlatta. Fondamentale per Doctor Strange nel Multiverso della Follia.",
      en: "Wanda processes her grief and becomes the Scarlet Witch. Essential for Doctor Strange in the Multiverse of Madness."
    },
    descrizione: {
      it: "Unendo lo stile delle sitcom classiche con il Marvel Cinematic Universe, Wanda Maximoff e Visione vivono la vita suburbana ideale.",
      en: "Blending the style of classic sitcoms with the Marvel Cinematic Universe, Wanda Maximoff and Vision live an ideal suburban life."
    },
    durata: "9 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "shang-chi",
    titolo: {
      it: "Shang-Chi e la Leggenda dei Dieci Anelli",
      en: "Shang-Chi and the Legend of the Ten Rings"
    },
    titoloOriginale: "Shang-Chi and the Legend of the Ten Rings",
    anno: 2021,
    tipo: "film",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 28,
    ordineCronologico: 27,
    essenziale: true,
    vedereFirst: [],
    importanza: {
      it: "Introduce Shang-Chi, il vero Mandarino e i Dieci Anelli magici.",
      en: "Introduces Shang-Chi, the real Mandarin, and the magical Ten Rings."
    },
    descrizione: {
      it: "Shang-Chi deve confrontarsi con il passato che pensava di essersi lasciato alle spalle quando viene attirato nella rete della misteriosa organizzazione dei Dieci Anelli.",
      en: "Shang-Chi must confront the past he thought he had left behind when he is drawn into the web of the mysterious Ten Rings organization."
    },
    durata: "2h 12m",
    piattaforma: "Disney+"
  },
  {
    id: "falcon-ws",
    titolo: {
      it: "The Falcon and the Winter Soldier",
      en: "The Falcon and the Winter Soldier"
    },
    titoloOriginale: "The Falcon and the Winter Soldier",
    anno: 2021,
    tipo: "serie",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 26,
    ordineCronologico: 28,
    essenziale: true,
    vedereFirst: ["Avengers: Endgame"],
    importanza: {
      it: "Sam Wilson accetta lo scudo e diventa il nuovo Captain America.",
      en: "Sam Wilson accepts the shield and becomes the new Captain America."
    },
    descrizione: {
      it: "Dopo aver ricevuto lo scudo di Captain America, Sam Wilson si unisce a Bucky Barnes in un'avventura globale che mette alla prova le loro abilità e pazienza.",
      en: "After receiving Captain America's shield, Sam Wilson teams up with Bucky Barnes on a global adventure that tests their skills and patience."
    },
    durata: "6 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "spider-man-2",
    titolo: {
      it: "Spider-Man: Far From Home",
      en: "Spider-Man: Far From Home"
    },
    titoloOriginale: "Spider-Man: Far From Home",
    anno: 2019,
    tipo: "film",
    fase: 3,
    saga: {
      it: "Saga dell'Infinito",
      en: "Infinity Saga"
    },
    ordineUscita: 23,
    ordineCronologico: 29,
    essenziale: true,
    vedereFirst: ["Avengers: Endgame", "Spider-Man: Homecoming"],
    importanza: {
      it: "Mostra le conseguenze immediate di Endgame sul mondo e prepara No Way Home.",
      en: "Shows the immediate consequences of Endgame on the world and sets up No Way Home."
    },
    descrizione: {
      it: "Durante una vacanza in Europa, Peter Parker viene coinvolto in una nuova minaccia e incontra il misterioso Quentin Beck.",
      en: "During a vacation in Europe, Peter Parker is pulled into a new threat and meets the mysterious Quentin Beck."
    },
    durata: "2h 9m",
    piattaforma: "Netflix"
  },
  {
    id: "spider-man-3",
    titolo: {
      it: "Spider-Man: No Way Home",
      en: "Spider-Man: No Way Home"
    },
    titoloOriginale: "Spider-Man: No Way Home",
    anno: 2021,
    tipo: "film",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 31,
    ordineCronologico: 30,
    essenziale: true,
    vedereFirst: ["Spider-Man: Far From Home", "Doctor Strange"],
    importanza: {
      it: "Ufficialmente apre il Multiverso al cinema. Evento centrale per il percorso di Peter Parker.",
      en: "Officially opens the Multiverse on the big screen. A central event in Peter Parker's journey."
    },
    descrizione: {
      it: "Con l'identità di Spider-Man rivelata, Peter chiede aiuto al Dottor Strange. Quando un incantesimo va storto, pericolosi nemici da altri mondi iniziano ad apparire.",
      en: "With Spider-Man's identity revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous enemies from other worlds begin to appear."
    },
    durata: "2h 28m",
    piattaforma: "Netflix"
  },
  {
    id: "eternals",
    titolo: {
      it: "Gli Eterni",
      en: "Eternals"
    },
    titoloOriginale: "Eternals",
    anno: 2021,
    tipo: "film",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 30,
    ordineCronologico: 31,
    essenziale: false,
    vedereFirst: [],
    importanza: {
      it: "Spiega la storia cosmica dei Celestiali e crea nuovi esseri superpotenti sulla Terra.",
      en: "Explains the cosmic history of the Celestials and introduces powerful new beings on Earth."
    },
    descrizione: {
      it: "La saga degli Eterni, una razza di esseri immortali che vissero sulla Terra e plasmarono la sua storia e le sue civiltà.",
      en: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations."
    },
    durata: "2h 37m",
    piattaforma: "Disney+"
  },
  {
    id: "doctor-strange-2",
    titolo: {
      it: "Doctor Strange nel Multiverso della Follia",
      en: "Doctor Strange in the Multiverse of Madness"
    },
    titoloOriginale: "Doctor Strange in the Multiverse of Madness",
    anno: 2022,
    tipo: "film",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 33,
    ordineCronologico: 32,
    essenziale: true,
    vedereFirst: ["WandaVision", "Spider-Man: No Way Home"],
    importanza: {
      it: "Collega Doctor Strange, WandaVision e il lato più esteso del Multiverso.",
      en: "Connects Doctor Strange, WandaVision, and the wider side of the Multiverse."
    },
    descrizione: {
      it: "Il Dottor Strange si allea con una misteriosa adolescente dai suoi sogni che può viaggiare attraverso i multiversi, per combattere minacce multiple.",
      en: "Doctor Strange teams up with a mysterious teenager from his dreams who can travel across the multiverses to battle multiple threats."
    },
    durata: "2h 6m",
    piattaforma: "Disney+"
  },
  {
    id: "hawkeye",
    titolo: {
      it: "Hawkeye",
      en: "Hawkeye"
    },
    titoloOriginale: "Hawkeye",
    anno: 2021,
    tipo: "serie",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 32,
    ordineCronologico: 33,
    essenziale: false,
    vedereFirst: ["Black Widow"],
    importanza: {
      it: "Introduce Kate Bishop e riporta in scena Kingpin dal lato urbano di New York.",
      en: "Introduces Kate Bishop and brings Kingpin back into New York's street-level world."
    },
    descrizione: {
      it: "L'ex Avenger Clint Barton deve collaborare con la giovane arciera Kate Bishop per affrontare i nemici del suo passato come Ronin.",
      en: "Former Avenger Clint Barton must team up with young archer Kate Bishop to face enemies from his past as Ronin."
    },
    durata: "6 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "moon-knight",
    titolo: {
      it: "Moon Knight",
      en: "Moon Knight"
    },
    titoloOriginale: "Moon Knight",
    anno: 2022,
    tipo: "serie",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 34,
    ordineCronologico: 34,
    essenziale: false,
    vedereFirst: [],
    importanza: {
      it: "Introduce Marc Spector e il lato mitologico oscuro del MCU.",
      en: "Introduces Marc Spector and the MCU's darker mythological side."
    },
    descrizione: {
      it: "Steven Grant scopre di avere un disturbo dissociativo dell'identità e condivide il corpo con il mercenario Marc Spector.",
      en: "Steven Grant discovers he has dissociative identity disorder and shares his body with mercenary Marc Spector."
    },
    durata: "6 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "black-panther-2",
    titolo: {
      it: "Black Panther: Wakanda Forever",
      en: "Black Panther: Wakanda Forever"
    },
    titoloOriginale: "Black Panther: Wakanda Forever",
    anno: 2022,
    tipo: "film",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 38,
    ordineCronologico: 35,
    essenziale: true,
    vedereFirst: ["Black Panther"],
    importanza: {
      it: "Shuri assume il manto di Black Panther. Introduce Namor e Riri Williams.",
      en: "Shuri takes on the mantle of Black Panther. Introduces Namor and Riri Williams."
    },
    descrizione: {
      it: "Il popolo di Wakanda combatte per proteggere la propria nazione dalle potenze mondiali che intervengono all'indomani della morte di Re T'Challa.",
      en: "The people of Wakanda fight to protect their nation from world powers intervening in the wake of King T'Challa's death."
    },
    durata: "2h 41m",
    piattaforma: "Disney+"
  },
  {
    id: "echo",
    titolo: {
      it: "Echo",
      en: "Echo"
    },
    titoloOriginale: "Echo",
    anno: 2024,
    tipo: "serie",
    fase: 5,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 44,
    ordineCronologico: 36,
    essenziale: false,
    vedereFirst: ["Hawkeye"],
    importanza: {
      it: "Maya Lopez esplora le sue radici Choctaw. Ritorno di Kingpin e Daredevil.",
      en: "Maya Lopez explores her Choctaw roots. Brings back Kingpin and Daredevil."
    },
    descrizione: {
      it: "Inseguita dall'impero criminale di Wilson Fisk, il viaggio di Maya Lopez la riporta a casa, dove deve affrontare la sua famiglia e il suo passato.",
      en: "Hunted by Wilson Fisk's criminal empire, Maya Lopez's journey brings her back home, where she must face her family and her past."
    },
    durata: "5 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "she-hulk",
    titolo: {
      it: "She-Hulk: Attorney at Law",
      en: "She-Hulk: Attorney at Law"
    },
    titoloOriginale: "She-Hulk: Attorney at Law",
    anno: 2022,
    tipo: "serie",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 36,
    ordineCronologico: 37,
    essenziale: false,
    vedereFirst: ["Avengers: Endgame"],
    importanza: {
      it: "Jennifer Walters diventa She-Hulk. Ritorno di Daredevil e introduzione di Skaar.",
      en: "Jennifer Walters becomes She-Hulk. Brings back Daredevil and introduces Skaar."
    },
    descrizione: {
      it: "L'avvocata Jennifer Walters naviga nella complicata vita da trentenne single che si dà il caso sia anche una creatura verde superpotente alta due metri.",
      en: "Lawyer Jennifer Walters navigates the complicated life of a single thirty-something who also happens to be a superpowered green giant."
    },
    durata: "9 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "ms-marvel",
    titolo: {
      it: "Ms. Marvel",
      en: "Ms. Marvel"
    },
    titoloOriginale: "Ms. Marvel",
    anno: 2022,
    tipo: "serie",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 35,
    ordineCronologico: 38,
    essenziale: false,
    vedereFirst: [],
    importanza: {
      it: "Introduce Kamala Khan e accenna all'esistenza dei mutanti nel MCU.",
      en: "Introduces Kamala Khan and hints at the existence of mutants in the MCU."
    },
    descrizione: {
      it: "Kamala Khan, una super fan degli Avengers, fa fatica ad adattarsi a scuola finché non ottiene i suoi poteri cosmici.",
      en: "Kamala Khan, a mega-fan of the Avengers, struggles to fit in at school until she gains her own cosmic powers."
    },
    durata: "6 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "thor-4",
    titolo: {
      it: "Thor: Love and Thunder",
      en: "Thor: Love and Thunder"
    },
    titoloOriginale: "Thor: Love and Thunder",
    anno: 2022,
    tipo: "film",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 37,
    ordineCronologico: 39,
    essenziale: false,
    vedereFirst: ["Thor: Ragnarok"],
    importanza: {
      it: "Jane Foster ritorna come la Potente Thor. Introduce Eternità e nuove divinità cosmiche.",
      en: "Jane Foster returns as the Mighty Thor. Introduces Eternity and new cosmic gods."
    },
    descrizione: {
      it: "Thor chiede l'aiuto di Valchiria, Korg e dell'ex fidanzata Jane Foster per combattere Gorr il Macellatore di Dei.",
      en: "Thor calls on Valkyrie, Korg, and his ex-girlfriend Jane Foster for help in fighting Gorr the God Butcher."
    },
    durata: "1h 59m",
    piattaforma: "Disney+"
  },
  {
    id: "ironheart",
    titolo: {
      it: "Ironheart",
      en: "Ironheart"
    },
    titoloOriginale: "Ironheart",
    anno: 2025,
    tipo: "serie",
    fase: 5,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 49,
    ordineCronologico: 40,
    essenziale: false,
    vedereFirst: ["Black Panther: Wakanda Forever"],
    importanza: {
      it: "Prosegue l'arco di Riri Williams dopo Wakanda Forever, unendo tecnologia avanzata e nuove minacce.",
      en: "Continues Riri Williams' story after Wakanda Forever, blending advanced technology with new threats."
    },
    descrizione: {
      it: "Riri Williams torna a Chicago per costruire il proprio futuro, ma il suo genio tecnologico la porta a scontrarsi con forze impreviste.",
      en: "Riri Williams returns to Chicago to build her future, but her technological genius puts her on a collision course with unpredictable forces."
    },
    durata: "6 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "werewolf",
    titolo: {
      it: "Licantropus (Werewolf by Night)",
      en: "Werewolf by Night"
    },
    titoloOriginale: "Werewolf by Night",
    anno: 2022,
    tipo: "film TV",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 39,
    ordineCronologico: 41,
    essenziale: false,
    vedereFirst: [],
    importanza: {
      it: "Esplora il lato horror e mostruoso del MCU. Introduce Elsa Bloodstone e Man-Thing.",
      en: "Explores the horror and monster side of the MCU. Introduces Elsa Bloodstone and Man-Thing."
    },
    descrizione: {
      it: "In una notte buia e cupa, un gruppo segreto di cacciatori di mostri emerge dall'ombra e si riunisce nel mistico Tempio di Bloodstone.",
      en: "On a dark and gloomy night, a secret group of monster hunters emerges from the shadows and gathers at the mystical Bloodstone Temple."
    },
    durata: "55m",
    piattaforma: "Disney+"
  },
  {
    id: "gotg-holiday-special",
    titolo: {
      it: "The Guardians of the Galaxy Holiday Special",
      en: "The Guardians of the Galaxy Holiday Special"
    },
    titoloOriginale: "The Guardians of the Galaxy Holiday Special",
    anno: 2022,
    tipo: "film TV",
    fase: 4,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 40,
    ordineCronologico: 42,
    essenziale: false,
    vedereFirst: ["Guardiani della Galassia Vol. 2"],
    importanza: {
      it: "Fa da ponte verso Guardiani della Galassia Vol. 3 e chiarisce alcuni rapporti del gruppo.",
      en: "Acts as a bridge to Guardians of the Galaxy Vol. 3 and clarifies a few relationships within the team."
    },
    descrizione: {
      it: "I Guardiani partono per una missione speciale sulla Terra per regalare a Peter Quill un Natale memorabile.",
      en: "The Guardians embark on a special mission to Earth to give Peter Quill a memorable Christmas."
    },
    durata: "42m",
    piattaforma: "Disney+"
  },
  {
    id: "ant-man-3",
    titolo: {
      it: "Ant-Man and the Wasp: Quantumania",
      en: "Ant-Man and the Wasp: Quantumania"
    },
    titoloOriginale: "Ant-Man and the Wasp: Quantumania",
    anno: 2023,
    tipo: "film",
    fase: 5,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 41,
    ordineCronologico: 43,
    essenziale: true,
    vedereFirst: ["Ant-Man and the Wasp", "Loki"],
    importanza: {
      it: "Esplora interamente il Regno Quantico e introduce formalmente Kang sul grande schermo.",
      en: "Fully explores the Quantum Realm and formally introduces Kang on the big screen."
    },
    descrizione: {
      it: "Scott Lang e Hope Van Dyne, insieme a Hank Pym e Janet Van Dyne, esplorano il Regno Quantico, dove affrontano Kang.",
      en: "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they face Kang."
    },
    durata: "2h 5m",
    piattaforma: "Disney+"
  },
  {
    id: "gotg-3",
    titolo: {
      it: "Guardiani della Galassia Vol. 3",
      en: "Guardians of the Galaxy Vol. 3"
    },
    titoloOriginale: "Guardians of the Galaxy Vol. 3",
    anno: 2023,
    tipo: "film",
    fase: 5,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 42,
    ordineCronologico: 44,
    essenziale: true,
    vedereFirst: ["Guardiani della Galassia", "Guardiani della Galassia Vol. 2"],
    importanza: {
      it: "Conclusione epica per la squadra originale dei Guardiani. Mostra l'oscuro passato di Rocket.",
      en: "An epic conclusion for the original Guardians team. Reveals Rocket's dark past."
    },
    descrizione: {
      it: "Ancora sconvolto dalla perdita di Gamora, Peter Quill deve radunare la sua squadra per difendere l'universo e proteggere uno di loro.",
      en: "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own."
    },
    durata: "2h 30m",
    piattaforma: "Disney+"
  },
  {
    id: "secret-invasion",
    titolo: {
      it: "Secret Invasion",
      en: "Secret Invasion"
    },
    titoloOriginale: "Secret Invasion",
    anno: 2023,
    tipo: "serie",
    fase: 5,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 43,
    ordineCronologico: 45,
    essenziale: false,
    vedereFirst: ["Captain Marvel"],
    importanza: {
      it: "Racconta l'infiltrazione degli Skrull sulla Terra e il ritorno in azione di Nick Fury.",
      en: "Tells the story of the Skrull infiltration on Earth and Nick Fury's return to action."
    },
    descrizione: {
      it: "Nick Fury scopre un'infiltrazione clandestina sulla Terra da parte di una fazione di Skrull mutaforma e deve fermarli.",
      en: "Nick Fury uncovers a secret infiltration of Earth by a faction of shapeshifting Skrulls and must stop them."
    },
    durata: "6 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "the-marvels",
    titolo: {
      it: "The Marvels",
      en: "The Marvels"
    },
    titoloOriginale: "The Marvels",
    anno: 2023,
    tipo: "film",
    fase: 5,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 45,
    ordineCronologico: 46,
    essenziale: false,
    vedereFirst: ["Captain Marvel", "Ms. Marvel", "WandaVision"],
    importanza: {
      it: "Unisce Carol, Kamala e Monica. Espande il lato cosmico e le connessioni multiversali.",
      en: "Brings together Carol, Kamala, and Monica. Expands the cosmic side and multiversal connections."
    },
    descrizione: {
      it: "Carol Danvers deve collaborare con Kamala Khan e Monica Rambeau quando i loro poteri si intrecciano in un'anomalia galattica.",
      en: "Carol Danvers must team up with Kamala Khan and Monica Rambeau when their powers become entangled in a galactic anomaly."
    },
    durata: "1h 45m",
    piattaforma: "Disney+"
  },
  {
    id: "agatha",
    titolo: {
      it: "Agatha All Along",
      en: "Agatha All Along"
    },
    titoloOriginale: "Agatha All Along",
    anno: 2024,
    tipo: "serie",
    fase: 5,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 47,
    ordineCronologico: 47,
    essenziale: false,
    vedereFirst: ["WandaVision"],
    importanza: {
      it: "Esplora ulteriormente il lato magico del MCU e le conseguenze delle azioni di Wanda.",
      en: "Further explores the magical side of the MCU and the consequences of Wanda's actions."
    },
    descrizione: {
      it: "Dopo gli eventi di Westview, un'Agatha senza poteri raduna un gruppo di reietti magici per percorrere la pericolosa Strada delle Streghe.",
      en: "After the events of Westview, a powerless Agatha gathers a group of magical outcasts to walk the dangerous Witches' Road."
    },
    durata: "9 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "deadpool-wolverine",
    titolo: {
      it: "Deadpool & Wolverine",
      en: "Deadpool & Wolverine"
    },
    titoloOriginale: "Deadpool & Wolverine",
    anno: 2024,
    tipo: "film",
    fase: 5,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 46,
    ordineCronologico: 48,
    essenziale: false,
    vedereFirst: ["Loki"],
    importanza: {
      it: "Fa collidere il mondo dei mutanti Fox con il MCU attraverso TVA e Multiverso.",
      en: "Brings the Fox mutants' world into collision with the MCU through the TVA and the Multiverse."
    },
    descrizione: {
      it: "Wade Wilson si lascia alle spalle i suoi giorni da mercenario finché un nemico non lo costringe a collaborare con Wolverine.",
      en: "Wade Wilson leaves his mercenary days behind until an enemy forces him to team up with Wolverine."
    },
    durata: "2h 8m",
    piattaforma: "Cinema / Disney+"
  },
  {
    id: "daredevil-ba",
    titolo: {
      it: "Daredevil: Born Again",
      en: "Daredevil: Born Again"
    },
    titoloOriginale: "Daredevil: Born Again",
    anno: 2025,
    tipo: "serie",
    fase: 5,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 48,
    ordineCronologico: 49,
    essenziale: false,
    vedereFirst: ["Echo", "Hawkeye", "Spider-Man: No Way Home"],
    importanza: {
      it: "Il ritorno ufficiale in solitaria di Matt Murdock nel MCU.",
      en: "Matt Murdock's official solo return within the MCU."
    },
    descrizione: {
      it: "Matt Murdock continua la sua doppia vita da avvocato cieco e vigilante di Hell's Kitchen, mentre Wilson Fisk intraprende una campagna politica.",
      en: "Matt Murdock continues his double life as a blind lawyer and Hell's Kitchen vigilante while Wilson Fisk launches a political campaign."
    },
    durata: "9 episodi",
    piattaforma: "Disney+"
  },
  {
    id: "cap-america-4",
    titolo: {
      it: "Captain America: Brave New World",
      en: "Captain America: Brave New World"
    },
    titoloOriginale: "Captain America: Brave New World",
    anno: 2025,
    tipo: "film",
    fase: 5,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 50,
    ordineCronologico: 50,
    essenziale: true,
    vedereFirst: ["The Falcon and the Winter Soldier"],
    importanza: {
      it: "Consolida Sam Wilson come nuovo Captain America e apre nuovi sviluppi politici nel MCU.",
      en: "Establishes Sam Wilson as the new Captain America and opens new political developments in the MCU."
    },
    descrizione: {
      it: "Sam Wilson, ormai nei panni di Captain America, si ritrova al centro di una crisi internazionale che minaccia l'equilibrio globale.",
      en: "Sam Wilson, now operating as Captain America, finds himself at the center of an international crisis that threatens the global balance."
    },
    durata: "1h 58m",
    piattaforma: "Cinema / Disney+"
  },
  {
    id: "thunderbolts",
    titolo: {
      it: "Thunderbolts*",
      en: "Thunderbolts*"
    },
    titoloOriginale: "Thunderbolts*",
    anno: 2025,
    tipo: "film",
    fase: 5,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 51,
    ordineCronologico: 51,
    essenziale: true,
    vedereFirst: ["Black Widow", "The Falcon and the Winter Soldier", "Hawkeye"],
    importanza: {
      it: "Un team di antieroi assemblati da Valentina. Porta avanti diversi personaggi già introdotti nel MCU.",
      en: "A team of antiheroes assembled by Valentina. Continues the stories of several characters already introduced in the MCU."
    },
    descrizione: {
      it: "Un gruppo di personaggi moralmente ambigui viene reclutato per intraprendere missioni governative top-secret.",
      en: "A group of morally ambiguous characters is recruited to undertake top-secret government missions."
    },
    durata: "TBA",
    piattaforma: "Cinema"
  },
  {
    id: "fantastic-four-first-steps",
    titolo: {
      it: "The Fantastic Four: First Steps",
      en: "The Fantastic Four: First Steps"
    },
    titoloOriginale: "The Fantastic Four: First Steps",
    anno: 2025,
    tipo: "film",
    fase: 6,
    saga: {
      it: "Saga del Multiverso",
      en: "Multiverse Saga"
    },
    ordineUscita: 52,
    ordineCronologico: 52,
    essenziale: true,
    vedereFirst: [],
    importanza: {
      it: "Introduce ufficialmente i Fantastici Quattro nel MCU e apre la Fase 6 con forti implicazioni multiversali.",
      en: "Officially introduces the Fantastic Four into the MCU and opens Phase 6 with major multiversal implications."
    },
    descrizione: {
      it: "La Prima Famiglia Marvel deve bilanciare il proprio ruolo di eroi con i legami familiari mentre affronta Galactus e Silver Surfer in un mondo retro-futuristico ispirato agli anni '60.",
      en: "Marvel's First Family must balance their role as heroes with their family bonds while facing Galactus and the Silver Surfer in a retro-futuristic world inspired by the 1960s."
    },
    durata: "TBA",
    piattaforma: "Cinema"
  }
];