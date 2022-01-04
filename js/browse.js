$(document).ready(function () {
  $(".slide-images").slick({
    slidesToShow: 5,
    arrows: false,
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
});

// $(document).ready(function () {
//   $("#series").click(function () {
//     // $(this).addClass("series-showcase");
//     // $("#films").removeClass("films-showcase");
//     $(".series-showcase").CSS("display", "block");
//     $(".films-showcase").CSS("display", "none");
//   });

//   $("#films").click(function () {
//     // $(this).addClass("films-showcase");
//     // $("#series").removeClass("series-showcase");
//     $(".series-showcase").CSS("display", "none");
//     $(".films-showcase").CSS("display", "block");
//   });
// });
