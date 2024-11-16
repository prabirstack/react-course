function customRender(reactEl, container) {
  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = rectEl.children;
  // domElement.setAttribute("href", rectEl.props.href);
  // domElement.setAttribute("target", rectEl.props.target);
  // container.appendChild(domElement);
  const domElement = document.createElement(reactEl.type);
  domElement.innerHTML = reactEl.children;
  for (const prop in reactEl.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactEl.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
