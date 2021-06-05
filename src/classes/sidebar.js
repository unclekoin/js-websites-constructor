import {block} from "../utils";
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return [
      block('text'),
      block('title'),
      block('columns'),
      block('image'),
    ].join(' ');
  }

  add(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.content.value;
    const styles = event.target.styles.value;

    let newBlock;

    switch (type) {
      case 'title':
        newBlock = new TitleBlock(value, {styles});
        break;
      case 'text':
        newBlock = new TextBlock(value, {styles});
        break;
      case 'image':
        newBlock = new ImageBlock(value, {styles});
        break;
      case 'columns':
        newBlock = new ColumnsBlock(value, {styles});
        break;
      default: {
        newBlock = '';
        break;
      }
    }

    this.update(newBlock);

    event.target.content.value = '';
    event.target.styles.value = '';
  }
}
