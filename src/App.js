import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./index.css";

import theme from "utils/theme";

import { Navigation } from "components";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />

         <Router>
            <Navigation
               items={[
                  {
                     content: "Homepage",
                     to: "/",
                  },
                  {
                     content: "Budgetpage",
                     to: "/budget",
                  },
               ]}
            />
            <Switch>
               <Route exact path="/">
                  HomePage
               </Route>
               <Route path="/budget">BudgetPage</Route>
            </Switch>
         </Router>
      </ThemeProvider>
   );
}

export default App;
