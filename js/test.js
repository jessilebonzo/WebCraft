// hover for clickable templates image
const images = document.querySelectorAll('.hover-image');

const modalImage = document.getElementById('modalImage');

images.forEach(image => {
    image.addEventListener('click', function () {
        modalImage.src = this.src;
    });
});
function changeImage(imageSrc) {
	document.getElementById('mainImage').src = imageSrc;
	document.getElementById('modalImage').src = imageSrc;
}
// Templates clickable inside large modal
function changeImage(imageSrc) {
	document.getElementById('mainImage').src = imageSrc;

	const hoverCards = document.querySelectorAll('.hover-card');
	hoverCards.forEach(card => {
			card.style.boxShadow = 'none';
	});
}
// modal shop
	function changeImage1(imageSrc) {
			document.getElementById('mainImage1').src = imageSrc;
	}

	function changeImage2(imageSrc) {
			document.getElementById('mainImage2').src = imageSrc;
	}
	function changeImage3(imageSrc) {
		document.getElementById('mainImage3').src = imageSrc;
	}
	function changeImage4(imageSrc) {
		document.getElementById('mainImage4').src = imageSrc;
	}
	function changeImage5(imageSrc) {
		document.getElementById('mainImage5').src = imageSrc;
	}
	function changeImage6(imageSrc) {
		document.getElementById('mainImage6').src = imageSrc;
	}
	function changeImage7(imageSrc) {
		document.getElementById('mainImage7').src = imageSrc;
	}
	function changeImage8(imageSrc) {
		document.getElementById('mainImage8').src = imageSrc;
	}
	function changeImage9(imageSrc) {
		document.getElementById('mainImage9').src = imageSrc;
	}
	function changeImage10(imageSrc) {
		document.getElementById('mainImage10').src = imageSrc;
	}