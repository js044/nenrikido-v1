// init Isotope
var $grid = $('.projects-list').isotope({
	itemSelector: '.project-item',
	percentPosition: true,
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
	$grid.isotope('layout');
  });  