import { PaletteMode, ThemeOptions } from "@mui/material";
import { OptimusUiApp } from "optimus-bo-ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { mainGreenRGB } from "./core/colors";
import { ROUTES, navbarLinks, pageTitleForPath } from "./core/routes";
import Contacts from "./pages/Contacts";
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
        paper: "#000000",
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
              },
            },
          }}
          configureReactQuery={true}
          configureUsers={false}
          configurePageTitles={true}
          pageTitleForPath={pageTitleForPath}
        >
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.contacts} element={<Contacts />} />
            <Route path={ROUTES.funFacts} element={<FunFacts />} />
          </Routes>
        </OptimusUiApp>
      </BrowserRouter>
    </div>
  );
}

export default App;
