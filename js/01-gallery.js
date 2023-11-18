import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onClick);

const markup = galleryItems.map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  ).join('');

  let instance;

  galleryEl.insertAdjacentHTML('beforeend', markup);

  function onClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      return;
    }
    instance = basicLightbox.create(`
     <img src="${e.target.dataset.source}" width="800" height="600"> `);
  
    instance.show();
  }
  
  galleryEl.addEventListener('keydown', evt => {
    if ((evt.code === 'Escape') & instance.visible()) {
      instance.close();
      console.log(evt);
    }
  });
