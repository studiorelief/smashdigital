import './index.css';

import {
  blogCategories,
  copyBlog,
  /* hideEmpty, */ spanCMS,
  spanRisques,
  spanUcCMS,
  swipeElement,
} from '$utils/jquery';
import { loadScript } from '$utils/loadScript';
import { swiperPartners, swiperReferences, swiperRisque, swiperUseCase } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  /*
  ! Call functions
  */
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-toc@1/toc.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-socialshare@1/socialshare.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-richtext@1/richtext.js'),
    /* loadScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ), */
    loadScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js'),
  ]).then(() => {
    setTimeout(() => {
      loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js');
    }, 1000);
  });

  /*
  ! Global
  */

  /* hideEmpty(); */
  if (window.matchMedia('(min-width: 991px)').matches) {
    swipeElement();
  }

  /* 
  Replace element -*-
  */
  spanCMS();
  spanUcCMS();
  spanRisques();

  const path = window.location.pathname;

  if (path.includes('/blog')) {
    blogCategories();
  }
  if (path.includes('/articles')) {
    copyBlog();
    swiperUseCase();
  }
  if (path.includes('/landing') || path.includes('/')) {
    swiperPartners();
    swiperReferences();
    swiperRisque();
  }

  if (path.includes('/use-case')) {
    swiperUseCase();
  }
});
