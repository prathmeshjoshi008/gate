document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const mainContent = document.querySelector('.main-content');

    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-hidden');
        mainContent.classList.toggle('main-content-expanded');
    });
});
