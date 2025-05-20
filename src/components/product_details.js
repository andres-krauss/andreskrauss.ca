document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch CSV data from URL and parse it using PapaParse
    function fetchCSV(url, callback) {
        fetch(url)
            .then(response => response.text())
            .then(text => {
                Papa.parse(text, {
                    header: false,
                    skipEmptyLines: true,
                    complete: function(results) {
                        callback(results.data);
                    }
                });
            });
    }

    // Function to get URL parameters
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Function to load product details based on index
    function loadProductDetails(index, data) {
        const product = data[parseInt(index)];
        if (product) {
            const image_path = `data/catalogue/images/${product[1]}`;
            const title = product[2];
            const sub_title = product[3];
            const date = product[4];
            const desc_short = product[5];
            const desc_long = product[6];
            const item_A = product[7];
            const item_B = product[8];
            const item_C = product[9];
            const paragraphs = desc_long.split('|').map(para => `<p class="ms-2">${para}</p>`).join('');

            const productDetailsHTML = `
                <div class="container product_details">
                    <section class="main_content mb-0">
                        <div class="row text-start">
                            <!-- Left Column -->
                            <div class="col-md-6">
                                <div class="d-flex">
                                    <span class="fs-1">${title}</span>
                                    <span class="fs-3 ms-auto">${date}</span>
                                </div>
                                <div class="fs-6 mb-3">${sub_title}</div>
                                <img src="${image_path}" alt="${title}" class="img-fluid w-100">
                            </div>
                            <!-- Right Column -->
                            <div class="col-md-6">
                                <div style="margin-top: 5.75rem !important;">${paragraphs}</div>
                            </div>
                        </div>
                    </section>
                </div>
            `;

            const productDetailsContainer = document.getElementById('productDetailsContainer');
            productDetailsContainer.innerHTML = productDetailsHTML;
        }
    }

    // URL of your CSV file relative to the HTML file's location
    const csvURL = 'data/catalogue/catalogue.csv';

    // Get the index of the selected product from the query string
    const productIndex = getParameterByName('index');

    // Fetch CSV and load product details
    fetchCSV(csvURL, function(data) {
        loadProductDetails(productIndex, data);
    });
});
