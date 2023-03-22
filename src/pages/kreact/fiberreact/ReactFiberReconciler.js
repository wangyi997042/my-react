import { createFiber } from "./fiber"

import { isStr, updateNode } from "./utils";

export function updateHostComponent(wip) {
  if (!wip.stateNode) {
    wip.stateNode = document.createElement(wip.type)
    // 更新组件
    updateNode(wip.stateNode, wip.props)
  }
  reconcileChildren(wip, wip.props.children)
  console.log('updateHostComponent', wip);
}

// 函数组件
export function updateFunctionComponent(wip) {
  const { type, props } = wip;
  const children = type(props);
  reconcileChildren(wip, children);
}
// 类组件
export function updateClassComponent(wip) {
  const { type, props } = wip;
  const instance = new type(props);
  const childVnode = instance.render();
  // const children = type(props);
  reconcileChildren(wip, childVnode);
}

export function updateFragmentComponent(wip) {
  reconcileChildren(wip, wip.props.children);
}

function reconcileChildren(returnFiber, children) {
  if (isStr(children)) {
    return;
  }
  const newChildren = Array.isArray(children) ? children : [children];
  let previousNewFiber = null;

  for (let i = 0; i < newChildren.length; i++) {
    const newChild = newChildren[i];
    const newFiber = createFiber(newChild, returnFiber);
    if (previousNewFiber === null) {
      returnFiber.child = newFiber;
    } else {
      previousNewFiber.sibling = newFiber;
    }

    previousNewFiber = newFiber;
  }
}
