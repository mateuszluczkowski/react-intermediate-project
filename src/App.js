import React from "react";

import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GlobalStyles from "./index.css";

import theme from "utils/theme";

import { Navigation, Wrapper, LoadingIndicator } from "components";

function App() {
   const { i18n } = useTranslation();
   return (
      <>
         <GlobalStyles />

         <Router>
            <Navigation
               items={[
                  {
                     content: "Homepage",
                     to: "/",
                  },
                  {
                     content: "Budget",
                     to: "/budget",
                  },
               ]}
               RightElement={
                  <div>
                     <button onClick={() => i18n.changeLanguage("pl")}>
                        pl
                     </button>
                     <button onClick={() => i18n.changeLanguage("en")}>
                        en
                     </button>
                  </div>
               }
            />
            <Wrapper>
               <Switch>
                  <Route exact path="/">
                     HomePage
                  </Route>
                  <Route path="/budget">BudgetPage</Route>
               </Switch>
            </Wrapper>
         </Router>
      </>
   );
}
function RootApp() {
   return (
      <ThemeProvider theme={theme}>
         <React.Suspense fallback={<LoadingIndicator />}>
            <App />
         </React.Suspense>
      </ThemeProvider>
   );
}

export default RootApp;
