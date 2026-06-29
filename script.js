document.addEventListener('DOMContentLoaded', () => {
    const actionControls = document.querySelectorAll('.nav-control');
    const systemCards = document.querySelectorAll('.viewport-card');

    // Central Multi-Page View State Routine
    function switchActiveCard(targetCardId) {
        // Run Step 1: Manage styling toggle rules over navigation chips
        actionControls.forEach(ctrl => {
            if (ctrl.getAttribute('data-target') === targetCardId) {
                ctrl.classList.add('active');
            } else {
                ctrl.classList.remove('active');
            }
        });

        // Run Step 2: Toggle layout display properties for panels
        systemCards.forEach(card => {
            if (card.id === targetCardId) {
                card.classList.add('active-card');
                // Instantly align viewport level to peak header coordinate
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                card.classList.remove('active-card');
            }
        });
    }

    // Assign operational event mapping triggers to elements
    actionControls.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const chosenTarget = button.getAttribute('data-target');
            switchActiveCard(chosenTarget);
        });
    });

    // Make state switching function globally accessible within execution frame
    window.switchActiveCard = switchActiveCard;
});
