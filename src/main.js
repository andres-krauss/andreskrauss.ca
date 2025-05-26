// main.js
import './styles/styles.css';
import './styles/button_styles.css';
import './styles/navbar-styles.css';


import './components/navbar.js';
import './components/footer.js';
import './components/slideshow.js';
import './components/fade-in.js';
import '@fontsource/courier-prime'; // loads via jsDelivr


import Papa from 'papaparse';
window.Papa = Papa; // 🔁 Make it globally available if needed


const path = window.location.pathname;

if (document.getElementById('gridContainer')) {
    import('./components/content-loader.js');
}

if (path.includes('project_details.html')) {
    import('./components/product_details.js');
}

