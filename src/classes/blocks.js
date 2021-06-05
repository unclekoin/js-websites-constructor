import {col, css, row} from "../utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('The method toHTML must be implemented');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = 'h1', styles } = this.options;
    return row(col(`<${ tag }>${ this.value }</${ tag }>`), css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return row(`<img src="${this.value}" alt="${this.options.alt}">`);
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return row(this.value.map(col).join(' '), css(this.options.styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return row(col(`<p>${ this.value }</p>`), css(this.options.styles));
  }
}
