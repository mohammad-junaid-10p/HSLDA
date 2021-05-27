window.onload = toggleBtn = document.querySelector('#toggle');
window.onload = layoutWrap = document.querySelector('.layout-wrapper');
window.onload = accordianBtn = document.querySelector('.hslda-card-footer');
window.onload = accordian = document.querySelector('.card-accordian-wrapper');


toggleBtn.onclick = function () { 
    layoutWrap.classList.toggle('sidebar-expanded');
};

function accordianToggle(element) {
    element.classList.toggle('accordian-expanded');
};
