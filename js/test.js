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
// modal shop 30 Design templates
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
	function changeImage11(imageSrc) {
		document.getElementById('mainImage11').src = imageSrc;
	}
	function changeImage12(imageSrc) {
		document.getElementById('mainImage12').src = imageSrc;
	}
	function changeImage13(imageSrc) {
		document.getElementById('mainImage13').src = imageSrc;
	}
	function changeImage14(imageSrc) {
		document.getElementById('mainImage14').src = imageSrc;
	}
	function changeImage15(imageSrc) {
		document.getElementById('mainImage15').src = imageSrc;
	}
	function changeImage16(imageSrc) {
		document.getElementById('mainImage16').src = imageSrc;
	}
	function changeImage17(imageSrc) {
		document.getElementById('mainImage17').src = imageSrc;
	}	function changeImage18(imageSrc) {
		document.getElementById('mainImage18').src = imageSrc;
	}	function changeImage19(imageSrc) {
		document.getElementById('mainImage19').src = imageSrc;
	}	function changeImage20(imageSrc) {
		document.getElementById('mainImage20').src = imageSrc;
	}	function changeImage21(imageSrc) {
		document.getElementById('mainImage21').src = imageSrc;
	}
	function changeImage22(imageSrc) {
	document.getElementById('mainImage22').src = imageSrc;
	}
	function changeImage22(imageSrc) {
	document.getElementById('mainImage22').src = imageSrc;
	}
	function changeImage23(imageSrc) {
	document.getElementById('mainImage23').src = imageSrc;
	}
	function changeImage24(imageSrc) {
	document.getElementById('mainImage24').src = imageSrc;
	}
	function changeImage25(imageSrc) {
	document.getElementById('mainImage25').src = imageSrc;
	}
	function changeImage26(imageSrc) {
	document.getElementById('mainImage26').src = imageSrc;
	}
	function changeImage27(imageSrc) {
	document.getElementById('mainImage27').src = imageSrc;
	}
		function changeImage27(imageSrc) {
	document.getElementById('mainImage27').src = imageSrc;
	}
	function changeImage28(imageSrc) {
	document.getElementById('mainImage28').src = imageSrc;
	}
	function changeImage29(imageSrc) {
	document.getElementById('mainImage29').src = imageSrc;
	}
	function changeImage30(imageSrc) {
	document.getElementById('mainImage30').src = imageSrc;
	}
	// heart react
	$(document).ready(function(){
    $('.content').click(function(){
        $(this).toggleClass("heart-active");
        let numbElement = $(this).find('.numb');
        let numbElement1 = $(this).find('.numb-1');
        let currentNumber = parseInt(numbElement.text());
        let currentNumber1 = parseInt(numbElement1.text());

        if($(this).hasClass("heart-active")) {
            numbElement.text(currentNumber + 1);
            numbElement1.text(currentNumber1 + 1);
        } else {
            numbElement.text(currentNumber - 1);
            numbElement1.text(currentNumber1 - 1);
        }
    });
});

// profile menu
// Function to toggle the profile menu display
function toggleMenu() {
  const profileMenu = document.getElementById('profileMenu');
  profileMenu.classList.toggle('active');
}

// Function to close the profile menu
function closeMenu() {
  const profileMenu = document.getElementById('profileMenu');
  profileMenu.classList.remove('active');
}

function openChangePasswordModal() {
  closeMenu(); 
  const changePasswordModal = document.getElementById('changePasswordModal');
  changePasswordModal.style.display = 'block'; 
}


function toggleMenu() {
  const menu = document.getElementById('profileMenu');
  menu.classList.toggle('active');
}

// Prevent background scrolling when a modal is opened
function disableBackgroundScroll() {
  document.body.classList.add('modal-open');
}

// Enable background scrolling when a modal is closed
function enableBackgroundScroll() {
  document.body.classList.remove('modal-open');
}

// Modify the openChangePasswordModal function to disable background scroll
function openChangePasswordModal() {
  closeMenu();
  const changePasswordModal = document.getElementById('changePasswordModal');
  changePasswordModal.style.display = 'block';
  disableBackgroundScroll(); // Lock background scrolling
}

// Close the Change Password modal and re-enable background scroll
function closeChangePasswordModal() {
  const changePasswordModal = document.getElementById('changePasswordModal');
  changePasswordModal.style.display = 'none';
  enableBackgroundScroll(); // Re-enable background scrolling
}

// Close Log Out modal logic with background scroll handling
$('#logoutModal').on('show.bs.modal', function () {
  $('#changePasswordModal').modal('hide'); // Ensure Change Password modal is hidden
  disableBackgroundScroll(); // Lock background scrolling
});

$('#logoutModal').on('hidden.bs.modal', function () {
  enableBackgroundScroll(); // Re-enable background scrolling when Log Out modal closes
});
// Function to open a specific modal and close others
const openModal = (modalId) => {
  // Close all modals first
  closeAllModals();

  // Open the selected modal
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
  }
};

// Function to close a specific modal
const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
  document.body.classList.remove('modal-open');
};

// Function to close all modals
const closeAllModals = () => {
  const modals = document.querySelectorAll('.modal'); // Select all modals
  modals.forEach((modal) => {
    modal.style.display = 'none';
  });
  document.body.classList.remove('modal-open');
};

// Example: Attach event listeners to profile menu buttons
document.getElementById('logoutBtn').addEventListener('click', () => {
  openModal('logoutModal');
});

document.getElementById('changePasswordBtn').addEventListener('click', () => {
  openModal('changePasswordModal');
});

// Function to open the modal
function openLogoutModal() {
	document.getElementById('logoutOverlay').style.display = 'block';
	document.getElementById('logoutModal').style.display = 'block';
	document.body.style.overflow = 'hidden'; // Prevent body scroll
}

// Function to close the modal
function closeLogoutModal() {
	document.getElementById('logoutOverlay').style.display = 'none';
	document.getElementById('logoutModal').style.display = 'none';
	document.body.style.overflow = 'auto'; // Allow body scroll again
}

// Event listeners for buttons
document.getElementById('confirmLogoutBtn').addEventListener('click', function() {
	// Add logout logic here
});

document.getElementById('cancelLogoutBtn').addEventListener('click', closeLogoutModal);

// Example of opening the modal (you can call this function as needed)
openLogoutModal();
