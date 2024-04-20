import { Button, Link, Paper, Stack, Typography } from "@mui/material";
import { PageContainer } from "optimus-bo-ui";
import { useLanguagePack } from "optimus-bo-ui/dist/contexts/LanguagePackContext";
import { useState } from "react";
import Header from "../core/Header";
import { Fact, fax } from "../core/fax";
import { LanguagePackSchema } from "../core/languagePacks";

interface FactBubbleProps {
  fact: Fact;
}
function FactBubble({ fact }: FactBubbleProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        position: "relative",
        borderColor: "primary.main",
        borderWidth: 1,
        borderStyle: "solid",
        padding: 1,
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 20,
          border: "10px solid transparent",
          borderBottomColor: "primary.main",
          transform: "translateX(-50%) translateY(-100%)",
        },
      }}
    >
      <Typography align="left">{fact.it}</Typography>
      {fact.somethingToRead && (
        <Typography align="left">
          Qualcosa da leggere:{" "}
          <Link href={fact.somethingToRead}>{fact.somethingToRead}</Link>
        </Typography>
      )}
    </Paper>
  );
}

export default function FunFacts() {
  const [shownFact, setShownFact] = useState<Fact | null>(null);
  const {
    languagePack: { funfactPage },
    switchLanguage,
    selectedLocale,
  } = useLanguagePack<LanguagePackSchema>();

  function pickAFact() {
    const idx = Math.floor(Math.random() * fax.length);
    setShownFact(fax[idx]);
  }

  return (
    <PageContainer>
      <Stack spacing={2}>
        <Header text={funfactPage.title} />
        <Typography>faccia di emil txt...</Typography>

        {shownFact !== null && <FactBubble fact={shownFact} />}
        <Button variant="outlined" onClick={pickAFact}>
          {funfactPage.buttonGenerateFact}
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            switchLanguage(selectedLocale === "it" ? "en" : "it");
          }}
        >
          cambia lingua
        </Button>
      </Stack>
    </PageContainer>
  );
}
