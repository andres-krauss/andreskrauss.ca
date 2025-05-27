document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
        <article>
            <div class="nav-inner">
                <a class="nav-brand" href="#">AK.</a>
                <div class="nav-toggle" aria-label="Toggle menu">☰</div>
                <div class="nav-menu">
                    <li><a class="button_1" href="index.html">Home</a></li>
                    <li><a class="button_1" href="projects.html">Projects</a></li>
                    <li><a class="button_1 k-approved" href="krauss_approved.html">K-Approved</a></li>
                    <li class="nav-dropdown">
                        <a class="button_1 nav-dropdown-toggle" href="#">Other ▾</a>
                    </li>
                </div>
            </div>
        </article>
        <div class="nav-dropdown-menu">
            <div style="margin-inline: var(--space-inline)">
                <li><a href="#" class="button_1">Newsletter (WIP)</a></li>
                <li><a href="#" class="button_1">Glintbloom.io (WIP)</a></li>
            </div>
        </div>
    `;
    document.getElementById("navbarContainer").innerHTML = navbarHTML;

    const toggleBtn = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const dropdownToggle = document.querySelector(".nav-dropdown-toggle");
    const dropdownMenu = document.querySelector(".nav-dropdown-menu");

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function updateLayout() {
        if (isMobile()) {
            toggleBtn.style.display = "block";
            navMenu.classList.remove("nav-open");
            navMenu.style.display = "none";
        } else {
            toggleBtn.style.display = "none";
            navMenu.style.display = "flex";
            dropdownMenu.style.display = "none";
        }
    }

    toggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("nav-open");
        navMenu.style.display = navMenu.classList.contains("nav-open") ? "flex" : "none";
    });

    dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = dropdownMenu.style.display === "block";
        dropdownMenu.style.display = isOpen ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".nav-dropdown") && !e.target.closest(".nav-dropdown-menu")) {
            dropdownMenu.style.display = "none";
        }
    });

    window.addEventListener("resize", updateLayout);
    updateLayout();
});
