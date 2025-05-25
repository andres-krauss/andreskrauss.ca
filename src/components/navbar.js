document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
        <article>
            <div class="nav-inner">
                <a class="nav-brand" href="#">AK.</a>
                <div class="nav-toggle" aria-label="Toggle menu">☰</div>
                <ul class="nav-menu">
                    <li><a class="button_1" href="index.html">Home</a></li>
                    <li><a class="button_1" href="projects.html">Projects</a></li>
                    <li><a class="button_1 k-approved" href="krauss_approved.html">K-Approved</a></li>
                    <li class="nav-dropdown">
                        <a class="button_1 nav-dropdown-toggle" href="#">Other ▾</a>
                        <ul class="nav-dropdown-menu">
                            <li><a href="#" class="button_1">Newsletter (WIP)</a></li>
                            <li><a href="#" class="button_1">Glintbloom.io (WIP) </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </article>
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
        const isOpen = dropdownMenu.style.display === "flex";
        dropdownMenu.style.display = isOpen ? "none" : "flex";
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".nav-dropdown")) {
            dropdownMenu.style.display = "none";
        }
    });

    window.addEventListener("resize", updateLayout);
    updateLayout();
});
