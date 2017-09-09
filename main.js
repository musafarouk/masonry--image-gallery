var $container = $('#container').imagesLoaded( function() {
  $container.masonry({
    itemSelector: '.item',
    columnWidth: '.grid-sizer',
  });
});
