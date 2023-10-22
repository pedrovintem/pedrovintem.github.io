const slider = document.getElementById('slider');
const displayNumber = document.getElementById('display-number');
const imageContainer = document.getElementById('image-container');

slider.addEventListener('input', () => {
    displayNumber.innerText = slider.value;
    // You can load the corresponding image or GIF here based on the slider value
    loadImageOrGif(slider.value);
});

function loadImageOrGif(selectedNumber) {
    // Clear previous images
    imageContainer.innerHTML = "";

    // Load image or GIF based on the selectedNumber
    const image = document.createElement('img');
    image.src = `images/image${selectedNumber}.jpg`; // Replace with your image paths
    image.alt = `Image ${selectedNumber}`;
    imageContainer.appendChild(image);
}

function submitSelection() {
    const selectedNumber = slider.value;

    // Send the selectedNumber to Firebase or any backend service
    // You can handle this using Firebase SDK or any other API

    alert(`Selection submitted: ${selectedNumber}`);
}
