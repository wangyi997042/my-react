function render(vnode, container) {
  console.log('vnode===', vnode);
  // 1 vnode => node
  const node = createNode(vnode);
  // 2. node -> container
  container.appendChild(node)
}

function isString(s) {
  return typeof s === 'string'
}

function createNode(vnode) {
  const { type, props } = vnode;
  let node;
  if (isString(type)) {
    node = document.createElement(type);
    // 更新子元素将其放置到父节点中
    reconcileChildren(node, props.children)
    updateNode(node, props);
  } else if (typeof type === 'function') {
    node = type.prototype.isReactComponent
      ? updateClassComponent(vnode)
      : updateFunctionComponent(vnode)
  } else {
    node = document.createTextNode(vnode)
  }

  return node
}

// 函数组件
function updateFunctionComponent(vnode) {
  const { type, props } = vnode;
  // 函数组件会返回新的vnode
  const childVnode = type(props);
  const node = createNode(childVnode)
  return node;
}

// 类组件
function updateClassComponent(vnode) {
  const { type, props } = vnode;
  const instance = new type(props);
  const childVnode = instance.render()
  const node = createNode(childVnode);
  return node;
}

function updateNode(node, val) {
  Object.keys(val)
    .filter((k) => k !== 'children')
    .forEach((k) => {
      node[k] = val[k]
    })
}

function reconcileChildren(parentNode, children) {
  // 如果children是文本需要处理一下成数组
  const newChildren = Array.isArray(children) ? children : [children];
  for (let i = 0; i < newChildren.length; i++) {
    const child = newChildren[i];
    render(child, parentNode)
  }
}

export default { render }
