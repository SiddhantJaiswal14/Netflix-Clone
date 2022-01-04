jQuery(document).ready(function () {
  // Slider
  jQuery(".browser-slider").slick({
    slidesToShow: 5,
    arrows: false,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  });

  // Custom Tabber
  jQuery("#series").click(function () {
    console.log('series');
    // jQuery(this).addClass("series-showcase");
    // jQuery("#films").removeClass("films-showcase");
    jQuery('.showcase').addClass('series-banner');
    jQuery(".series-showcase").show();
    jQuery(".films-showcase").hide();
    jQuery(".series-section").show();
    jQuery(".films-section").hide();
  });

    jQuery("#films").click(function () {
    // jQuery(this).addClass("films-showcase");
    // jQuery("#series").removeClass("series-showcase");
    jQuery('.showcase').removeClass('series-banner');
    jQuery(".series-showcase").hide();
    jQuery(".films-showcase").show();
    jQuery(".series-section").hide();
    jQuery(".films-section").show();
  });

});