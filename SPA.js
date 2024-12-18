window.onload = () => {
  const rootElement = document.getElementById("root");
  // rootElement.innerHTML = "Hello from my First SPA App!"

  const button = document.createElement("button");
  button.innerHTML = "Click me for current date";

  button.addEventListener("click", () => {
    button.innerHTML = new Date().toString();
  });

  rootElement.appendChild(button);

  const rootElement1 = document.getElementById("root");
  const ints = [1,2,3];

  ints.forEach(i => {
    let li = document.createElement("li");
    li.innerHTML = i;
    rootElement.appendChild(li);
  });
};