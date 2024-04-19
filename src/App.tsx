import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { OptimusUiApp } from "optimus-bo-ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES, pageTitleForPath } from "./core/routes";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "rgb(20, 230, 20)",
      },
    },
  });

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <OptimusUiApp
            configureMui={false}
            themeOverrides={theme}
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
            fetchCurrentUser={undefined}
            isSudo={undefined}
          >
            <Routes>
              <Route path={ROUTES.home} element={<Home />} />
              <Route path={ROUTES.contacts} element={<Contacts />} />
            </Routes>
          </OptimusUiApp>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
