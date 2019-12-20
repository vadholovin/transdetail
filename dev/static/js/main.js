$(document).ready(function () {
  
  /**
   * Menu
   */
  let toggleMenu = function () {
    $('.js-hamburger').click(function (e) { 
      e.preventDefault();
      if ($('.mobile-nav').is('[hidden]')) {
        $('.mobile-nav').removeAttr('hidden');
      } else {
        $('.mobile-nav').attr('hidden', '');
      }
      
      $('.mobile-nav, .mobile-nav__content, .mobile-nav__overlay').toggleClass('is-visible');

      $('html, body').toggleClass('is-overflowed');

      if ($('.mobile-search').hasClass('is-open')) {
        $('.mobile-search').removeClass('is-open');
      }
    });

    $('.js-mobile-nav-close').click(function (e) { 
      e.preventDefault();
      $('.mobile-nav, .mobile-nav__content, .mobile-nav__overlay').removeClass('is-visible');
      $('.mobile-nav').attr('hidden', '');
      $('html, body').removeClass('is-overflowed');
    });
  };


  /**
   * Mobile search
   */
  let searchToggle = function () {
    $('.js-search-trigger').click(function (e) { 
      e.preventDefault();
      $('.mobile-search').toggleClass('is-open');
      $('.mobile-search [type=text]').focus();
    });

    $('.js-mobile-search-close').click(function (e) { 
      e.preventDefault();
      $('.mobile-search').removeClass('is-open');
      $('.mobile-search [type=text]').focus();
    });
  };


  /**
   * Mobile info
   */
  let infoToggle = function () {
    $('.js-info-trigger').click(function (e) { 
      e.preventDefault();
      $('.mobile-info').toggleClass('is-open');

      if ($('.mobile-search').hasClass('is-open')) {
        $('.mobile-search').removeClass('is-open');
      }
    });
  };
  

  /**
   * Hero slider
   */

  let heroSlider = function() {
    let elem = document.querySelector('.js-hero-carousel');
    let flkty = new Flickity( elem, {
      cellAlign: 'left',
      freeScroll: true,
      wrapAround: true,
      imagesLoaded: true,
      prevNextButtons: false,
      selectedAttraction: 0.01,
      friction: 0.15,
      autoPlay: 3000,
      pauseAutoPlayOnHover: false
    });
    flkty.on( 'change', flkty.reposition );
  };

  /**
   * Viewed slider
   */
  let viewedSlider = function () {
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
  };


  /**
   * Product slider
   */
  let productSlider = function () {
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
      //remove all active class
      $('.js-product-slider-nav .slick-slide').removeClass('slick-current');
      //set active class for current slide
      $('.js-product-slider-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');  
    });

    $('.js-product-slider-nav .slick-slide:not(.slick-cloned)').eq(0).addClass('slick-current');
  };


  /**
   * Tabs
   */
  let clickTabs = function () { 
    let tabBtn = $('.js-tabs-nav button'),
        tabContent = $('.tab'),
        tabName;
    
    tabBtn.click(function () {
      tabBtn.removeClass('is-active');
      $(this).addClass('is-active');
      tabName = $(this).data('tab-name');
      selectTab(tabName);
    });

    function selectTab(tabName) {
      tabContent.each(function() {
        if ($(this).hasClass(tabName)) {
          $(this).addClass('is-active')
        } else {
          $(this).removeClass('is-active');
        }
      });
    }
  };

  /**
   * Inner Tabs
   */
  let clickInnerTabs = function () { 
    let tabBtn = $('.js-innertabs-nav button'),
        tabContent = $('.innertab'),
        tabName;
    
    tabBtn.click(function () {
      tabBtn.removeClass('is-active');
      $(this).addClass('is-active');
      tabName = $(this).data('tab-name');
      selectTab(tabName);
    });

    function selectTab(tabName) {
      tabContent.each(function() {
        if ($(this).hasClass(tabName)) {
          $(this).addClass('is-active')
        } else {
          $(this).removeClass('is-active');
        }
      });
    }
  };


  /**
   * Product carousel
   */
  let productCarousel = function() {
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
  };


  /**
   * Product cell slider
   */
  let productCellSlider = function() {
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
  };


  /**
   * Hiding form labels
   */
  let hideLabel = function () {
    $('.form-input, .form-textarea').focus(function () {
      $(this).siblings('.form-label').hide();
    });

    $('.form-input, .form-textarea').blur(function () {
      if (! $(this).val()) {
        $(this).siblings('.form-label').show();
      }
    });
  };


  /**
   * Replacing selects
   */
  let relaceSelect = function () {
    $('.js-select').selectmenu();
  };
  

  /**
   * Micromodal init
   */
  let initMicromodal = function () {
    MicroModal.init();
  };


  /**
   * Datepicker init
   */
  let initDatepicker = function () {
    $("#user-birthday").dropdownDatepicker({
      defaultDate: 'dd-mm-yyyy',
      displayFormat: 'dmy',
      submitFormat: 'dd-mm-yyyy',
      minDate: 1930,
      monthLongValues: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      // initialDayMonthYearValues: ['День', 'Месяц', 'Год'],
      allowFuture: false,
      daySuffixes: false,
      monthSuffixes: false,
      dayLabel: 'День',
      monthLabel: 'Месяц',
      yearLabel: 'Год',
    });
  };

  
  heroSlider();
  productSlider();
  viewedSlider();
  clickTabs();
  clickInnerTabs();
  productCarousel();
  productCellSlider();
  hideLabel();
  relaceSelect();
  toggleMenu();
  searchToggle();
  infoToggle();
  // initMicromodal();
  // initDatepicker();
});


/**
 * #FLICKITY PROTOTYPE SIBLING SELECTOR
 */
(function() {

  Flickity.createMethods.push('_createPrevNextCells');

  Flickity.prototype._createPrevNextCells = function () {
    this.on('select', this.setPrevNextCells);
  };

  Flickity.prototype.setPrevNextCells = function () {
    // remove classes
    // changeSlideClasses(this.previousSlide, 'remove', 'is-previous');
    changeSlideClasses(this.nextSlide, 'remove', 'is-next');
    // changeSlideClasses(this.previousSlide2, 'remove', 'is-previous-previous');
    changeSlideClasses(this.nextSlide2, 'remove', 'is-next-next');
    changeSlideClasses(this.nextSlide3, 'remove', 'is-next-next-next');
    // set slides
    // var previousI = fizzyUIUtils.modulo(this.selectedIndex - 1, this.slides.length);
    // var previousII = fizzyUIUtils.modulo(this.selectedIndex - 2, this.slides.length);
    var nextI = fizzyUIUtils.modulo(this.selectedIndex + 1, this.slides.length);
    var nextII = fizzyUIUtils.modulo(this.selectedIndex + 2, this.slides.length);
    var nextIII = fizzyUIUtils.modulo(this.selectedIndex + 3, this.slides.length);
    // this.previousSlide = this.slides[previousI];
    // this.previousSlide2 = this.slides[previousII];
    this.nextSlide = this.slides[nextI];
    this.nextSlide2 = this.slides[nextII];
    this.nextSlide3 = this.slides[nextIII];
    // add classes
    // changeSlideClasses(this.previousSlide, 'add', 'is-previous');
    changeSlideClasses(this.nextSlide, 'add', 'is-next');
    // changeSlideClasses(this.previousSlide2, 'add', 'is-previous-previous');
    changeSlideClasses(this.nextSlide2, 'add', 'is-next-next');
    changeSlideClasses(this.nextSlide3, 'add', 'is-next-next-next');
  };

  function changeSlideClasses(slide, method, className) {
    if (!slide) {
      return;
    }
    slide.getCellElements().forEach(function (cellElem) {
      cellElem.classList[method](className);
    });
  }

})();