document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbarLinks = document.getElementById('navbar-links');
    const hamburgerMenu = document.getElementById('hamburger-menu');

    menuIcon.addEventListener('click', function () {
        hamburgerMenu.style.display = 'block';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Disable scrolling when the menu is open
    });

    closeIcon.addEventListener('click', closeMenu);
    document.addEventListener('click', function (event) {
        if (!navbarLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            closeMenu();
        }
    });

    function closeMenu() {
        hamburgerMenu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        document.body.style.overflow = ''; // Enable scrolling when the menu is closed
    }
});
