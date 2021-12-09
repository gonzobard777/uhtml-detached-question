import {render, html} from '//unpkg.com/uhtml?module';

const update = (items) => {
  const ref = document.querySelector('.list-items');
  render(ref, html`
    <ul>
      ${items.map(
        ({id, name}) =>
          html.for(ref, id)`<li data-id=${id}>${name}</li>`
      )}
    </ul>`
  );
};

const items = [
  {id: 1, name: 'Article X'},
  {id: 2, name: 'Article Y'},
  {id: 3, name: 'Article Z'},
];

update(items);

// setTimeout(
//   (randomly) => {
//     items.sort(randomly);
//     update(items);
//   },
//   5000,
//   () => Math.random() - Math.random()
// );
