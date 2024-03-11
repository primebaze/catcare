// In this code, I'm working with an interactive image gallery.

//  When I click on any of the images, I make it stand out by adding an 'active' class to it, which probably changes its appearance to indicate it's selected. At the same time, I also bring up an overlay, creating a sort of dimmed background effect to focus attention on the image I just clicked. If I then click on the overlay, I've set it up so it will remove the 'active' class from both the image and itself, essentially returning the gallery to its normal state. I've ensured this interaction works with every image in the gallery for a consistent user experience.

// One thing I'd like to point out about my code is the way I'm handling the overlay's click event. I've nested it inside the image click event, which might not be the most efficient approach. It would be better for performance if I manage the overlay's event separately, to avoid potential issues with multiple event listeners being added unnecessarily.


// This will choose all elements with the ID 'gallery-image' and store them in the 'image' variable.
// Note: Using 'querySelectorAll' with an ID is unconventional since IDs should be unique.
var image = document.querySelectorAll("#gallery-image");

// choose the first element with the class 'overlay' and store it in the 'overlay' variable.
var overlay = document.querySelector(".overlay");

// Iterate over each image element.
image.forEach((loop) => {
    // Add a click event listener to each image element.
    loop.addEventListener("click", () => {
        // When an image is clicked, add the 'active' class to it. This could be for styling or to mark it as selected.
        loop.classList.add("active");

        // Also add the 'active' class to the overlay, likely to display or highlight it.
        overlay.classList.add("active");

        // Add a click event listener to the overlay.
        overlay.addEventListener("click", () => {
            // When the overlay is clicked, remove the 'active' class from both the overlay and the currently selected image.
            // This could be to hide the overlay and deselect the image.
            overlay.classList.remove("active");
            loop.classList.remove("active");
        });
    });
});
