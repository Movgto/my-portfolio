const menuButton = document.getElementById('menu-button');

let menuButtonVisible = false;
let collapsing = false;
let collapseTimeOut = null;

window.addEventListener('resize', ()=>{
    const viewportWidth = window.innerWidth;
    if (viewportWidth > 768 && document.getElementById('mobile-menu-ctr')) {
        document.getElementById('mobile-menu-ctr').remove();
        menuButtonVisible = false;
    }
});


menuButton.addEventListener('click', ()=>{
    if(!menuButtonVisible && !collapsing) {
        menuButtonVisible = !menuButtonVisible;
        menuButton.children[0].setAttribute('src', './icons/cancel.svg')
        console.log('clicking menu');
        const mobileMenu = document.createElement('div');
        mobileMenu.setAttribute('id', 'mobile-menu-ctr');

        function removeMenu() {
            document.getElementById('mobile-menu-ctr').remove();
            menuButton.children[0].setAttribute('src', './icons/icon-menu.svg');
            menuButtonVisible = !menuButtonVisible;
        }
    }
    else if (!collapsing) {
        const menuCtr = document.getElementById('mobile-menu-ctr');
        menuCtr.classList.toggle('collapse');
        clearTimeout(collapseTimeOut);
        collapsing = true;
        collapseTimeOut = setTimeout(()=>{
            menuCtr.remove();
            collapsing = false;
        }, 500);
        menuButton.children[0].setAttribute('src', './icons/icon-menu.svg');
        menuButtonVisible = !menuButtonVisible;
    }
});