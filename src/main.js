// main.js
import './styles/styles.css';
import './styles/button_styles.css';
import './styles/bootstrap/bootstrap.min.css';

import './components/navbar.js';
import './components/slideshow.js';

const path = window.location.pathname;

if (document.getElementById('gridContainer')) {
    import('./components/catalogue_default.js');
}

if (path.includes('project_details.html')) {
    import('./components/product_details.js');
}
