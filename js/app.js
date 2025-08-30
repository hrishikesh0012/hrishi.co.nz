(function() {
  $(document).ready(function() {
    var container, ps;
    container = document.querySelector('#ps');
    if (container) {
      ps = new PerfectScrollbar(container);
    }
    $('.js-product-files-toggle').on('click', function() {
      $(this).closest('.js-product-files').toggleClass('is-open');
      return false;
    });
    if ($('.album-grid:not(.square)').length > 0) {
      $('.album-grid:not(.square)').each(function(i, obj) {
        var grid;
        $(this).addClass("grid-" + i);
        grid = Macy({
          container: ".grid-" + i,
          trueOrder: true,
          waitForImages: false,
          mobileFirst: true,
          margin: 20,
          columns: 1,
          breakAt: {
            1440: 4,
            1024: 3,
            768: 2
          }
        });
        grid.on('macy.images.complete', function() {
          $('.spinner').hide();
        });
      });
    }
    $('.site-header-btn').on('click', function() {
      $('.header-nav').fadeToggle('fast');
      return $('body').toggleClass('body-fixed header-nav-active');
    });
    $('.toggle-mobile-portfolio').on('click', function() {
      $(this).parent().toggleClass('active');
      $(this).siblings('.header-subnav').slideToggle();
      return false;
    });
    if ($(".contact-page").length > 0) {
      $('textarea.js-auto-size').textareaAutoSize();
      return $("#contact_form").on("submit", function(e) {
        window.contactForm.submit();
        return e.preventDefault();
      });
    }
  });

}).call(this);
