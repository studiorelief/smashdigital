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

// CMS Title
export function spanCMS() {
  $(document).ready(function () {
    $('.cms-title').html(function (_, html) {
      return html.replace(/-(.*?)-/g, '<span class="text-style-switch">$1</span>');
    });
  });
}

// Copy clipboard URL
export function copyBlog() {
  const button = document.querySelector('.blog-c-i_social-link.is-url');

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
