document.addEventListener('DOMContentLoaded', function() {
const banner = document.getElementById('cookie-banner');
if (banner) {
document.getElementById('cookie-accept').onclick = function() {
banner.style.display = 'none';
};
}
});