import './index.css';

import { blogCategories, copyBlog, hideEmpty, spanCMS } from '$utils/jquery';
import { loadScript } from '$utils/loadScript';
import { swiperPartners } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  /*
  ! Call functions
  */
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-toc@1/toc.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-socialshare@1/socialshare.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-richtext@1/richtext.js'),
    loadScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
  ]).then(() => {
    setTimeout(() => {
      loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js');
    }, 1000);
  });

  /*
  ! Global
  */

  hideEmpty();

  const path = window.location.pathname;

  if (path.includes('/blog')) {
    blogCategories();
  }
  if (path.includes('/articles')) {
    copyBlog();
  }
  if (path.includes('/landing')) {
    spanCMS();
  }
  if (path.includes('/landing') || path.includes('/')) {
    swiperPartners();
  }
});
