function showmenu() {
    var opened = window.getComputedStyle(document.getElementById('food-menu')).display !== 'none';

    document.getElementById('food-menu').style.display = opened ? 'none' : 'block';
}