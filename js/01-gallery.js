import { galleryItems } from "./gallery-items.js";

// Change code below this line
const gallery = document.querySelector(".gallery");

const createGalleryMarkup = (items) =>
  items.map((item) => `
      <div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
              <img 
                  class="gallery__image" 
                  src="${item.preview}" 
                  data-source="${item.original}"
                  alt="${item.description}"/>
          </a>
      </div>`
  ).join("");

const addGalleryMarkup = createGalleryMarkup(galleryItems);

gallery.innerHTML = addGalleryMarkup;

gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
    blockStandardAction(event);

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const lightbox = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `);
    lightbox.show();

    document.addEventListener("keyup", (event) => {
        if (event.key === "Escape") { 
            lightbox.close();
        }
    });
}

function blockStandardAction(event) {
    event.preventDefault();
}
