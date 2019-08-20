$(document).ready(function () {
  
  /**
   * SVG
   */
  svg4everybody({});


  /**
   * Menu
   */
  let toggleMenu = function () {
    $('.hamburger').click(function (e) { 
      e.preventDefault();
      if ($('.mobile-nav').is('[hidden]')) {
        $('.mobile-nav').removeAttr('hidden');
      } else {
        $('.mobile-nav').attr('hidden', '');
      }
      
      $('.mobile-nav, .mobile-nav__content, .mobile-nav__overlay').toggleClass('is-visible');

      $('document, body').toggleClass('is-overflowed');
    });

    $('.side-menu__close, .mobile-nav__overlay').click(function (e) { 
      e.preventDefault();
      $('.mobile-nav, .mobile-nav__content, .mobile-nav__overlay').removeClass('is-visible');
      $('.mobile-nav').attr('hidden', '');
      $('document, body').removeClass('is-overflowed');
    });
  }

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

  
  productSlider();
  clickTabs();
  clickInnerTabs();
  productCarousel();
  productCellSlider();
  hideLabel();
  relaceSelect();
  toggleMenu();
  // initMicromodal();
  // initDatepicker();
});