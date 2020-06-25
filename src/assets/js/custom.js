function initJQ() {
  jQuery(document).ready(function ($) {
    /*==========================*/
    /*Preloader */
    /*==========================*/
    $('.preloader').delay(350).fadeOut('slow');

    /*==========================*/
    /* Nav close for mobile */
    /*==========================*/
    $(".navbar-nav li a").click(function (event) {
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse('hide');
      }
    });

    /*==========================*/
    /* Custom Scroll */
    /*==========================*/
    $('.my-dropdown').sSelect();

    /*==========================*/
    /* Google Map */
    /*==========================*/
    if ($('#map-canvas').length != 0) {
      var map;
      function initialize() {
        var mapOptions = {
          zoom: 14,
          scrollwheel: false,
          center: new google.maps.LatLng(25.932884, 83.569633),
          styles: [
            {
              "stylers": [{ hue: "#ef5c4b" },
              { saturation: 0 },
              { lightness: 0 }]
            },
            {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{ "lightness": 100 },
              { "visibility": "simplified" }]
            }
          ]
        };
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var image = 'assets/images/map-marker.png';
        var myLatLng = new google.maps.LatLng(25.932884, 83.569633);
        var beachMarker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: image
        });
      }

      google.maps.event.addDomListener(window, 'load', initialize);
    }



    /*==========================*/
    /* feature box same height */
    /*==========================*/
    var maxHeight = 0;
    $(function () {


      $(".service-box").each(function () {
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
      });

      $(".service-box").height(maxHeight);
    });

    /*==========================*/
    /* Masonry */
    /*==========================*/
    $(function () {
      var self = $("#masonry");

      self.imagesLoaded(function () {
        self.masonry({
          gutterWidth: 15,
          isAnimated: true,
          itemSelector: ".grid-item"
        });
      });

      $("ul.project-category li a").click(function (e) {
        e.preventDefault();
        $('ul.project-category li a').removeClass('active');
        $(this).addClass('active');
        var filter = $(this).attr("data-filter");

        self.masonryFilter({
          filter: function () {
            if (!filter) return true;
            return $(this).attr("data-filter") == filter;
          }
        });
      });
    });

    /*==========================*/
    /* Lighbox */
    /*==========================*/
    $('.project-gallery').magnificPopup({
      delegate: '.grid-item:visible a', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      gallery: {
        enabled: true,
        preload: [0, 2],
        removalDelay: 300,
        navigateByImgClick: true,
        titleSrc: 'title',
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

        tPrev: 'Previous (Left arrow key)', // title for left button
        tNext: 'Next (Right arrow key)', // title for right button
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
      }
    });

    /*==========================*/
    /* Sliders */
    /*==========================*/

    $('.testimonial-list').slick({
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 200,
      cssEase: 'linear',
      adaptiveHeight: true,
      arrows: true
    });



    $('.recent-blog-list').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    /*==========================*/
    /* Animated Bar  */
    /*==========================*/
    $('.bar-fill').waypoint({
      handler: function () {
        $(this).not('.animated').each(function () {
          $(this).animate({
            width: $(this).attr('data-percent')
          }, 500);
          $(this).addClass('animated');
        });
      },
      offset: '95%'
    });



    /*==========================*/
    /* Animated Number  */
    /*==========================*/

    $('.timer').data('countToOptions', {
      formatter: function (value, options) {
        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
      }
    });

    // start all the timers
    $('.timer').each(count);

    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data('countToOptions') || {});
      $this.countTo(options);
    }


    $('.overview-box .timer').waypoint(function () {
      $('.overview-box .timer').not('.animated').each(count);
      $('.overview-box .timer').addClass('animated');
    }, { offset: '99%' });



    $('.about-right .timer').waypoint(function () {
      $('.about-right .timer').not('.animated').each(count);
      $('.about-right .timer').addClass('animated');
    }, { offset: '99%' });






    /*==========================*/
    /* Back to Top */
    /*==========================*/
    if ($('.go-top').length) {
      $('.go-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 700);
      });
    }

    /*==========================*/
    /* Input field */
    /*==========================*/
    $('.form-control').each(function () {
      var $parentEl = $(this).parents('.form-group');
      if ($(this).val() !== '') {
        $.trim($(this).val());
        $parentEl.addClass('input-filled');
      }
      $(this).on('focus', function () {
        $parentEl.addClass('input-focused input-filled');
      });
      $(this).on('blur', function () {
        $parentEl.removeClass('input-focused');
        if ($.trim($(this).val()) === '') {
          $parentEl.removeClass('input-filled');
        }
      });
    });



    $('select[name="project"]').on('change', function () {

      if (!$(this).val() == '') {
        $(this).closest('.form-group').addClass('input-filled')
      }

      else {
        $(this).closest('.form-group').removeClass('input-filled')
      }
    });

    /*==========================*/
    /* Form Validation */
    /*==========================*/
    $("#messageForm").validate({

      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        contact: {
          required: true,
        },
        project: {
          required: true
        },
        message: {
          required: true
        }
      },

      messages: {
        name: {
          required: "Please enter your name!",

        },
        email: {
          required: "Please enter a valid email!"
        },
        contact: {
          required: "Please enter a valid mobile number!"
        },

        project: {
          required: "Please select a service!"
        },
        message: {
          required: "Please enter your project description!",
        }
      },

      submitHandler: function (form) {
        $(form).ajaxSubmit({
          type: "POST",
          data: $(form).serialize(),
          url: "http://shayariterminal.uphero.com/apis/portfolio-mail.php",
          success: function () {
            debugger;
            $('#messageForm').addClass('hide');
            $('#messageForm').fadeTo("slow", 0.15, function () {
              $('#success').fadeIn();

            });
          },
          error: function () {
            $('#messageForm').addClass('hide');
            $('#messageForm').fadeTo("slow", 0.15, function () {
              $('#error').fadeIn();

            });
          }
        });
      }


    });



    // create your custom rule
    jQuery.validator.addMethod("email", function (value, element) {
      return this.optional(element) || (/^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,4}$/.test(value) && /^(?=.{1,64}@.{4,64}$)(?=.{6,100}$).*/.test(value));
    }, 'Please enter a valid email!');

  });



  /*==========================*/
  /* Submitting text show */
  /*==========================*/
  jQuery(document).ajaxStart(function () {
    $(".loading").show();
  }).ajaxStop(function () {
    $(".loading").hide();
  });



  function onScrollInit(items, trigger) {
    items.each(function () {
      var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');

      osElement.css({
        '-webkit-animation-delay': osAnimationDelay,
        '-moz-animation-delay': osAnimationDelay,
        'animation-delay': osAnimationDelay
      });

      var osTrigger = (trigger) ? trigger : osElement;

      osTrigger.waypoint(function () {
        osElement.addClass('animated').addClass(osAnimationClass);
      }, {
        triggerOnce: true,
        offset: '90%'
      });
    });
  }

  onScrollInit($('.os-animation'));
  onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));

}

