const panels = document.querySelectorAll('.panel');

panels.forEach(() => {
    panels.addEventListener('click', () => {
        removeActiveClass();
        ));
    panels.addEventListener('transitionend', toggleOpen);
}

function removeActiveClass () {
    panels.forEach(panel => panel.classList.remove('active'));
}
