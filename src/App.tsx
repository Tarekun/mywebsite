import { PaletteMode, ThemeOptions } from "@mui/material";
import { OptimusUiApp } from "optimus-bo-ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarButtons from "./core/NavbarButtons";
import { mainGreenRGB, paperBlackRGB } from "./core/colors";
import { englishPack, italianPack } from "./core/languagePacks";
import { ROUTES, navbarLinks, pageTitleForPath } from "./core/routes";
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
    <div className="App">
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
                links: navbarLinks,
                trailingButtons: <NavbarButtons />,
                navbarStyling: "solid",
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
          configureReactQuery={true}
          languagePackConfiguration={{
            configure: true,
            defaultLocale: "it",
            packs: {
              it: italianPack,
              en: englishPack,
            },
          }}
        >
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.funFacts} element={<FunFacts />} />
          </Routes>
        </OptimusUiApp>
      </BrowserRouter>
    </div>
  );
}

export default App;
