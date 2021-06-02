import { model } from "./model";
import { title, text, image, columns } from "./templates";
import "./assets/styles/main.css";

const $site = document.getElementById('site');

model.forEach((block) => {
  let html = '';

  switch (block.type) {
    case "title":
      html = title(block);
      break;
    case "text":
      html = text(block);
      break;
    case "columns":
      html = columns(block);
      break;
    case "image":
      html = image(block);
      break;
    default:
      html = '';
  }
  $site.insertAdjacentHTML('beforeend', html)
})
