const italianPack = {
  navbar: {
    languageTooltip: "Cambia lingua",
  },
  homePage: {
    presentationTitle: "introduction.exe",
    presentationText: "qui dentro andrà scritta una presentazione su di me",
    closeBoxCaption:
      "Perché vorresti chiudere questa mia presentazione su cui ho lavorato tanto? (╥﹏╥)",
    hobbies: {
      title: "Hobby e altre robe",
      introduction:
        "Ho interessi piuttosto variegati e che potresti non aspettarti. Questo è un elenco non esaustivo delle cose che mi piacciono di più",
    },
    projects: {
      sectionTitle: "Miei progetti",
      freeTimeLabel: "tempo_libero",
      moreLinkLabel: "Altro a riguardo...",
      freeTimeTooltip: "Cose a cui lavoro nel tempo libero",
      employmentLabel: "da_impiegato",
      employmentTooltip:
        "Cose a cui ho lavorato quand'ero assunto da qualche parte",
      optimusLabel: "@Optimus",
      optimusTooltip: "Cose a cui ho lavorato per optimus-bo",
      impactTitle: "IMPACT @CERN",
      impactTooltip: "IMPACT, applicazione full stack",
      impactDescription:
        "IMPACT è un'applicazione utilizzata al CERN principalmente per gestire gli accessi alle varie strutture. Se un tecnico deve scendere in un tunnel per fare della manutenzione oppure se un gruppo vuole organizzare una visita guidata presso uno degli esperimenti, bisogna creare un'IMPACT Activity, i vari responsabili saranno notificati della richiesta e deciderano se dare il permesso. Io ho lavorato allo sviluppo di una nuova versione di IMPACT, programmata da zero. Lo stack usato era di React con MaterialUI, Java Springboot con un database OracleSQL.",
      pmTitle: "Manutenzione predittiva @CERN",
      pmTooltip:
        "Lavoro di data science per manutenzione predittiva di ascensori e sensori",
      pmDescription:
        "Questo è stato un altro progetto che ho seguito per qualche mese mentre ho lavorato al CERN. Si trattava di un progetto di sviluppo di un modello per predire anticipatamente quando un ascensore o certi tipi di sensori stavano per rompersi in modo da poter effettuare della manutenzione in anticipo ed evitare il guasto",
      coworkingTitle: "Coworking CasaLab",
      coworkingTooltip:
        "Sito per la gestione delle prenotazioni degli uffici del coworking space CasaLab",
      coworkingDescription:
        "Il primo vero cliente di Optimus, piccola compagnia di sviluppo software gestionale gestita da me e mio cugino. Si tratta di un sito web attraverso cui i clienti possono iscriversi e prenotare spazi negli uffici di CasaLab ed include anche funzionalità backoffice per utenti admin. Io sono stato il solo sviluppatore di quest'applicativo. Lo stack usato è React come frontend e python con FastAPI come backend",
      selfHostingLabel: "seft_hosting",
      selfHostingTooltip: "Vari servizi hostati a casa con un raspberry pi",
      selfHostingDescription:
        "Voglio essere quanto più autonomo e indipendente possibile con tutti gli strumenti tech che uso e lo stesso vale per vari servizi cloud. Mi sono quindi comprato un RasperryPi che uso attualmente per svariati servizi, applicazioni, cloud e anche self hosting di siti web, tra cui un'istanza di gitlab in cui tengo delle repository che voglio accessibili, ma private (senza feature tagliate come su github).",
      optimusUiLabel: "optimus-bo-ui",
      optimusUiTooltip: "Libreria react basata su altre popolarissime librerie",
      optimusUiDescription:
        "Capita spesso di finire a reimplementare gli stessi componenti React in diverse applicazioni. E perché riscrivere questo codice ogni volta con leggere differenze, quando questi componenti possono essere resi generici e riutilizzati su qualsiasi altra applicazione si vorrà mai scrivere? Per questo motivo ho deciso di raccogliere sia svariati componenti UI utili e riutilizzabili, oltre che fornire un unico componente (OptimusUiApp) che permettesse di configurare in automatico librerie react comuni come MaterialUI o ReactQuery evitando così di dover ripetere il codice di configurazione dello stack tutte le volte. La libreria è pubblica, si trova su github, può essere liberamente installata con npm install optimus-bo-ui e commenti o contribuzioni sono più che i benvenuti!",
    },
  },
  funfactPage: {
    title: "Lo sapevi che...",
    buttonGenerateFact: "Genera un fun fact",
  },
};

export type LanguagePackSchema = typeof italianPack;

const englishPack: LanguagePackSchema = {
  navbar: {
    languageTooltip: "Switch language",
  },
  homePage: {
    presentationTitle: "introduction.exe",
    presentationText: "presentation bout me",
    closeBoxCaption:
      "Why would you want to close this presentation about me that I spent so much time working on? (╥﹏╥)",
    hobbies: {
      title: "Hobbies and stuff",
      introduction:
        "I very different interests that you probably wouldn't expect. This is a non exhaustive summary of the things I like the most",
    },
    projects: {
      sectionTitle: "My projects",
      moreLinkLabel: "More about this...",
      freeTimeLabel: "free_time",
      freeTimeTooltip: "Stuff I work on in my free time",
      employmentLabel: "employment",
      employmentTooltip: "Stuff I've worked on when I was employed somewhere",
      optimusLabel: "@Optimus",
      optimusTooltip: "Stuff I've worked on for optimus-bo",
      impactTitle: "IMPACT @CERN",
      impactTooltip: "Full stack work on the IMPACT application",
      pmTitle: "Predictive Maintanence @CERN",
      pmTooltip: "Data science work for predictive maintanence",
      coworkingTitle: "Coworking CasaLab",
      coworkingTooltip:
        "Website to manage office bookings at the coworking space",
      coworkingDescription: "tobe translated",
      pmDescription: "tobe translated",
      impactDescription: "tobe translated",
      selfHostingLabel: "seft_hosting",
      selfHostingTooltip: "Various self hosting projects i worked on",
      selfHostingDescription: "tobe translated",
      optimusUiLabel: "optimus-bo-ui",
      optimusUiTooltip: "React library based on other standard react libraries",
      optimusUiDescription: "tobe translated",
    },
  },
  funfactPage: {
    title: "Did you know that...",
    buttonGenerateFact: "Generate a fun fact",
  },
};

export { englishPack, italianPack };
