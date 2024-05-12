import { Box, PaletteMode, ThemeOptions, Typography } from "@mui/material";
import { OptimusUiApp } from "optimus-bo-ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { mainGreenRGB, paperBlackRGB } from "./core/colors";
import NavbarButtons from "./core/components/NavbarButtons";
import { englishPack, italianPack } from "./core/languagePacks";
import { ROUTES, pageTitleForPath } from "./core/routes";
import FunFacts from "./pages/FunFacts";
import Home from "./pages/Home";

function makeTheme(palette: PaletteMode): ThemeOptions {
  const theme: ThemeOptions = {
    palette: {
      mode: "dark",
      primary: {
        main: mainGreenRGB,
      },
      background: {
        default: `linear-gradient(to bottom right, #000000 40%, ${mainGreenRGB} 150%)`,
        paper: paperBlackRGB,
      },
    },
    typography: {
      fontFamily: [
        "Roboto Mono",
        "Source Code Pro",
        "Fira Code",
        "Consolas",
        "Monaco",
        "monospace",
      ].join(","),
    },
  };
  return theme;
}

function App() {
  return (
    <BrowserRouter>
      <OptimusUiApp
        muiConfiguration={{
          configure: true,
          makeTheme: makeTheme,
        }}
        layoutConfiguration={{
          configure: true,
          layoutConfig: {
            layoutType: "default",
            navbarConfig: {
              trailingButtons: <NavbarButtons />,
              navbarStyling: "transparent",
              header: (
                <Typography variant="h5" fontWeight="bold">
                  iaisy://daniele@tarek
                </Typography>
              ),
            },
          },
        }}
        userConfiguration={{
          configure: false,
        }}
        pageTitleConfiguration={{
          configure: true,
          pageTitleForPath: pageTitleForPath,
        }}
        reactQueryConfiguration={{
          configure: true,
        }}
        languagePackConfiguration={{
          configure: true,
          defaultLocale: "it",
          packs: {
            it: italianPack,
            en: englishPack,
          },
        }}
      >
        <Box padding={2}>
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.funFacts} element={<FunFacts />} />
          </Routes>
        </Box>
      </OptimusUiApp>
    </BrowserRouter>
  );
}

export default App;
