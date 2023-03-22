import React from "react";
import RouterContext from "./RouterContext";

const withRouter = (WrapperComponent) => (props) => (
    <RouterContext.Consumer>
      {(context) => <WrapperComponent {...props} {...context} />}
    </RouterContext.Consumer>
)

export default withRouter;
