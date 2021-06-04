import image from "url:./assets/images/image.jpeg";
import Block from "./classes/blocks";

export const model = [
  new Block('title', 'Websites constructor', {
    tag: 'h2',
    styles: {
      padding: '1.5rem',
      'text-align': 'center',
      color: '#ffffff',
      'background-color': '#5352ed',
    }}),
  new Block('image', image, {alt: 'Some image'}),
  new Block(
    'text',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum fugiat fugit illum inventore nihil tempora, tempore. Cupiditate dolor dolore esse eveniet facilis pariatur qui suscipit? Asperiores ratione vel voluptatibus.',
    {
      styles: {
        padding: '2rem'
      }
    }),
  new Block(
    'columns',
    [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum fugiat fugit illum inventore nihil tempora, tempore. Cupiditate dolor dolore esse eveniet facilis pariatur qui suscipit? Asperiores ratione vel voluptatibus.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum fugiat fugit illum inventore nihil tempora, tempore. Cupiditate dolor dolore esse eveniet facilis pariatur qui suscipit? Asperiores ratione vel voluptatibus.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum fugiat fugit illum inventore nihil tempora, tempore. Cupiditate dolor dolore esse eveniet facilis pariatur qui suscipit? Asperiores ratione vel voluptatibus.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum fugiat fugit illum inventore nihil tempora, tempore. Cupiditate dolor dolore esse eveniet facilis pariatur qui suscipit? Asperiores ratione vel voluptatibus.',
    ],
    { styles: { padding: '2rem'}}
    ),
];
