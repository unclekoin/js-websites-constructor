import image from "url:./assets/images/image.jpeg";

export const model = [
  {type: 'title', value: 'Hello World from JS', options: {
    tag: 'h2'
    }},
  {type: 'text', value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, vero.'},
  {type: 'columns', value: [
      '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      '3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      '4. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    ]},
  {type: 'image', value: image, alt: 'Some image'}
];
