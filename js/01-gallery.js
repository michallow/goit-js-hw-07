import { galleryItems } from "./gallery-items.js";

// Change code below this line
const gallery = document.querySelector(".gallery");

for (let item of galleryItems) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.dataset.source = item.original;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  gallery.appendChild(galleryItem);
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const lightbox = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  const closeLightboxOnEscape = function (e) {
    if (e.key === 'Escape') {
      lightbox.close();
      window.removeEventListener('keyup', closeLightboxOnEscape);
    }
  };

  lightbox.show();


    window.addEventListener('keyup', closeLightboxOnEscape);
  });


console.log(galleryItems);