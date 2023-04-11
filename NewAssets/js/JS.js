$(document).ready(function () {
  $(".center").slick({
    centerMode: true,
    centerPadding: "0px",
    // dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: document.dir == "rtl" ? true : false,
    slidesToScroll: 1,
    slidesToShow: 5,
    prevArrow:
      '<span class="priv_arrow"> <i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
    nextArrow:
      '<span class="next_arrow"> <i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".testmon").slick({
    centerMode: true,
    centerPadding: "350px",
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    rtl: document.dir == "rtl" ? true : false,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          centerMode: true,
          centerPadding: "250px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          centerMode: true,
          centerPadding: "150px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "15px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

$("a").click(function () {
  // Changes the .image-holder's img src to the src defined in .list a's data attribute.
  $("a.linkLine").removeClass("active");
  $(this).addClass("active");
  var value = $(this).attr("data-src");
  $(".imgSection img").attr("src", value);
});
