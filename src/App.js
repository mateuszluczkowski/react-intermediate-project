import React, { useEffect } from "react";

import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import {
   fetchBudget,
   fetchBudgetedCategories,
} from "data/actions/budget.actions";
import GlobalStyles from "./index.css";

import theme from "utils/theme";

import { Button, Navigation, Wrapper, LoadingIndicator } from "components";

function App({
   budget,
   budgetedCategories,
   fetchBudget,
   fetchBudgetedCategories,
}) {
   useEffect(() => {
      fetchBudget(1);
      fetchBudgetedCategories(1);
   }, [fetchBudget, fetchBudgetedCategories]);

   console.log(budget);
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
                     <Button onClick={() => i18n.changeLanguage("pl")}>
                        pl
                     </Button>
                     <Button onClick={() => i18n.changeLanguage("en")}>
                        en
                     </Button>
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
const ConnectedApp = connect(
   (state) => {
      return {
         budget: state.budget.budget,
         budgetedCategories: state.budget.budgetedCategories,
      };
   },
   { fetchBudget, fetchBudgetedCategories }
)(App);
function RootApp() {
   return (
      <ThemeProvider theme={theme}>
         <React.Suspense fallback={<LoadingIndicator />}>
            <ConnectedApp />
         </React.Suspense>
      </ThemeProvider>
   );
}

export default RootApp;
