// LOAD CAROUSEL
  function loadCarousel() {
    // IMAGE CAROUSEL
      $("#owl-demo").owlCarousel({
        autoPlay: 2000, //Set AutoPlay to 3 seconds
        items : 3,
        lazyload: true,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });
  };
