$(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 600,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
