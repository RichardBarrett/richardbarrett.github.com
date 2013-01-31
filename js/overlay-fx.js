var findImage = $('<div>').addClass('overlay-find');
var viewLabel = $('<div>').text('VIEW GALLERY').addClass('overlay-label');
var overlayBackground = $('<div>').addClass('overlay-background');
var overlay = $('<div>').addClass('overlay').html('').hide();

overlay.append(overlayBackground);
overlay.append(findImage);
overlay.append(viewLabel);
$('body').append(overlay);

var currentImage;

$('.gallery-link').on('mouseenter', function (ev) {
	var image = $(ev.currentTarget);
	overlay.css({
		top: image.offset().top - 10,
		left: image.offset().left - 10,
		width: image.width(),
		height: image.height()
	});
	overlayBackground.css({
		width: image.width(),
		height: image.height()
	});
	overlay.fadeIn(200);
	overlayBackground.fadeIn(200);
	viewLabel.animate({
		bottom: '260px'
	}, 200);

	findImage.animate({
		top: '260px'
	}, 200);
	image.animate({
		'background-size': '120%'
	}, 200);
	currentImage = image;
});

$('.overlay').on('mouseleave', function (ev) {
	var image = currentImage;
	overlay.fadeOut(200);
	viewLabel.animate({
		bottom: '150px'
	}, 200);

	findImage.animate({
		top: '150px'
	}, 200);
	image.animate({
		'background-size': '100%'
	}, 200);
});

$('.overlay').on('click', function (ev) {
	currentImage.click();
});