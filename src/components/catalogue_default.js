function initCatalogueGrid() {
    console.log("📦 catalogue_default.js running...");

    const gridContainer = document.getElementById('gridContainer');
    if (!gridContainer) {
        console.error("❌ #gridContainer not found in DOM");
        return;
    }

    const csvURL = gridContainer.dataset.csv || '/data/catalogue/catalogue.csv';
    const NUM_COLUMNS = parseInt(gridContainer.dataset.cols) || 4;
    const colClass = `col-md-${12 / NUM_COLUMNS}`;

    function fetchCSV(url, callback) {
        console.log("🔍 Fetching CSV from:", url);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                console.log("📄 CSV Raw (first 200 chars):", text.slice(0, 200));
                const data = text.split('\n').map(row => row.split(','));
                console.log("🧩 Parsed rows:", data.length);
                callback(data);
            })
            .catch(err => console.error("❌ Failed to fetch CSV:", err));
    }

    function generateProductHTML(index, image_path, title, sub_title, date, desc_short, desc_long, item_A, item_B, item_C) {
        let itemA_HTML = '';
        if (item_A.trim() !== '') {
            itemA_HTML = `<a href="${item_A}" target="_blank"><img src="/media/icons/linkedin.png" style="width: 25px" alt="LinkedIn"></a>`;
        }

        return `
        <div class="product_cell">
            <div 
                class="img_container" 
                style="width: 100%; height: auto; display: block; overflow: hidden; margin-block: 20px;"
            >
                <img 
                    src="${image_path}" 
                    alt="${title}" 
                    style="width: 100%; height: auto; display: block; object-fit: cover;"
                >
            </div>
            <div class="d-flex">
                <span class="fs-2">${title}</span>
                <span class="fs-6 ms-auto">${date}</span>
            </div>
            <div class="d-flex">
                <span>${sub_title}</span>
                <span class="px-2 hover">${itemA_HTML}</span>
                <span class="hover">
                    <a href="project_details.html?index=${index}" target="_blank">
                        <img style="width: 20px" src="/media/icons/share.png" alt="Share">
                    </a>
                </span>
            </div>
            <p>${desc_short}</p>
        </div>
    `;
    }

    function populateGrid(data) {
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            if (row.length >= 9) {
                const index = i;
                const image_path = `${row[1].trim()}`;
                const title = row[2];
                const sub_title = row[3];
                const date = row[4];
                const desc_short = row[5];
                const desc_long = row[6];
                const item_A = row[7];
                const item_B = row[8];
                const item_C = row[9];

                const productHTML = generateProductHTML(index, image_path, title, sub_title, date, desc_short, desc_long, item_A, item_B, item_C);
                const col = document.createElement('div');
                col.className = `${colClass} mb-4`;
                col.innerHTML = productHTML;
                gridContainer.appendChild(col);
            } else {
                console.warn(`⚠️ Skipping row ${i}, not enough data:`, row);
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
