import { Link } from "react-router-dom";

import { Wrapper } from "components";
import { Container, List } from "./Navigation.css";

export default function Navigation({ items }) {
   return (
      <Container>
         <Wrapper>
            <List>
               {items.map(({ to, content }) => (
                  <li key={to}>
                     <Link to={to}>{content}</Link>
                  </li>
               ))}
            </List>
         </Wrapper>
      </Container>
   );
}
