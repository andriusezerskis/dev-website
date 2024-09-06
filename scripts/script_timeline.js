document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (!timelineItems.length) {
        console.error('No timeline items found.');
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Animating:', entry.target);
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    rotate: [15, 0],
                    translateX: entry.target.matches('.timeline-item:nth-child(even)') ? [100, 0] : [-100, 0],
                    duration: 3500,
                    easing: 'easeOutExpo'
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => observer.observe(item));
});