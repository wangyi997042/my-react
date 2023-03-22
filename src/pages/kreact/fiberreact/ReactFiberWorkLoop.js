import {
  updateClassComponent,
  updateFragmentComponent,
  updateFunctionComponent,
  updateHostComponent,
} from "./ReactFiberReconciler";

import { isStr, isFn } from "./utils"

// * stateNode 当前dom
// *
// wip work in progress 当前正在工作当中的 dom
let wipRoot = null;
// 将要更新的下一个fiber节点
let nextUnitOfWork = null;

// 处理更新
export function scheduleUpdateOnFiber(fiber) {
  wipRoot = fiber;
  wipRoot.sibling = null;

  nextUnitOfWork = wipRoot;
}

// 协调
function performUnitOfWork(wip) {
  // 1、更新自己
  // todo 原生标签 函数标签 类组件等
  const { type } = wip;
  if (isFn(type)) {
    const { isReactComponent } = type.prototype;
    if (isReactComponent) {
      updateClassComponent(wip)
    } else {
      updateFunctionComponent(wip);
    }
  } else if (isStr(type)) {
    // 原生标签
    updateHostComponent(wip);
  } else {
    // fragment
    console.log(wip);
    // updateFragmentComponent(wip);
  }

  // 2. 返回下一个要更新的fiber
  // 深度优先遍历 - 王朝的故事
  if (wip.child) {
    return wip.child
  }
  let next = wip;
  while (next) {
    if (next.sibling) {
      return next.sibling;
    }
    next = next.return;
  }
  return null
}

//
function workLoop(IdleDeadline) {
  while (nextUnitOfWork && IdleDeadline.timeRemaining() > 0) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }
  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }
}
// 当前浏览器有空闲时调用
requestIdleCallback(workLoop);

// 提交
function commitRoot() {
  commitWork(wipRoot.child)
}

// 找父dom节点
function getParentNode(fiber) {
  let next = fiber.return;
  while (!next.stateNode) {
    next = next.return
  }

  return next.stateNode
}

function commitWork(fiber) {
  if (!fiber) {
    return
  }

  const { stateNode } = fiber;
  // 父dom节点
  // 所有fiber都有dom节点吗 0
  const parentNode = getParentNode(fiber) // fiber.return.stateNode;
  // 1提交自己
  if (stateNode) {
    parentNode.appendChild(stateNode);
  }

  // 2 提交孩子
  commitWork(fiber.child)

  // 3、提交下一个兄弟
  commitWork(fiber.sibling)
}
