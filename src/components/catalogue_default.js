function initCatalogueGrid() {
    const gridContainer = document.getElementById('gridContainer');
    if (!gridContainer) {
        console.error("❌ #gridContainer not found in DOM");
        return;
    }

    const csvURL = gridContainer.dataset.csv || 'data/catalogue/catalogue.csv';
    const NUM_COLUMNS = parseInt(gridContainer.dataset.cols) || 4;
    const colClass = `col-md-${12 / NUM_COLUMNS}`;

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
            console.log(`🔗 item_A [row ${index}]:`, trimmedItemA);
            itemA_HTML = `<a href="${trimmedItemA}" target="_blank">
                <img src="media/icons/linkedin.png" style="width: 25px" alt="LinkedIn">
            </a>`;
        } else if (trimmedItemA.length > 0) {
            console.warn(`⚠️ item_A is non-empty but not a URL [row ${index}]:`, trimmedItemA);
        }

        return `
        <div class="product_cell">
            <div class="img_container" style="width: 100%; height: auto; display: block; overflow: hidden; margin-block: 20px;">
                <img src="${image_path}" alt="${title}" style="width: 100%; height: auto; display: block; object-fit: cover;">
            </div>
            <div class="d-flex">
                <span class="fs-2">${title}</span>
                <span class="fs-6 ms-auto">${date}</span>
            </div>
            <div>
                <span>${sub_title}</span>
                <span>${itemA_HTML}</span>
            </div>
            <p>${desc_short}</p>
        </div>
        `;
    }

    function populateGrid(data) {
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            if (row.length >= 10) {
                const [ , image_path, title, sub_title, date, desc_short, desc_long, item_A, item_B, item_C ] = row.map(cell => cell.trim());

                const productHTML = generateProductHTML(i, image_path, title, sub_title, date, desc_short, desc_long, item_A, item_B, item_C);
                const col = document.createElement('div');
                col.className = `${colClass} mb-4`;
                col.innerHTML = productHTML;
                gridContainer.appendChild(col);
                console.log(`✅ Added product row ${i}: "${title}"`);
            } else {
                console.warn(`⚠️ Skipping row ${i}, not enough columns:`, row);
            }
        }
    }

    fetchCSV(csvURL, populateGrid);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatalogueGrid);
} else {
    initCatalogueGrid();
}
