import { PaletteMode, ThemeOptions } from "@mui/material";
import { OptimusUiApp } from "optimus-bo-ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES, pageTitleForPath } from "./core/routes";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";

function App() {
  function makeTheme(palette: PaletteMode): ThemeOptions {
    const theme: ThemeOptions = {
      palette: {
        mode: "dark",
        primary: {
          main: "rgb(20, 230, 20)",
        },
        background: {
          default:
            "linear-gradient(to bottom right, #000000 20%, #14E614 150%)",
        },
      },
    };
    return theme;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <OptimusUiApp
          muiConfiguration={{
            configure: true,
            makeTheme: makeTheme,
          }}
          navbarLinks={[
            {
              label: "Home",
              url: ROUTES.home,
            },
            {
              label: "Contacts",
              url: ROUTES.contacts,
            },
          ]}
          configureReactQuery={true}
          configureUsers={false}
          configurePageTitles={true}
          pageTitleForPath={pageTitleForPath}
          //TODO: remove these when library is fixed
          // fetchCurrentUser={undefined}
          // isSudo={undefined}
        >
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.contacts} element={<Contacts />} />
          </Routes>
        </OptimusUiApp>
      </BrowserRouter>
    </div>
  );
}

export default App;
