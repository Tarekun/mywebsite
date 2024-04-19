import { Button, Typography } from "@mui/material";
import { PageContainer } from "optimus-bo-ui";
import EducationList from "../core/EducationList";

const educationEvents = [
  {
    title: "Titolo cad",
    description:
      "contenuto card, descrizione neanche troppo breve di quello che si sta parlando",
  },
  {
    title: "Titolo cad",
    description:
      "contenuto card, descrizione neanche troppo breve di quello che si sta parlando",
  },
];

export default function Home() {
  return (
    <PageContainer>
      <Typography>What up daaaawg</Typography>
      <Button variant="outlined">prova</Button>

      <EducationList events={educationEvents} />
    </PageContainer>
  );
}
