// init Isotope
var $grid = $('.projects-list').isotope({
	itemSelector: '.post-item',
	percentPosition: true,
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
	$grid.isotope('layout');
  });  