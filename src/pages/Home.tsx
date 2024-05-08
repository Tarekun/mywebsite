import { Stack } from "@mui/material";
import { useLanguagePack } from "optimus-bo-ui/dist/contexts/LanguagePackContext";
import EducationList from "../core/sections/EducationList";
import Hobbies from "../core/sections/Hobbies";
import Presentazione from "../core/sections/Presentazione";
import Projects from "../core/sections/Projects";
import Tools from "../core/sections/Tools";

const educationEventsIt = [
  {
    title: "Informatica @UniBO",
    description:
      "Nel 2019 mi sono iscritto all'Università di Bologna per studiare informatica",
  },
  {
    title: "Software engineer @CERN",
    description:
      "Nel 2022 ho iniziato a lavorare come software engineer al CERN, Ginevra, dove sono rimasto per 14 mesi. Lavorarvo ad IMPACT un'applicazione utilizzata per gestire gli accessi alle varie strutture, calcorare le dosi di radiazioni ricevute dai tecnici e altro...",
  },
  {
    title: "Tesi - Transfer Package per Matita",
    description:
      'Nel 2024 sono riuscito a laurearmi presentato una tesi su Teoria dei Tipi! All\'Università di Bologna è stato sviluppato Matita un dimostratore di teoremi per cui ho implementato un transfer package, cioè un modulo che permetta di "trasferire" teoremi dimostrati su un oggetto matematico ad uno *equivalente*',
  },
];
const educationEventsEn = [
  {
    title: "Computer Science @UniBO",
    description:
      "In 2019 I enrolled in a Computer Science bachelor at University of Bologna",
  },
  {
    title: "Software engineer @CERN",
    description:
      "In 2022 I started working at CERN, Geneva as a software engineer. I was working on IMPACT an application used to manage access to the various structures of CERN, compute radiation dosages that technitians have absorbed and more...",
  },
  {
    title: "Thesis - Transfer Package for Matita",
    description:
      'In 2024 I managed to graduate presenting a thesis on Type Theory! At Bologna\'s University was developed Matita an interactive theorem prover for which I implemented a transfer package, a module that allows "transferring" theorems proved on one mathematical object to any other *equivalent* object',
  },
];

export default function Home() {
  const { selectedLocale } = useLanguagePack();
  const events =
    selectedLocale === "it" ? educationEventsIt : educationEventsEn;

  return (
    <Stack spacing={5} sx={{ width: "100%" }}>
      <Hobbies />
      <Projects />
      <Presentazione />
      <EducationList events={events} />
      <Tools />
    </Stack>
  );
}
