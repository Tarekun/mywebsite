import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useLanguagePack } from "optimus-bo-ui/dist/contexts/LanguagePackContext";
import Header from "../Header";
import SectionBox from "../SectionBox";
import { LanguagePackSchema } from "../languagePacks";

const expert = [
  "Typescript",
  "React",

  "Python",
  "FastAPI",
  "Django",
  "Pytorch",

  "Java",
  "Spring boot",
  "Kotlin",
  "Jetpack Compose",

  "C",
  "Docker",
];
const brief = [
  "OCaml",
  "C#",
  "Angular",
  "Svelte",
  "Unity",
  "Prometheus+Grafana",
];

export default function Tools() {
  const {
    languagePack: {
      homePage: { tools },
    },
  } = useLanguagePack<LanguagePackSchema>();

  return (
    <SectionBox padding={2}>
      <Stack spacing={2}>
        <Header text={tools.title} />
        <Typography>{tools.description}</Typography>

        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography color="primary.main">{tools.expertLabel}:</Typography>
            <List dense>
              {expert.map((label) => {
                return (
                  <ListItem key={label}>
                    <ListItemText primary={label} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="primary.main">{tools.briefLabel}:</Typography>
            <List dense>
              {brief.map((label) => {
                return (
                  <ListItem key={label}>
                    <ListItemText primary={label} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Stack>
    </SectionBox>
  );
}
