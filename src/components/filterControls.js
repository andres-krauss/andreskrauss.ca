export function generateFilterControlsHTML(FONT) {
    // Inject shared style block once
    if (!document.getElementById('filter-control-style')) {
        const style = document.createElement('style');
        style.id = 'filter-control-style';
        style.textContent = `
            .filter-control {
                padding: 0.5rem;
                font-family: ${FONT}, serif;
                font-size: 1rem;
                border: none;
                border-bottom: var(--dotted-line-dark);
                border-right: var(--dotted-line-dark);
                background: none;
                outline: none;
            }

            .filter-control.select {
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                min-width: 120px;
            }

            @media (max-width: 600px) {
                .filter-control {
                    width: 100% !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    return `
        <div id="filterWrapper" style="
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            align-items: center;
            justify-content: center;
            width: 100%;
        ">
            <input id="catalogueSearchInput" type="text" placeholder="Search..." class="filter-control" style="flex: 1;">
            <select id="catalogueYearSelect" class="filter-control select">
                <option value="">All Years ▾</option>
            </select>
            <select id="catalogueOrgSelect" class="filter-control select">
                <option value="">All Orgs ▾</option>
            </select>
        </div>
    `;
}

export function insertFilterControls(FONT) {
    const container = document.getElementById('filterControls');
    container.innerHTML = generateFilterControlsHTML(FONT);

    return {
        searchInput: document.getElementById('catalogueSearchInput'),
        yearSelect: document.getElementById('catalogueYearSelect'),
        orgSelect: document.getElementById('catalogueOrgSelect')
    };
}
