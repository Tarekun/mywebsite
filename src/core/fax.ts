export type Fact = {
  it: string;
  en: string;
  somethingToRead?: string;
};

export const fax: Fact[] = [
  {
    it: "Le banane sono radioattive",
    en: "Bananas are radioactive",
    somethingToRead: "https://en.wikipedia.org/wiki/Banana_equivalent_dose",
  },
];
