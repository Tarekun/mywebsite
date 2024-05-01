import CloseIcon from "@mui/icons-material/Close";
import { Box, Card, IconButton, Menu, Stack, Typography } from "@mui/material";
import { useLanguagePack } from "optimus-bo-ui/dist/contexts/LanguagePackContext";
import { useState } from "react";
import Typedography from "../Typedography";
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
        <Typography
          variant="h4"
          color="primary.main"
          sx={{ textAlign: "left" }}
          margin={2}
        >
          {presentationTitle}
        </Typography>
        <Box flexGrow={1} />

        <IconButton
          sx={{ color: "primary.main", margin: 2 }}
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <CloseIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          slotProps={{
            paper: {
              sx: {
                border: 1,
                borderColor: "primary.main",
                backgroundColor: "black",
                backgroundImage: "#000",
              },
              square: true,
            },
          }}
          MenuListProps={{
            sx: {
              padding: 0,
            },
          }}
        >
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
        </Menu>
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
