// In this script, I'm handling a common feature on websites where content can be expanded or collapsed with 'Read More'/'Show Less' buttons. I start by selecting all the buttons and content containers using their respective IDs and classes. Then, for each button, I set up a click event listener.

// When a button is clicked, I find the corresponding content container (using the button's index in the collection). I then toggle the 'active' class on this container, which probably shows or hides additional content. Based on whether the content is now shown or hidden, I update the button text to 'Show Less' or 'Read More' respectively.

// Additionally, I make sure that only one content container can be expanded at a time. When a container is expanded, I loop through all other containers and remove their 'active' class, collapsing any previously expanded content. This creates a neat and user-friendly experience where clicking a button toggles the visibility of its related content while ensuring the page doesn't become overcrowded with open sections.



var readMoreButtons = document.querySelectorAll("#read-more");
var divFullContents = document.querySelectorAll(".dfc");

readMoreButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        var container = divFullContents[index];

        // Toggle the "active" class for the specific container
        container.classList.toggle("active");

        // Change the text content of the button based on the container's class
        if (container.classList.contains("active")) {
            button.textContent = "Show Less";
        } else {
            button.textContent = "Read More";
        }

        // Remove the "active" class from other containers
        divFullContents.forEach((otherContainer, otherIndex) => {
            if (otherIndex !== index) {
                otherContainer.classList.remove("active");
            }
        });
    });
});


// Cat guide Website 
// 2024

