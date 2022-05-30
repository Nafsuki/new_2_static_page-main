const modalContainer = document.getElementById('modal-container');
const modalConfirmation = document.getElementById('modal-confirmation');

const showModal = () => {
	modalContainer.classList.add('show-modal');
	console.log('write message clicked');
};

const showConfirmation = () => {
	console.log('send clicked');
	modalConfirmation.classList.add('show-confirmation');
	modalContainer.classList.remove('show-modal');
};

const closeModal = () => {
	modalConfirmation.classList.remove('show-confirmation');
	console.log('modal close');
};
