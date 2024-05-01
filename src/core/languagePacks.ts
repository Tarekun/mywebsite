const italianPack = {
  navbar: {
    languageTooltip: "Cambia lingua",
  },
  homePage: {
    presentationTitle: "Hey there human",
    presentationText: "qui dentro andrà scritta una presentazione su di me",
    closeBoxCaption:
      "Perché vorresti chiudere questa mia presentazione su cui ho lavorato tanto? (╥﹏╥)",
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
    presentationTitle: "Hey there human",
    presentationText: "presentation bout me",
    closeBoxCaption:
      "Why would you want to close this presentation about me that I spent so much time working on? (╥﹏╥)",
  },
  funfactPage: {
    title: "Did you know that...",
    buttonGenerateFact: "Generate a fun fact",
  },
};

export { englishPack, italianPack };
