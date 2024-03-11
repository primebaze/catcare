// Nav area Javascript


// In this script, I'm setting up a basic navigation menu for my website with a toggle feature. I've selected two buttons - one represented by a hamburger icon (`.fa-bars`) for opening the menu, and another with an 'x-mark' icon (`.fa-xmark`) for closing it. The menu itself is represented by the `.nav-links` class.

// When I click on the hamburger button, the menu (`.nav-links`) becomes visible or changes style, thanks to the addition of the 'active' class. This typically happens in responsive or mobile-friendly designs, where menu space is limited.

// On the other hand, when I click the 'x-mark' button, it reverses this action by removing the 'active' class from the `.nav-links` element, effectively hiding or reverting the menu to its original state.

// This setup provides a user-friendly way to handle menu visibility on smaller screens, ensuring that users can easily navigate the site regardless of device size.


// This line of code selects the cancel button element with the class '.fa-xmark'
var cancelBtn = document.querySelector(".fa-xmark");

// This Select the hamburger menu button element with the class '.fa-bars'
var hamBtn = document.querySelector(".fa-bars");

// Select the navigation links container with the class '.nav-links'
var navLinks = document.querySelector(".nav-links");

// Add an event listener to the hamburger menu button for 'click' events
hamBtn.addEventListener("click", ()=> {
    // When the hamburger menu is clicked, this will add the class 'active' to the navigation links container
    // This  shows the menu or changes its appearance
    navLinks.classList.add("active")
})

// This will Add an event listener to the cancel button for 'click' events
cancelBtn.addEventListener("click", ()=> {
    // When the cancel button is clicked, remove the class 'active' from the navigation links container
    // This typically hides the menu or reverts its appearance
    navLinks.classList.remove("active")
})
