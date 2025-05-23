document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg" style="padding-inline: var(--space-inline); padding-block: var(--space-block-half); background-color: white;">
            <div class="container-fluid" style="padding-inline: 0;">
                <a class="navbar-brand" style="font-size: 3rem;    font-family: var(--font-mono), serif; font-weight: ; color: var(--primary-bg-color)" href="#">AK.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style="flex-grow: 0 !important;">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" style="margin-left: auto; text-align: right;">
                            <a class="nav-link" aria-current="page" href="/public/index.html">Home</a>
                        </li>
                        <li class="nav-item" style="margin-left: auto; text-align: right;">
                            <a class="nav-link" href="/public/projects.html">Projects</a>
                        </li>
                        <li class="nav-item" style="margin-left: auto; text-align: right;">
                            <a class="nav-link" style="background-color: #fde6ba" href="/public/krauss_approved.html">K-Approved</a>
                        </li>
                        <li class="nav-item dropdown" style="margin-left: auto; text-align: right;">
                            <a class="nav-link dropdown-toggle" style="margin-right: 0px !important;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Other</a>
                            <ul class="dropdown-menu dropdown-menu-end">
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

    document.getElementById("navbarContainer").innerHTML = navbarHTML;
});
