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
      defaultDescription:
        "Clicca il file di uno dei progetti caricati (in verde) e una descrizione a riguardo comparirà qui.",
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
        "IMPACT è un'applicazione utilizzata al CERN principalmente per gestire gli accessi alle varie strutture: se un tecnico deve scendere in un tunnel per fare della manutenzione oppure se un gruppo vuole organizzare una visita guidata presso uno degli esperimenti, bisogna creare un'IMPACT Activity, i vari responsabili saranno notificati della richiesta e deciderano se dare il permesso. Dato che la prima versione fu scritta circa 15 anni fa con Google Web Toolkit e non si trovavano più svilluppatori per mantenerla, io ho lavorato allo sviluppo di una nuova versione di IMPACT, programmata da zero. Lo stack usato era di React con MaterialUI, Java Springboot come framework backend con un database OracleSQL.",
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
        "Voglio essere quanto più autonomo e indipendente possibile con tutti gli strumenti tech che uso e lo stesso vale per vari servizi cloud. Per questo il Raspberry Pi è la migliore cosa che mi potesse capitare e lo uso attualmente per svariati servizi, applicazioni, cloud e anche self hosting di siti web. Tra questi servizi che gestisco ne spiccano alcuni di cui son più contento e fiero tra cui un'istanza di Gitea + Drone CI, per liberarmi tranquillamente dello spettro di Microsoft ed eseguire tutti workflow che voglio, Immich un drive open source, per liberarmi per sempre da altri prodotti di Google/Microsoft, Prometheus + Grafana che uso per monitorare tutte le applicazioni che devo gestire e Wireguard per poter accedere ad ogni servizio un po' più in sicurezza",
      optimusUiLabel: "optimus-bo-ui",
      optimusUiTooltip: "Libreria react basata su altre popolarissime librerie",
      optimusUiDescription:
        "Capita spesso di finire a reimplementare gli stessi componenti React in diverse applicazioni. E perché riscrivere questo codice ogni volta con leggere differenze, quando questi componenti possono essere resi generici e riutilizzati su qualsiasi altra applicazione si vorrà mai scrivere? Per questo motivo ho deciso di raccogliere sia svariati componenti UI utili e riutilizzabili, oltre che fornire un unico componente (OptimusUiApp) che permettesse di configurare in automatico librerie react comuni come MaterialUI o ReactQuery evitando così di dover ripetere il codice di configurazione dello stack tutte le volte. La libreria è pubblica, si trova su github, può essere liberamente installata con npm install optimus-bo-ui e commenti o contribuzioni sono più che benvenuti!",
    },
    tools: {
      title: "Librerie, framework, strumenti e altro",
      expertLabel: "Conoscenze professionali",
      briefLabel: "Conoscenze superficiali",
      description:
        "Questa è una lista degli strumenti, librerie, framework che ho imparato e usato nel corso degli anni divise tra quelle in cui sono effettivamente esperto e conosco bene e quelle che ho usato in passato o superficialmente",
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
      defaultDescription:
        "Click on one of the projects' file (in green) and its description will show up here.",
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
      coworkingDescription:
        "The very first client of Optimus, a small developing company managed by me and my cousin. It's a website where clients of the coworking space can subscribe and book desk, rooms and tools at CasaLab and also includes backoffice functionality for admin users. I was the only developer of this application. The stack used is React as frontend and python with FastAPI as backend frameworks",
      pmDescription:
        "This was another project I worked on for a few months when I was working at CERN. We were trying to develop a model to predict in advance when lifts or certain kinds of sensor would break so that we could do preventive maintanance and avoid the failure",
      impactDescription:
        "IMPACT is an application used at CERN primarily to manage access to the various structures: if a technician needs to go down a tunnel for maintanance or a group wants to organize a guided visit to some of the experiments, you need to create an IMPACT Activity, responsibles will be notified of the request and if they choose so, they'll grant you permission. Since the first version was written around 15 years ago with Google Web Toolkit and they were struggling to find new developers to maintain it, I worked on the development of a new version of IMPACT, programed from scratch. The stack we used was React with MaterialUI, Java Springboot as a backend framework with an OracleSQL database",
      selfHostingLabel: "seft_hosting",
      selfHostingTooltip: "Various self hosting projects I worked on",
      selfHostingDescription:
        "I want to be as much autonomous and indipendent as possible with all the tech tools I use and the same goes for cloud services. For this reason the Raspberry Pi was the best thing that ever happened and I use it for a bunch of services, apps and hosting of websites. Among the services I manage there's a few that stand out and I'm particularly proud of like an instance of Gitea + Drone CI, to free myself by Microsoft and Github and run as many workflows as I want, Immich a open source drive, to get rid of other drive products from Google/Microsoft, Prometheus + Grafana to monitor all the applications I have to administrate, and finally, Wireguard to access all these services anywhere with a little more security",
      optimusUiLabel: "optimus-bo-ui",
      optimusUiTooltip: "React library based on other standard react libraries",
      optimusUiDescription:
        "Very frequently you end up reimplementing the same React components in different apps. So why rewrite that code with minor differences when these components can be made generic and keep them for any other future app? For this reason I decided to group a bunch of these UI components as well as making a single component (OptimusUiApp) that allows to directly configure the usual React stack like MaterialUI or ReactQuery, without having to rewrite the boiler plate code. The library is public, on github, and can be freely installed with npm install optimus-bo-ui and comments or contributions are more than welcome!",
    },
    tools: {
      title: "Liraries, frameworks, tools and what not",
      expertLabel: "Professional expertise",
      briefLabel: "Surface level expertise",
      description:
        "This is a list of the tools, libraries, frameworks that i learnt and used over the years split in the ones where I'm an expert and very skilled and those that I used in the past or briefly",
    },
  },
  funfactPage: {
    title: "Did you know that...",
    buttonGenerateFact: "Generate a fun fact",
  },
};

export { englishPack, italianPack };
