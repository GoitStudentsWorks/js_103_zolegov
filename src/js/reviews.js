import { getReviews } from './getReviews';
import { renderReviews } from './renderReviews';

// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
// import spriteUrl from '../img/svg/sprite.svg';

export const reviewsListEl = document.querySelector('.reviews-list');
const listContainerEl = document.querySelector('.list-conteiner');

async function onLoad() {
  try {
    const fetchedReviews = await getReviews();
    renderReviews(fetchedReviews);

    removeEventListener('load', onLoad);
  } catch (error) {
    const errorContainer = `
            <div class="errorContainer">
                <h3 class="not-found-title">Oops, something went wrong...😱</h3>
                <p class="not-found-text">Reviews not found..</p>
            </div>
          `;
    listContainerEl.innerHTML = errorContainer;

    iziToast.show({
      message: 'Oops, there are issues with showing reviews!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      transitionIn: 'bounceInDown',
      transitionOut: 'fadeOutUp',
      theme: 'dark',
      timeout: 5000,
      closeOnClick: true,
    });
  }
}

addEventListener('load', onLoad);

const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.reviews-btn-right',
    prevEl: '.reviews-btn-left',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: true,
  touchEventsTarget: 'container',
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    // when window width is >= 320px
    1280: {
      slidesPerView: 2,
    },
    onlyInViewPort: true,
    autoHeight: true,
  },
});
