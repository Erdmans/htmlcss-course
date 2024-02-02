(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        // modal.style.display = 'block';
        modal.setAttribute('data-open', '');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        // modal.style.display = 'none';
        modal.removeAttribute('data-open');
        document.body.style.overflow = 'initial';
    });
})();