import React, { Component } from "react";
import matchPath from "./matchPath";
import RouterContext from "./RouterContext";

class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {
          (context) => {
            const { location } = context;
            let match; // 记录是否匹配
            let element; // 记录匹配的元素(router\redirect)

            // todo 遍历查找匹配
            React.Children.forEach(this.props.children, (child) => {
              if (match == null && React.isValidElement(child)) {
                // 前面还没有匹配上， 并且child是有效元素
                element = child;
                match = child.props.path ? matchPath(location.pathname, child.props) : context.match;
              }
            })
            return match ? React.cloneElement(element, { computedMatch: match }) : null;
          }
        }
      </RouterContext.Consumer>
    )
  }
}

export default Switch;
