import "./styles.css";
import { dropdownEventHandler } from "./dropdown.js";

const plantsBtn = document.getElementById("btn-plants");
const toolsBtn = document.getElementById("btn-tools");

plantsBtn.addEventListener("click", (event) => {
  console.log("clicking plantsBtn");
  dropdownEventHandler(event.target);
});

toolsBtn.addEventListener("click", (event) => {
  console.log("clicking tools button");
  dropdownEventHandler(event.target);
});
