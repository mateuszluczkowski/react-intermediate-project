import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { Container, List, NavigationWrapper } from "./Navigation.css";

export default function Navigation({ items = [], RightElement }) {
   const { t } = useTranslation();
   return (
      <Container>
         <NavigationWrapper>
            <List>
               {items.map(({ to, content }) => (
                  <li key={to}>
                     <Link to={to}>{t(content)}</Link>
                  </li>
               ))}
            </List>
            {RightElement}
         </NavigationWrapper>
      </Container>
   );
}

Navigation.propTypes = {
   items: PropTypes.array.isRequired,
};
