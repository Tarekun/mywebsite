import CloseIcon from "@mui/icons-material/Close";
import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import { useLanguagePack } from "optimus-bo-ui/dist/contexts/LanguagePackContext";
import { useState } from "react";
import CoolMenu from "../CoolMenu";
import Header from "../Header";
import Typedography from "../Typedography";
import { activeGreenRGB, mainGreenRGB } from "../colors";
import { LanguagePackSchema } from "../languagePacks";

export default function Presentazione() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const {
    languagePack: {
      homePage: { presentationText, presentationTitle, closeBoxCaption },
    },
  } = useLanguagePack<LanguagePackSchema>();

  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "primary.main",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: "3px",
        //TODO: rimuovere
        marginBottom: 5,
      }}
    >
      <Stack direction="row" alignItems="center">
        <Box padding={1} paddingLeft={2}>
          <Header text={presentationTitle} underline={false} />
        </Box>
        <Box flexGrow={1} />
        <Box
          onClick={(event) => setAnchorEl(event.currentTarget)}
          sx={{
            backgroundColor: mainGreenRGB,
            color: mainGreenRGB,
            border: 2,
            "&:hover": {
              backgroundColor: activeGreenRGB,
              cursor: "pointer",
            },
          }}
        >
          <IconButton disableFocusRipple disableRipple>
            <CloseIcon
              sx={{
                color: "black",
                margin: 2,
              }}
            />
          </IconButton>
        </Box>
        <CoolMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
          <Box
            sx={{
              padding: 3,
              paddingTop: 2,
              paddingBottom: 2,
              backgroundColor: "black",
            }}
          >
            <Typography>{closeBoxCaption}</Typography>
          </Box>
        </CoolMenu>
      </Stack>

      <Box
        sx={{ width: "100%", height: "1px", backgroundColor: "primary.main" }}
      />

      <Typedography
        fullText={presentationText}
        showCursor
        typographyProps={{
          margin: 2,
          sx: {
            textAlign: "left",
          },
        }}
      />
    </Card>
  );
}
