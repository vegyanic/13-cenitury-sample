function changeImage() {
    var image = document.getElementById("imgd");
    if (window.innerWidth <= 500) {
        image.src = "./files/glasses-with-slightly-rounded-frame.jpeg"; // Change image source for smaller screens
    } else {
        image.src = "./files/blue-specs.jpeg"; // Change image source for larger screens
    }
}

// Initial call to changeImage function
changeImage();

// Event listener for window resize
window.addEventListener("resize", changeImage);