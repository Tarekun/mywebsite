import LanguageIcon from "@mui/icons-material/Language";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import { useLanguagePack } from "optimus-bo-ui/dist/contexts/LanguagePackContext";
import { useState } from "react";
import EnglandFlag from "../../svg/english.svg";
import ItalyFlag from "../../svg/italian.svg";
import { LanguagePackSchema } from "../languagePacks";
import CoolMenu from "./CoolMenu";

export default function NavbarButtons() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const {
    languagePack: { navbar },
    switchLanguage,
  } = useLanguagePack<LanguagePackSchema>();

  function switchLocale(newLocale: string) {
    switchLanguage(newLocale);
    setAnchorEl(null);
  }

  return (
    <Stack direction="row" spacing={0}>
      <Tooltip title={navbar.languageTooltip}>
        <IconButton
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
          }}
          color="inherit"
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <CoolMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
        <MenuItem onClick={() => switchLocale("it")}>
          <ListItemIcon>
            <img
              src={ItalyFlag}
              alt="Italy Flag"
              style={{ width: 24, height: 24 }}
            />
          </ListItemIcon>
          <ListItemText>Italiano</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => switchLocale("en")}>
          <ListItemIcon>
            <img
              src={EnglandFlag}
              alt="England Flag"
              style={{ width: 24, height: 24 }}
            />
          </ListItemIcon>
          <ListItemText>English</ListItemText>
        </MenuItem>
      </CoolMenu>
    </Stack>
  );
}
