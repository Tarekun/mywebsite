import { Button, Typography } from "@mui/material";
import { PageContainer } from "optimus-bo-ui";
import EducationList from "../core/EducationList";

const educationEvents = [
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
    title: "Tesi - Transfer Package per matita",
    description:
      'Nel 2024 sono riuscito a laurearmi presentato una tesi su Teoria dei Tipi! All\'Università di Bologna è stato sviluppato Matita un dimostratore di teoremi per cui ho implementato un transfer package, cioè un modulo che permetta di "trasferire" teoremi dimostrati su un oggetto matematico ad uno *equivalente*',
  },
];

export default function Home() {
  return (
    <PageContainer>
      <Typography>What up daaaawg</Typography>
      <Typography>Sezione presentazione</Typography>
      <Button variant="outlined">prova</Button>

      <Typography>Sezione istruzione/lavoro/CV</Typography>
      <EducationList events={educationEvents} />

      <Typography>Sezione hobby</Typography>

      <Typography>Sezione progetti</Typography>

      <Typography>Sezione tool/strumenti e quantaltro</Typography>
    </PageContainer>
  );
}
