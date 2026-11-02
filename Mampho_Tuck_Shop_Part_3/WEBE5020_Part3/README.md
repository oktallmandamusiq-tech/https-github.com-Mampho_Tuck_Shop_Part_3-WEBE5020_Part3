# Mampho Tuck Shop — Part 3

**Module:** WEDE5020 — Web Development (Introduction)  
**Student:** Zwivhuya Ndou  
**Student number:** st10522349  
**Project type:** Fictional small retail business for assessment purposes

## Project overview
Mampho Tuck Shop is a fictional neighbourhood retail shop serving Mamelodi East. The website presents sample product categories (snacks, cold drinks, bread and household basics), explains the shop's mission and provides product enquiry and general contact forms. All business details and prices are fictional examples.

## Pages
- `index.html` — Home page and product category links.
- `about.html` — Business background, mission, vision and audience.
- `products.html` — Product category cards, search/filter and image lightbox.
- `enquiry.html` — Product enquiry form with a sample-price calculator.
- `contact.html` — Contact information, two map views (shop pin and wider area) and validated contact form.

## Part 3 features
- JavaScript mobile navigation menu.
- Product search and category filtering.
- Product image lightbox.
- Enquiry form validation and estimated total calculation.
- Contact form validation and `mailto:` email preparation. The visitor must press Send in their own email application. There is no server-side email service or database in this student project.
- Page-specific titles, meta descriptions, keywords, semantic headings and descriptive image alt text.
- `robots.txt` and `sitemap.xml` included. Replace `https://example.com` with the final published website address after deployment.
- Responsive layouts for desktop, tablet and mobile.

## Technical requirements
HTML5, CSS3 and beginner-level JavaScript. No framework or database is required. Open `index.html` in a browser to test locally. An internet connection is required to load the externally hosted photographs and Google Maps embeds.

## Folder structure
```text
WEBE5020_Part3/
|-- index.html
|-- about.html
|-- products.html
|-- enquiry.html
|-- contact.html
|-- robots.txt
|-- sitemap.xml
|-- README.md
`-- assets/
    |-- css/style.css
    |-- js/main.js
    `-- images/logo.svg
```

## Testing checklist
- [ ] Open each page and test all navigation links.
- [ ] Test product search and each category filter.
- [ ] Click a product photo to open and close the lightbox.
- [ ] Submit the enquiry form with missing and valid information.
- [ ] Check that the estimate changes with the selected category and quantity.
- [ ] Submit the contact form with invalid and valid details. Confirm that a mail application opens and review the prepared email before sending.
- [ ] Test desktop, tablet and mobile screen widths in browser developer tools.
- [ ] Replace example.com in `robots.txt` and `sitemap.xml` after deployment.

## Changelog
### Part 3 — 2 November 2026
- Added a JavaScript product search and category filter to the Products page.
- Added an image lightbox so visitors can enlarge the product photographs.
- Added an enquiry calculator that validates the visitor's details and estimates a total using the sample prices (R8, R10, R18 and R12).
- Added contact form validation for name, email, telephone number, message type and message length. The form prepares an email using a `mailto:` link; actual delivery depends on the visitor's configured email application.
- Added responsive mobile navigation and updated page layout for smaller screens.
- Added page-specific SEO titles, descriptions, keywords, image alternative text, `robots.txt` and `sitemap.xml`.
- Added two Google Maps views: an approximate shop pin and the wider Mamelodi East area. The second map is an area reference and does not claim a second branch.
- Replaced the original illustrated product category graphics with real product photographs hosted by Unsplash.

### Part 2 baseline
The Part 2 ZIP supplied for this update contained five linked HTML pages, a shared CSS file, a small JavaScript file and original SVG category illustrations. The existing colour palette and basic layout were updated for this Part 3 version.

## References (Harvard style — adapt to the IIE guide)
- Mozilla Developer Network (MDN) (n.d.) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 2 November 2026).
- Mozilla Developer Network (MDN) (n.d.) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 2 November 2026).
- Mozilla Developer Network (MDN) (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 2 November 2026).
- Google (n.d.) *Search Central: SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).
- Khlebnikova, Y. (2020) *A white plate topped with chips next to a bag of chips*. Unsplash. Available at: https://unsplash.com/photos/a-white-plate-topped-with-chips-next-to-a-bag-of-chips-YRCTpi816ZA (Accessed: 2 November 2026).
- Yao, Z. (2025) *Bottles and cans of drinks inside a refrigerator*. Unsplash. Available at: https://unsplash.com/photos/bottles-and-cans-of-drinks-inside-a-refrigerator-X721MazHDfM (Accessed: 2 November 2026).
- Arenas de Rodrigo, D. (2025) *Close-up of freshly baked bread in loaf pan*. Unsplash. Available at: https://unsplash.com/photos/close-up-of-freshly-baked-bread-in-loaf-pan-4yZLuNeDs1o (Accessed: 2 November 2026).
- Lo, J. (2025) *Assorted cleaning supplies and tools on a counter*. Unsplash. Available at: https://unsplash.com/photos/assorted-cleaning-supplies-and-tools-on-a-counter-q2nkH-OpBNo (Accessed: 2 November 2026).
- The Independent Institute of Education (2026) *Web Development (Introduction): WEDE5020 Part 3 assessment brief and marking rubric*. Course material supplied by lecturer.

