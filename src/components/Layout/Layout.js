import React from "react";
import Aux from "../../hoc/Aux";

const layout = (props) => (
  // élement racine d'habillage
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
