document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg" style="padding-inline: 6vw; padding-block: 25px; background-color: white;">
            <div class="container-fluid" style="padding-inline: 0;">
                <a class="navbar-brand" style="font-weight: 300; font-size: 2em; font-family: 'American Typewriter',serif;" href="#">AK.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style="flex-grow: 0;">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" aria-current="page" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" style="background-color: #fde6ba" href="krauss_approved.html">New!</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Other</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Newsletter (WIP)</a></li>
                                <li><a class="dropdown-item" href="#">Coming Soon!</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Maybe One Day.</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;

    // Insert the navbar at the top of the #navbarContainer
    document.getElementById("navbarContainer").innerHTML = navbarHTML;
});