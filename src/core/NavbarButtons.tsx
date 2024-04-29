import LanguageIcon from "@mui/icons-material/Language";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { useLanguagePack } from "optimus-bo-ui/dist/contexts/LanguagePackContext";
import { LanguagePackSchema } from "./languagePacks";

export default function NavbarButtons() {
  const { languagePack, selectedLocale, switchLanguage } =
    useLanguagePack<LanguagePackSchema>();

  function switchLocale() {
    if (selectedLocale === "en") {
      switchLanguage("it");
    } else {
      switchLanguage("en");
    }
  }

  return (
    <Stack direction="row" spacing={0}>
      <Tooltip title={languagePack.navbar.languageTooltip}>
        <IconButton onClick={switchLocale} color="inherit">
          <LanguageIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
