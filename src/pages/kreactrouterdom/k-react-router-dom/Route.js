import React, { Component } from "react";
import matchPath from "./matchPath";

import RouterContext from "./RouterContext";

class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {
          (context) => {
            const { location } = context;
            const {
              path, component, render, children
            } = this.props;
            const match = path ? matchPath(location.pathname, this.props) : context.match;
            console.log('match', matchPath(location.pathname, this.props));

            const props = {
              ...context,
              location,
              match
            };

            return (
              <RouterContext.Provider value={props}>
                {
                  match
                    ? children
                      ? typeof children === 'function'
                        ? children(props)
                        : children
                      : component
                        ? React.createElement(component, props)
                        : render
                          ? render(props)
                          : null
                    : typeof children === 'function'
                      ? children(props)
                      : null
                }
              </RouterContext.Provider>
            )
          }
        }
      </RouterContext.Consumer>
    )
  }
}

export default Route;
