function initCatalogueGrid() {
    const gridContainer = document.getElementById('gridContainer');
    if (!gridContainer) return console.error("❌ #gridContainer not found in DOM");

    const csvURL = gridContainer.dataset.csv || 'data/catalogue/projects-main.csv';
    const INITIAL_NUM_COLUMNS = parseInt(gridContainer.dataset.cols) || 3;
    const GAP_VAR = getComputedStyle(document.documentElement).getPropertyValue('--gap-default').trim() || '1rem';
    const FONT = 'var(--font-mono)';
    const appliedGap = GAP_VAR;

    let allData = [];

    const filterWrapper = document.createElement('div');
    Object.assign(filterWrapper.style, {
        marginBottom: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    });

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    Object.assign(searchInput.style, {
        padding: '0.5rem',
        flex: '1',
        fontFamily: FONT,
        fontSize: '1rem',
        width: window.innerWidth <= 600 ? '100%' : 'auto'
    });

    const yearSelect = document.createElement('select');
    const orgSelect = document.createElement('select');
    [yearSelect, orgSelect].forEach(sel => {
        Object.assign(sel.style, {
            padding: '0.5rem',
            minWidth: '120px',
            fontFamily: FONT,
            fontSize: '1rem',
            width: window.innerWidth <= 600 ? '100%' : 'auto'
        });
    });

    gridContainer.parentElement.insertBefore(filterWrapper, gridContainer);
    filterWrapper.append(searchInput, yearSelect, orgSelect);

    function createOption(value, label) {
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = label;
        return opt;
    }

    function fetchCSV(url, callback) {
        fetch(url)
            .then(response => response.text())
            .then(csvText => {
                const parsed = Papa.parse(csvText.trim(), { skipEmptyLines: true });
                callback(parsed.data);
            })
            .catch(err => console.error("❌ Failed to fetch CSV:", err));
    }

    function clean(val) {
        return val?.trim() || 'n/a';
    }

    function generateProductHTML(index, image_path, title, sub_title, sub_title_B, sub_title_C, date, desc_short, desc_long, item_A, item_B, item_C, id, isMobile) {
        let itemA_HTML = '';
        const trimmedItemA = clean(item_A);
        if (trimmedItemA.startsWith("http")) {
            itemA_HTML = `<a href="${trimmedItemA}" target="_blank"><img src="media/icons/linkedin.png" style="width: 25px" alt="LinkedIn"></a>`;
        }

        const revealStyle = isMobile
            ? 'max-height: unset;'
            : 'max-height: 0; overflow: hidden; transition: max-height 0.3s ease;';

        return `
        <div class="product_cell-inner" style="box-sizing: border-box; break-inside: avoid; font-family: ${FONT};">
            <div class="toggle-wrapper" style="position: relative; cursor: pointer;">
                <img src="${clean(image_path)}" alt="${clean(title)}" style="width: 100%; height: auto; display: block; object-fit: cover;">
                <div class="reveal-panel" style="${revealStyle}">
                    <div style="padding-top: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: start;">
                            <h2 style="margin: 0;">${clean(title)}</h2>
                            <div style="display: flex; flex-direction: column; align-items: end; gap: 4px;">
                                <span style="font-size: 0.9rem;">${clean(date)}</span>
                                ${itemA_HTML}
                            </div>
                        </div>
                        <ul style="padding-left: 1rem; margin-top: 0.5rem; margin-bottom: 0;">
                            <li> role: ${clean(sub_title_C)} ${clean(sub_title_B)}</li>
                            <li> Inst: ${clean(sub_title)}</li>
                            <li> desc: ${clean(desc_short)}</li>
                            <li> id: ${clean(id)}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    }

    function setupColumns(num, container) {
        container.innerHTML = '';
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.gap = appliedGap;
        const cols = [];

        for (let i = 0; i < num; i++) {
            const col = document.createElement('div');
            Object.assign(col.style, {
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                gap: appliedGap,
                minWidth: `calc(${100 / num}% - ${appliedGap})`
            });
            cols.push(col);
            container.appendChild(col);
        }

        return cols;
    }

    function populateGrid(data) {
        const isMobile = window.innerWidth <= 600;
        const isTablet = window.innerWidth <= 900;
        let columns = INITIAL_NUM_COLUMNS;
        if (isMobile) columns = 1;
        else if (isTablet) columns = 2;

        const cols = setupColumns(columns, gridContainer);

        for (let col = 0; col < columns; col++) {
            for (let i = col; i < data.length; i += columns) {
                const row = data[i];
                if (row.length >= 11) {
                    const cleaned = row.map(cell => clean(cell));
                    const [id, image_path, title, sub_title, sub_title_B, sub_title_C, date, desc_short, desc_long, item_A, item_B, item_C] = cleaned;

                    const html = generateProductHTML(i, image_path, title, sub_title, sub_title_B, sub_title_C, date, desc_short, desc_long, item_A, item_B, item_C, id, isMobile);

                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = html;
                    const card = wrapper.firstElementChild;

                    if (!isMobile) {
                        const panel = card.querySelector('.reveal-panel');
                        const toggle = card.querySelector('.toggle-wrapper');
                        let open = false;
                        let timer = null;

                        toggle.addEventListener('click', () => {
                            if (open) {
                                panel.style.maxHeight = '0';
                                open = false;
                                clearTimeout(timer);
                            } else {
                                panel.style.maxHeight = '500px';
                                open = true;
                                timer = setTimeout(() => {
                                    panel.style.maxHeight = '0';
                                    open = false;
                                }, 10000);
                            }
                        });
                    }

                    cols[col].appendChild(card);
                }
            }
        }
    }

    function applyFilters() {
        const keyword = searchInput.value.trim().toLowerCase();
        const year = yearSelect.value.trim();
        const org = orgSelect.value.trim();

        const filtered = allData.filter(row => {
            const [ , , title, sub_title, , , date, desc_short] = row.map(x => (x || 'n/a').toLowerCase());
            const matchKeyword =
                title.includes(keyword) ||
                sub_title.includes(keyword) ||
                desc_short.includes(keyword);

            const matchYear = !year || date.includes(year);
            const matchOrg = !org || sub_title === org;

            return matchKeyword && matchYear && matchOrg;
        });

        populateGrid(filtered);
    }

    [searchInput, yearSelect, orgSelect].forEach(el => {
        el.addEventListener('input', applyFilters);
        el.addEventListener('keyup', applyFilters);
    });

    fetchCSV(csvURL, data => {
        allData = data.slice(1);

        const years = [...new Set(allData.map(row => row[6].trim() || 'n/a'))].sort().reverse();
        const orgs = [...new Set(allData.map(row => row[3].trim() || 'n/a'))].sort();

        yearSelect.appendChild(createOption('', 'All Years'));
        years.forEach(y => yearSelect.appendChild(createOption(y, y)));

        orgSelect.appendChild(createOption('', 'All Orgs'));
        orgs.forEach(o => orgSelect.appendChild(createOption(o, o)));

        populateGrid(allData);
    });

    window.addEventListener('resize', () => {
        const isMobile = window.innerWidth <= 600;
        const fullWidth = isMobile ? '100%' : 'auto';
        searchInput.style.width = fullWidth;
        yearSelect.style.width = fullWidth;
        orgSelect.style.width = fullWidth;
        populateGrid(allData);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatalogueGrid);
} else {
    initCatalogueGrid();
}
