const italianPack = {
  funfactPage: {
    title: "Lo sapevi che...",
    buttonGenerateFact: "Genera un fun fact",
  },
};

export type LanguagePackSchema = typeof italianPack;

const englishPack: LanguagePackSchema = {
  funfactPage: {
    title: "Did you know that...",
    buttonGenerateFact: "Generate a fun fact",
  },
};

export { englishPack, italianPack };
