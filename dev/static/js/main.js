$(document).ready(function () {
  
  /**
   * SVG
   */
  svg4everybody({});


  /**
   * Product slider
   */
  let productSlider = function() {
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
  $('#select-profile').selectmenu();
  $('#select-placement').selectmenu();
  $('.js-select').selectmenu();
  

  /**
   * Micromodal init
   */
  let initMicromodal = function () {
    MicroModal.init();
  };

  
  productSlider();
  clickTabs();
  clickInnerTabs();
  productCarousel();
  productCellSlider();
  hideLabel();
  initMicromodal();
});