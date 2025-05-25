function initCatalogueGrid() {
    const gridContainer = document.getElementById('gridContainer');
    if (!gridContainer) {
        console.error("❌ #gridContainer not found in DOM");
        return;
    }

    const csvURL = gridContainer.dataset.csv || 'data/catalogue/catalogue.csv';
    const INITIAL_NUM_COLUMNS = parseInt(gridContainer.dataset.cols) || 3;

    // Get spacing
    const GAP_VAR = getComputedStyle(document.documentElement)
        .getPropertyValue('--gap-default')
        .trim() || '1rem';
    const appliedGap = GAP_VAR;

    // Setup base layout
    Object.assign(gridContainer.style, {
        display: 'flex',
        flexWrap: 'wrap',
        gap: appliedGap,
        justifyContent: 'flex-start'
    });

    const entries = [];

    function fetchCSV(url, callback) {
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.text();
            })
            .then(csvText => {
                const parsed = Papa.parse(csvText.trim(), {
                    skipEmptyLines: true
                });
                callback(parsed.data);
            })
            .catch(err => console.error("❌ Failed to fetch CSV:", err));
    }

    function generateProductHTML(index, image_path, title, sub_title, date, desc_short, desc_long, item_A, item_B, item_C) {
        let itemA_HTML = '';
        const trimmedItemA = item_A.trim();

        if (trimmedItemA.startsWith("http")) {
            itemA_HTML = `<a href="${trimmedItemA}" target="_blank">
                <img src="media/icons/linkedin.png" style="width: 25px" alt="LinkedIn">
            </a>`;
        }

        return `
        <div class="product_cell">
            <div class="img_container" style="width: 100%; height: auto; display: block; overflow: hidden; margin-bottom: 20px;">
                <img src="${image_path}" alt="${title}" style="width: 100%; height: auto; display: block; object-fit: cover;">
            </div>
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <h2 style="margin: 0;">${title}</h2>
                <div style="display: flex; flex-direction: column; align-items: end; gap: 4px;">
                    <span style="font-size: 0.9rem;">${date}</span>
                    ${itemA_HTML}
                </div>
            </div>
            <div>
                <span>${sub_title}</span>
            </div>
            <p>${desc_short}</p>
        </div>
        `;
    }

    function renderColumns() {
        const isMobile = window.innerWidth <= 600;
        const isTablet = window.innerWidth <= 900;
        const gap = parseFloat(getComputedStyle(gridContainer).gap) || 0;

        let columns = INITIAL_NUM_COLUMNS;
        if (isMobile) {
            columns = 1;
        } else if (isTablet) {
            columns = 2;
        }

        const gapTotal = (columns - 1) * gap;
        const columnWidth = `calc((100% - ${gapTotal}px) / ${columns})`;

        for (const col of gridContainer.children) {
            col.style.flex = `1 1 ${columnWidth}`;
            col.style.maxWidth = columnWidth;
        }
    }

    function populateGrid(data) {
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            if (row.length >= 10) {
                const [, image_path, title, sub_title, date, desc_short, desc_long, item_A, item_B, item_C] = row.map(cell => cell.trim());
                const html = generateProductHTML(i, image_path, title, sub_title, date, desc_short, desc_long, item_A, item_B, item_C);

                const col = document.createElement('div');
                col.classList.add('grid-item');
                col.innerHTML = html;
                col.style.boxSizing = 'border-box';
                gridContainer.appendChild(col);
                entries.push(col);
            }
        }

        renderColumns();
    }

    window.addEventListener('resize', renderColumns);
    fetchCSV(csvURL, populateGrid);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatalogueGrid);
} else {
    initCatalogueGrid();
}
