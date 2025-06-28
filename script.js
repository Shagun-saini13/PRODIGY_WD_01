document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const menuLinks = document.querySelectorAll('.navbar-menu li a');

    // Toggle navbar open/close
    navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

    // Handle active menu item and close menu on click
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active from all links
            menuLinks.forEach(item => item.classList.remove('active'));

            // Add active to clicked link
            link.classList.add('active');

            // Close navbar on mobile
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });
});
