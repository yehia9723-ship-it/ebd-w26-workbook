import { items } from "./items.js";

export function renderItems(list) {
  const element = document.querySelector("#list");
  element.replaceChildren();

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("listing");
    li.textContent = `${item.name} - ${item.price} EGP`;
    element.append(li);
  });
}

export function matching() {
  return items.filter((item) => item.category === "kitchen");
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#narrow");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

if (typeof document !== "undefined" && !import.meta.env?.VITEST) {
  start();
}