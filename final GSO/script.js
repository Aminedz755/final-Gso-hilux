"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuButton || !mobileMenu) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("open");

        menuButton.classList.toggle("open", isOpen);
        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            menuButton.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
});