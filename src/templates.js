export function title(block) {
  return `
     <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
  `;
}

export function text(block) {
  return `
         <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
      `;
}

export function columns(block) {
  return `
    <div class="row">
      ${block.value.map((column) => `<div class="col-sm"><p>${column}</p></div>`).join(' ')}
     </div>
  `;
}

export function image(block) {
  return `
    <div class="row">
       <img src="${block.value}" alt="Image">
    </div>
  `
}
