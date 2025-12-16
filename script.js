document.addEventListener('DOMContentLoaded', () => {
    // Newsletter Subscription Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            alert(`Thanks for subscribing with ${email}! (This is a demo)`);
            newsletterForm.reset();
        });
    }

    // Search Interaction
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            // In a real app, this would open a search modal or input
            console.log('Search clicked');
            const searchInput = prompt('Search op-eds:');
            if (searchInput) {
                alert(`Searching for: ${searchInput}`);
            }
        });
    }

    console.log('Verité Research Blog Loaded');
});
