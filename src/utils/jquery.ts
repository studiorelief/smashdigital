import $ from 'jquery';

// Hide CMS if empty
export function hideEmpty() {
  $('.w-dyn-empty').each(function () {
    $(this).closest('section').hide(); // Cible spécifiquement l'élément <section> le plus proche
  });
}

// Filter Blog
export function blogCategories() {
  $('.blog-filter_categories-link.is-reset').click(function () {
    $('#filter-all').addClass('is-active');
  });
  $('.blog-filter_radio').click(function () {
    $('#filter-all').removeClass('is-active');
  });
}

// Span - Generic Title
export function spanGeneric() {
  $(document).ready(function () {
    $('.generic-title').html(function (_, html) {
      return html.replace(/-(.*?)-/g, '<span class="heading-generic-brand">$1</span>');
    });
  });
  $(document).ready(function () {
    $('.generic-title-alternate').html(function (_, html) {
      return html.replace(/-(.*?)-/g, '<span class="heading-generic-alternate">$1</span>');
    });
  });
}

// Span - CMS Title
export function spanCMS() {
  $(document).ready(function () {
    $('.cms-title').html(function (_, html) {
      return html.replace(/-(.*?)-/g, '<span class="text-style-switch">$1</span>');
    });
  });
}

// Span - CMS Title
export function spanRisques() {
  $(document).ready(function () {
    $('.risque_heading.w-richtext').html(function (_, html) {
      return html.replace(/-(.*?)-/g, '<span class="text-style-switch">$1</span>');
    });
  });
}

// Span - CMS Ancre
export function spanUcCMS() {
  $(document).ready(function () {
    $('.text-rich-text-anchor').html(function (_, html) {
      return html.replace(/-(.*?)-/g, '<span class="text-style-switch-uc">$1</span>');
    });
  });
}

// Replace span-wrapper by span-element
export function swipeElement() {
  $('.span-wrapper').each(function (index) {
    const relatedEl = $('.span-element').eq(index);
    relatedEl.appendTo($(this));
  });
}

// Copy clipboard URL
export function copyBlog() {
  const button = document.querySelector('.blog-content_social-link.is-url');

  if (button) {
    button.addEventListener('click', function () {
      const textarea = document.createElement('textarea');
      textarea.value = window.location.href;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    });
  } else {
  }
}
