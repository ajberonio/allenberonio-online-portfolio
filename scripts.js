document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("my-projects");
    const leftButton = document.querySelector(".swipe-button.left");
    const rightButton = document.querySelector(".swipe-button.right");

    // Scroll left when the left button is clicked
    leftButton.addEventListener("click", () => {
        projectsContainer.scrollBy({ left: -300, behavior: "smooth" });
    });

    // Scroll right when the right button is clicked
    rightButton.addEventListener("click", () => {
        projectsContainer.scrollBy({ left: 300, behavior: "smooth" });
    });

    // Removed modal-related JavaScript
});
