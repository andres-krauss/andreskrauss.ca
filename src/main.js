// main.js
import './styles/styles.css';
import './styles/button_styles.css';
import './styles/bootstrap/bootstrap.min.css';
import 'bootstrap';


import './components/navbar.js';
import './components/footer.js';
import './components/slideshow.js';
import './components/fade-in.js';

import Papa from 'papaparse';
window.Papa = Papa; // 🔁 Make it globally available if needed


const path = window.location.pathname;

if (document.getElementById('gridContainer')) {
    import('./components/catalogue_default.js');
}

if (path.includes('project_details.html')) {
    import('./components/product_details.js');
}

