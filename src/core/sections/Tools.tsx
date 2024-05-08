import {
  Box,
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
  "C",
];
const brief = ["OCaml", "C++", "C#", "Angular", "Svelte", "Unity"];

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

        <Box>
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
        </Box>
        <Box>
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
        </Box>
      </Stack>
    </SectionBox>
  );
}
