export const createMarkUp = array => {
  return array
    .map(
      image => `<div class="img-item">
        <a href="${image.largeImageURL}" class="lightbox-link">
          <img src="${image.webformatURL}" alt="${image.tags}">
        </a>
        <div class="image-info">
          <p>Likes: ${image.likes}</p>
          <p>Views: ${image.views}</p>
          <p>Comments: ${image.comments}</p>
          <p>Downloads: ${image.downloads}</p>
        </div>
      </div>`
    )
    .join('');
};
