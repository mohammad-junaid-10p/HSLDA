let toggleBtn = document.querySelector('#toggle');
let layoutWrap = document.querySelector('.layout-wrapper');

toggleBtn.onclick = function () { 
    layoutWrap.classList.toggle('sidebar-expanded');
};