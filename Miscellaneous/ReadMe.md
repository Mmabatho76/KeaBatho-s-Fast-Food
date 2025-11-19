Overview:
    Welcome to KeaBatho's Fast Food, a modern, responsive website designed to showcase a fast-food restaurant. The site highlights our menu, services, staff, and contact options. It’s built to give users an easy way to explore our delicious meals and place enquiries.

Features:

    Responsive design that works on desktop, tablet, and mobile devices.

    Navigation bar with links to Home, About, Services, Product, Enquiry, and Contact pages.

    Hero section with a welcoming introduction and featured image.

    Call-to-action sections that encourage visitors to view the menu or place an order.

    Footer with copyright information.

    Contact form to submit enquiries.

    Staff section with stylish cards showing images and roles.

    Social media links for connecting with the restaurant.

Technologies Used:
    HTML5 for website structure and semantic layout.
    CSS3 for styling, responsive design, and layout.
    Google Fonts (Roboto) for clean and readable text.
    Responsive design using media queries to ensure the site looks great on all devices.


File & Folder Structure
        KeaBatho-FastFood/
        │
        ├─ Assets/ # Images and logos
        │ ├─ LOGO.png
        │ └─ IMAGE.jpg
        │
        ├─ Css/ # Stylesheets
        │ └─ styles.css
        │
        ├─ Pages/ # Additional pages
        │ ├─ about.html
        │ ├─ services.html
        │ ├─ product.html
        │ ├─ enquiry.html
        │ └─ contact.html
        │
        ├─ index.html # Home page
        └─ README.md # Project documentation

Installation / How to Run

    Download or clone this repository.

    Open the index.html file in any modern browser.

    No server setup is required (static website).


Dependencies

    Google Fonts 
    – for typography (Roboto font).

    CSS3 
    – for styling and responsive layout.

Usage Instructions(option 1)

    Edit index.html to update homepage content, hero section, call-to-action sections, and images.

    Modify Css/styles.css to change:

    Colors (header, footer, buttons, and call-to-action sections)

    Typography (h1, h2, p, #myParagraph)

    Layout (main, .staff-container, .staff-member, .contact-form)

    Responsiveness (@media queries for small devices, .responsive-text, .vid)

    Navigation behavior (.nav-links, .hamburger, #menu-toggle)

    Add new pages to the Pages folder and link them through the navigation bar.

    Replace images in the Assets folder as needed.


How to Use (option 2):

    Open the website by opening index.html in a modern web browser.

    Navigate through the pages using the navigation bar (About, Services, Product, Enquiry, Contact).

    Use the contact form on the Enquiry page to make enquiries.

    Browse the staff section to learn about the team and the Product page for the menu.

Key Features Referenced from Code

    Navigation bar – Flex layout, responsive links, hamburger menu toggle.

    Hero section – Centered heading (h1) and responsive paragraph text (.responsive-text).

    Call-to-Action Sections – .cta-section and .highlight sections with buttons styled via CSS.

    Staff Section – .staff-container with .staff-member cards, hover effects, and images (.staff-img).

    Contact Form – .contact-form with table-based layout, inputs, textarea, and submit button with hover effect.

    Social Media Icons – .socials flex layout with hover transitions.

    Responsive Design – Media queries for navigation, image (.img), and text responsiveness.

    Implementation
    -Real time and date is the top of the about us page
    -Accordions are at the about page 
    -JavaScript Validation is implemented in the enquiry and contact page...
    -Enquiry page: After the user has inputed their details and  there will be a pop-up message to let them know their equiry has been submitted 
    -Contact page: After the user has inputed their details , there will be a pop-up message to let them know their equiry has been submitted and the contact page will lead or land them to outlook/gmail.
    -Added an icon to help a user go up when clicked on it , it is at the about us page
    -ANIMATIONS
    

Notes:

    Some images are placeholders and can be replaced with your own.

    Ensure the Assets and Css folders are in the same directory as index.html so all links work correctly.

    The site is designed for simplicity, speed, and a great user experience.

Author:
    mabatho Vilakazi
    Email: mmabathovilakazi5@gmail.com
    GitHub: Mmabatho76


Changelog
v1.0.0 – Initial Release (2025-08-27)

    Added homepage (index.html)

    Created, "About Us" and "Contact" pages

    Added navigation bar and footer

    

v1.1.0 – Latest Update (2025-09-26)
    Added css for decoration, layout, and typography

    Improved mobile responsiveness

    Integrated Font Awesome icons

    Added responsive CSS styling
    
    For part 1 an empty ReadMe file was submitted but now my readme file has info

    
        v1.2.0 (2025-11-19)

        Added
        Implemented essential SEO elements, including a descriptive title tag (<title>) and meta tags for description, keywords, and author.
        Created a responsive navigation bar with links to Home, About, Services, Product, Enquiry, and Contact pages.
        Added a Hero section with a welcome message and a brief introduction to the business.
        Included a logo and a main image (IMAGE.jpg) in the header section.
        Incorporated two clear Call to Action (CTA) sections: "View Our Menu" and "Make an Enquiry".
        Included a footer with social media icons for Facebook, Instagram, and Twitter (links are placeholders).
        Added external CSS link for styles.css and a CDN link for Font Awesome icons.
        Implemented and documented changes/improvements based on part 2 feedback.
        - Implemented & documented Javascript interactive elements(accordions, tabs, modals, etc...)
        - Implemented and documented interactive (Google) map.
        - Implemented and documented Gallery lightbox.
        - Implemented and documented dynamic (real-time) content.
        - Implemented the search feature.
        - Implemented SEO title tags.
        - Implemented SEO meta tags (keywords,  description)
        *Enquiry form* with Javascript input validation and user feedback.
        - *Contact form* with Javascript input validation, *email recipient processing* and feedback.
        - Record of multiple gitHub commits.
        - Added a JavaScript fle
        - All pages consist of a Javascript link or a link that will help them access the JS code.
        -There is a search filter at the Service Page 


        Created a new scripts.js file to handle frontend interactivity.
Implemented a functional Hamburger Menu script for mobile navigation.
Added an Accordion script to manage collapsible content sections (requires corresponding HTML/CSS).
Introduced a Lightbox script for image popups (requires corresponding HTML/CSS).
Added Back to Top button functionality for smooth page scrolling.
Included a utility function to display and continuously update a real-time timestamp on the page (requires a <p id="timestamp"> element).
Added comprehensive client-side form validation logic (validateForm()) using JavaScript, including error message display and success message handling on the page.
Included basic, alternative form validation functions (Main() and submitEnquiry()) using alert() for user feedback.

        Changed
        The overall structure is a single HTML page (index.html).
        Removed
        (None, as this is the initial version)



    
    REFERENCES
    
    Ocean5Strategies 8 Technical Elements of Website Design and Development | Ocean 5 Strategies
    (Accessed 07 August 2025)
    
    The IIE. 2012.Web Development (Introduction) (WEDE5020 Module Manual). The Independent
    Institute of Education: Unpublished.
    
    Nulab 16 timeline examples (plus tips) | Nulab (Accessed 06 August 2025)
    
    BoomDevs What Are the Technical Requirements for a Website? - BoomDevs LLC (Accessed 06
    August 2025)
    
    W3Schools https://www.w3schools.com/html/html_attributes.asp( Accessed 20 August
    2025)
    W3C. (2024).HTML5 Specification. https://html.spec.whatwg.org/multipage/( Accessed 12
    August 2025)

    W3School https://www.w3schools.com/css/default.asp accessed 23 September 2025