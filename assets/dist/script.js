let toggleBtn = document.querySelector('#toggle');
let layoutWrap = document.querySelector('.layout-wrapper');
let accordianBtn = document.querySelector('.hslda-card-footer');
let accordian = document.querySelector('.card-accordian-wrapper');
toggleBtn.onclick = function () { 
    layoutWrap.classList.toggle('sidebar-expanded');
};

function accordianToggle(element) {
    element.classList.toggle('accordian-expanded');
};

