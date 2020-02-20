/**
 * #MENU
 */
$(function() {
  $(document).on('click', '.js-hamburger, .js-mobile-nav-close', function (e) {
    e.preventDefault();
    $('.mobile-nav').toggleClass('is-visible');
    $('html, body').toggleClass('is-overflowed');
  });
});


/**
 * #MOBILE SEARCH
 */
$(function () {
  $(document).on('click', '.js-search-trigger, .js-mobile-search-close', function (e) {
    e.preventDefault();
    $('.mobile-search').toggleClass('is-open');

    if ($(this).is('.js-search-trigger')) {
      $('.mobile-search [type=text]').focus();
    }
  });
});


/**
 * #HEADER PHONES
 */
$(function () {
  $(document).on('click', '.js-more-phones', function (e) {
    e.preventDefault();
    let btn = $(this),
        allPops = $('.header-phones__pop'),
        currentPop = btn.next(),
        otherPops = allPops.not(currentPop);

    if (!otherPops.is(':hidden')) {
      otherPops.prop('hidden', true);
    }
    currentPop.is(':hidden') ?
      currentPop.prop('hidden', false) :
      currentPop.prop('hidden', true);
  });
});


/**
 * #HERO SLIDER
 */
$(function () {
  let slider = $('.js-hero-carousel');
  slider.owlCarousel({
    items:1,
  });

  $(document).on('mouseover click', '.hero-slide', function () {
    let current = $(this);
    current.siblings().removeClass('is-active');
    current.addClass('is-active');
  });
});


/**
 * #VIEWED SLIDER
 */
$(function () {
  $('.js-viewed-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: $('.js-viewed-slider-nav .headed-block__prev'),
    nextArrow: $('.js-viewed-slider-nav .headed-block__next'),
    dots: false,
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1279.98,
        settings: {
          slidesToShow: 5,
        }
      },
    ],
  });
});


/**
 * #PRODUCT SLIDER
 */
$(function () {
  $('.js-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    asNavFor: '.js-product-slider-nav',
  });

  $('.js-product-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.js-product-slider',
    arrows: false,
  });

  $('.js-product-slider-nav').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.js-product-slider-nav .slick-slide').removeClass('slick-current');
    $('.js-product-slider-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
  });

  $('.js-product-slider-nav .slick-slide:not(.slick-cloned)').eq(0).addClass('slick-current');
});


/**
 * #PRODUCT CAROUSEL
 */
$(function () {
  $('.js-product-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.product-carousel__btn--prev'),
    nextArrow: $('.product-carousel__btn--next'),
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
  });
});


/**
 * #PRODUCT CELL SLIDER
 */
$(function () {
  $('.js-product-cell-slider').each(function(key, item) {

    let sliderIdName = 'slider' + key;
    let sliderNavIdName = 'sliderNav' + key;

    this.id = sliderIdName;
    $('.product-cell__slider-nav')[key].id = sliderNavIdName;

    let sliderId = '#' + sliderIdName;
    let sliderNavId = '#' + sliderNavIdName;

    $(sliderId).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      dots: true,
      prevArrow: $(sliderNavId + ' .product-cell__slider-btn--prev'),
      nextArrow: $(sliderNavId + ' .product-cell__slider-btn--next'),
    });
  });
});


/**
 * #HIDING FORM LABELS
 */
$(function () {
  $(document).on('focus', '.form-input, .form-textarea', function () {
    $(this).siblings('.form-label').hide();
  });

  $(document).on('blur', '.form-input, .form-textarea', function () {
    if (! $(this).val()) {
      $(this).siblings('.form-label').show();
    }
  });
});


/**
 * #CATALOG BLOCK MORE VIEW
 */
$(function () {
  $(document).on('click', '.js-catalog-block-more', function (e) {
    e.preventDefault();
    let btn = $(this),
        textOpen = btn.data('text-open'),
        textClose = btn.data('text-close'),
        block = $('.catalog-headed__body');

    block.toggleClass('is-open');
    block.hasClass('is-open') ? btn.text(textClose) : btn.text(textOpen);
  });
});



/**
 * #TABS
 */
$(function () {
  let tabBtn = $('.js-tabs-nav button'),
      tabContent = $('.tab'),
      tabName;

  $(document).on('click', '.js-tabs-nav button', function () {
    let currentTab = $(this);
    tabBtn.removeClass('is-active');
    currentTab.addClass('is-active');
    tabName = currentTab.data('tab-name');
    selectTab(tabName);
  });

  function selectTab(tabName) {
    tabContent.each(function() {
      $(this).hasClass(tabName) ?
        $(this).addClass('is-active') :
        $(this).removeClass('is-active');
    });
  }
});


/**
 * #INNER TABS
 */
$(function () {
  let tabBtn = $('.js-innertabs-nav button'),
      tabContent = $('.innertab'),
      tabName;

  $(document).on('click', '.js-innertabs-nav button', function () {
    let currentTab = $(this);
    tabBtn.removeClass('is-active');
    currentTab.addClass('is-active');
    tabName = currentTab.data('tab-name');
    selectTab(tabName);
  });

  function selectTab(tabName) {
    tabContent.each(function() {
      $(this).hasClass(tabName) ?
        $(this).addClass('is-active') :
        $(this).removeClass('is-active');
    });
  }
});


/**
 * #WISH BUTTON
 */
$(function () {
  $(document).on('click', '.js-wish-button', function (e) { 
    e.preventDefault();
    var button = $(this);
    var stateClass = 'wish-button--in-wish';
    if (!button.hasClass(stateClass)) {
      button
        .addClass(stateClass)
        .find('use')
        .attr('xlink:href', '#heart');
    }
  });
});


/**
 * #BUY BUTTON
 */
$(function () {
  $(document).on('click', '.js-buy-button', function (e) { 
    e.preventDefault();
    var button = $(this);
    var stateClass = 'buy-button--in-cart';
    if (!button.hasClass(stateClass)) {
      button.addClass(stateClass);
    }
  });
});


/**
 * #CONTACT FORM
 */
$(function () {
  var form = $('#contactForm');

  form.submit(function(e){
    e.preventDefault();

    var validator = form.validate({
      rules: {
        'user-name': {
          required: true,
        },
        'user-email': {
          required: true,
          email: true,
        },
        'user-comment': {
          required: true,
        },
      },
      messages: {
        'user-name': {
          required: 'Заполните поле',
        },
        'user-email': {
          required: 'Заполните поле',
          email: 'Укажите правильный имейл',
        },
        'user-comment': {
          required: 'Заполните поле',
        },
      },
    });

    if(form.valid()) {
      $.ajax({
        url : 'mail.php',
        type: 'POST',
        data: $(this).serialize(),
      }).done(function(resp) {
        answer(resp);
      });
    }
  });


  // Answers
  var resp = {
    success: {
      title: 'Заявка отправлена!',
      text: 'Ваша заявка отправлена, наши менеджеры свяжуться с вами в ближайшее время.'
    },
    fail: {
      title: 'Произошла ошибка!',
      text: 'Попробуйте позже'
    }
  };

  function answer(resp) {
    var respTitle = document.querySelector('.modal--answer .answer-title');
    var respText = document.querySelector('.modal--answer .answer-text');

    if(res == "done"){
      respTitle.textContent = resp.success.title;
      respText.textContent = resp.success.text;
    }
    if(res == "error"){
      respTitle.textContent = resp.fail.title;
      respText.textContent = resp.fail.text;
    }

    // MicroModal.show('modal-answer');
  }
});