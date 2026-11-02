// Mampho Tuck Shop Part 3 JavaScript. This file contains the small interactions used by the pages.
document.addEventListener('DOMContentLoaded', function () {
    // Show the current year in the footer.
    var year = document.querySelector('[data-year]');
    if (year) year.textContent = new Date().getFullYear();

    // Open and close the mobile navigation menu.
    var menuButton = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.nav-links');
    if (menuButton && nav) {
        menuButton.addEventListener('click', function () {
            nav.classList.toggle('show');
            menuButton.setAttribute('aria-expanded', nav.classList.contains('show'));
        });
    }

    // Search and filter the product cards on the Products page.
    var searchBox = document.getElementById('productSearch');
    var categoryFilter = document.getElementById('categoryFilter');
    var productCards = document.querySelectorAll('.product-card');
    function filterProducts() {
        if (!searchBox || !categoryFilter) return;
        var searchText = searchBox.value.toLowerCase().trim();
        var category = categoryFilter.value;
        var visible = 0;
        productCards.forEach(function (card) {
            var matchesText = card.textContent.toLowerCase().includes(searchText);
            var matchesCategory = category === 'all' || card.dataset.category === category;
            var showCard = matchesText && matchesCategory;
            card.hidden = !showCard;
            if (showCard) visible++;
        });
        document.getElementById('resultCount').textContent = 'Showing ' + visible + ' product categories';
        document.getElementById('noProducts').hidden = visible !== 0;
    }
    if (searchBox) searchBox.addEventListener('input', filterProducts);
    if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);

    // Read the category from a link on the home page, when one was selected.
    if (categoryFilter && window.location.search) {
        var selectedCategory = new URLSearchParams(window.location.search).get('category');
        if (selectedCategory) {
            categoryFilter.value = selectedCategory;
            filterProducts();
        }
    }

    // Display a larger product photo when a product image is clicked.
    var lightbox = document.getElementById('lightbox');
    var imageButtons = document.querySelectorAll('.lightbox-trigger');
    if (lightbox) {
        imageButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var largeImage = lightbox.querySelector('img');
                largeImage.src = button.dataset.image;
                largeImage.alt = button.dataset.caption;
                lightbox.querySelector('p').textContent = button.dataset.caption;
                lightbox.classList.add('open');
                lightbox.setAttribute('aria-hidden', 'false');
            });
        });
        function closeLightbox() {
            lightbox.classList.remove('open');
            lightbox.setAttribute('aria-hidden', 'true');
        }
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') closeLightbox();
        });
    }

    // Product enquiry: calculate an estimate from the sample category prices.
    var enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        var productFromLink = new URLSearchParams(window.location.search).get('product');
        if (productFromLink) document.getElementById('enqProduct').value = productFromLink;
        enquiryForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var result = document.getElementById('enquiryResult');
            result.classList.remove('error');
            if (!enquiryForm.checkValidity()) {
                enquiryForm.reportValidity();
                result.textContent = 'Please complete the required fields correctly.';
                result.classList.add('error');
                return;
            }
            var prices = { snacks: 8, drinks: 10, bread: 18, household: 12 };
            var names = { snacks: 'Snack packs', drinks: 'Cold drinks', bread: 'Bread & basics', household: 'Household items' };
            var product = document.getElementById('enqProduct').value;
            var quantity = Number(document.getElementById('enqQty').value);
            var total = prices[product] * quantity;
            result.innerHTML = '<strong>Enquiry estimate:</strong> ' + quantity + ' × ' + names[product] + ' = <strong>R' + total.toFixed(2) + '</strong>. This is a sample estimate only. Please contact the shop to confirm stock and the current price.';
        });
    }

    // Contact form: validate details and prepare an email in the visitor's email app.
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var result = document.getElementById('contactResult');
            result.classList.remove('error');
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                result.textContent = 'Please check the highlighted fields and try again.';
                result.classList.add('error');
                return;
            }
            var formData = new FormData(contactForm);
            var subject = encodeURIComponent('Website message: ' + formData.get('type'));
            var body = encodeURIComponent('Name: ' + formData.get('name') + '\nEmail: ' + formData.get('email') + '\nPhone: ' + formData.get('phone') + '\nMessage type: ' + formData.get('type') + '\n\nMessage:\n' + formData.get('message'));
            result.textContent = 'Your email application should open with the message prepared. Please review it and press Send in your email application.';
            window.location.href = 'mailto:mamphotuckshop@gmail.com?subject=' + subject + '&body=' + body;
        });
    }
});
