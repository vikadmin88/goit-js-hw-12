import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

iziToast.settings({
  position: "topRight",
  timeout: 5000,
  resetOnHover: true,
  transitionIn: "flipInX",
  transitionOut: "flipOutX"
});

const apiUrl = "https://pixabay.com/api/";
const apiKey = "41671607-e33db59ab0332d081087354c8";

const form = document.querySelector(".search-form");
const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

form.addEventListener("submit", doApiRequest);

function doApiRequest(e) {
  e.preventDefault();

  const searchStr = form.elements.searchStr.value.trim();
  if (!searchStr) {
    form.reset();
    iziToast.error({message: "The search field cannot be empty!"});
    return;
  }

  gallery.innerHTML = "";
  loader.style.display = "block";

  const reqParams = new URLSearchParams({
    key: apiKey,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 30,
    q: searchStr
  });


  fetch(`${apiUrl}?${reqParams}`)

    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })

    .then((imagesObj) => {
      loader.style.display = "none";
      if (imagesObj.hits.length == 0) {
        iziToast.warning({message: "Sorry, there are no images matching<br> your search query.Please try again!"});
        return;
      }
      updateGalleryMarkup(imagesObj.hits);
    })

    .catch((error) => iziToast.error({message: `Api request error: ${error}`}))

    .finally(() => {
      form.reset();
    });
}

function updateGalleryMarkup(images) {
  gallery.insertAdjacentHTML("beforeend", images.map(fillGalleryCard).join(""));
  lightbox.refresh();
}

const fillGalleryCard = ({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        <ul class="metabox-list">
          <li class="mbox-info">
            <p class="mbox-info-title">Likes</p>
            <span class="mbox-info-descr">${likes}</span>
          </li>
          <li class="mbox-info">
            <p class="mbox-info-title">Views</p>
            <span class="mbox-info-descr">${views}</span>
          </li>
          <li class="mbox-info">
            <p class="mbox-info-title">Comments</p>
            <span class="mbox-info-descr">${comments}</span>
          </li>
          <li class="mbox-info">
            <p class="mbox-info-title">Downloads</p>
            <span class="mbox-info-descr">${downloads}</span>
          </li>
        </ul>
      </a>
    </li>`;
};

