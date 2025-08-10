function adjustBodyPadding() {
    const nav = document.querySelector('.navbar');
    const info = document.querySelector('.top-info-bar');
    let totalHeight = 0;

    if (info) totalHeight += info.offsetHeight;
    if (nav) totalHeight += nav.offsetHeight;

    document.body.style.paddingTop = `${totalHeight}px`;
}

window.addEventListener('load', adjustBodyPadding);
window.addEventListener('resize', adjustBodyPadding);

document.addEventListener('contextmenu', event => event.preventDefault());