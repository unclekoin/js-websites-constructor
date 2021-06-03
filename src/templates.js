import { row, col } from "./utils";

function title(block) {
  const tag = block.options.tag ?? 'h1';
  return row(col(`<${ tag }>${ block.value }</${ tag }>`));
}

function text(block) {
  return row(col(`<p>${ block.value }</p>`));
}

function columns(block) {
  return row(block.value.map(col).join(' '));
}

function image(block) {
  return row(`<img src="${block.value}" alt="${block.alt}">`);
}

export const templates = {
  title,
  text,
  columns,
  image
}
