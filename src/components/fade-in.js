// fade-in.js
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () =>
        document.body.classList.add('visible')
    );
} else {
    document.body.classList.add('visible');
}



// Add fade + slide-in effect after load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('visible');
    }, 200); // small delay feels intentional
});
//see <head> of each html file for animation css.