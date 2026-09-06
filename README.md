# Pixel Perfect Pages

MASTER PROMPT — COMPLETE HIGH-FIDELITY MULTI-PAGE WEBSITE RECREATION

You are an expert UI/UX Designer, Frontend Developer, Website Architect and Vanilla JavaScript Developer.

I will provide you with:

A complete reference website URL

My custom logo

My address

My phone number

My business/website information

Unsplash images for the website

My required accent color

Your task is to create the COMPLETE WEBSITE, not just the homepage.

The reference website is the PRIMARY source of truth for the website's structure, page hierarchy, navigation, layout, visual design, sections, interactions and responsive behavior.

The final website must be a high-fidelity recreation of the complete reference website, while using my own logo, information, contact details and appropriate Unsplash imagery.

🚨 MOST IMPORTANT REQUIREMENT — COMPLETE WEBSITE

DO NOT BUILD ONLY THE HOMEPAGE.

I need the ENTIRE WEBSITE represented by the reference website.

You MUST inspect the reference website and identify ALL available:

Pages

Sub-pages

Services

Service detail pages

Categories

Navigation links

Dropdown links

Footer links

About pages

Contact pages

Gallery pages

Portfolio pages

Blog pages

FAQ pages

Location pages

CTA pages

Forms

Other publicly accessible internal pages

Every important page that exists in the reference website must be recreated.

1. REFERENCE WEBSITE

REFERENCE WEBSITE URL:

[PASTE REFERENCE WEBSITE LINK HERE]

Before writing ANY code, completely inspect the reference website.

Do NOT inspect only the homepage.

You MUST navigate through the website and discover its complete page structure.

Follow:

Navbar links

Dropdown menus

Service links

Buttons

CTA links

Footer links

Internal links

Cards

Images that link to pages

Breadcrumbs

Category pages

Individual service pages

Contact links

About links

The reference website must be treated as a complete website map, not just a single webpage.

2. CREATE A COMPLETE WEBSITE MAP FIRST

Before coding, create a website map.

For example:

HOME
│
├── ABOUT
│
├── SERVICES
│ ├── SERVICE 1
│ ├── SERVICE 2
│ ├── SERVICE 3
│ ├── SERVICE 4
│ └── SERVICE 5
│
├── GALLERY
│
├── CONTACT
│
└── OTHER PAGES

The actual structure MUST be based on the reference website.

Do NOT assume the website only has these pages.

Discover the actual pages from the reference website.

3. EVERY SERVICE MUST HAVE ITS OWN CONTENT

This is extremely important.

If the reference website has a Services section containing multiple services, do NOT make the service cards non-functional.

Each service must be clickable.

When the user clicks a service, they should be taken to its appropriate service detail page or section.

Each service detail page should contain information relevant to that service, such as:

Service title

Service description

Main image

Features

Benefits

Process

Related information

CTA

Contact option

The structure should follow the corresponding reference page as closely as reasonably possible.

DO NOT create empty service pages.

DO NOT make all service pages identical placeholders.

Each service must have its own relevant content and identity.

4. ALL NAVIGATION MUST WORK

Every important link visible on the website must work.

This includes:

Navbar links

Dropdown links

Service links

Service detail links

About links

Contact links

Footer links

CTA buttons

Cards that act as links

Gallery navigation

Breadcrumb links

Back/navigation buttons

There must be NO dead links unless the reference itself contains a non-functional element.

When I click:

Services → Service A

I should actually reach the Service A page.

When I click:

Services → Service B

I should actually reach Service B.

When I click:

About

I should reach the About page.

When I click:

Contact

I should reach the Contact page.

The complete website must behave like a real website.

5. MULTI-PAGE STRUCTURE

If the reference website contains multiple pages, create separate HTML pages.

Example:

project/
│
├── index.html
│
├── about.html
├── contact.html
├── gallery.html
│
├── services/
│ ├── service-1.html
│ ├── service-2.html
│ ├── service-3.html
│ └── ...
│
├── css/
│ └── style.css
│
├── js/
│ └── script.js
│
└── images/
└── ...

The exact structure should be based on the reference website.

Do NOT put the entire website inside one HTML file if the reference contains multiple pages.

🚨 6. TECHNOLOGY — ABSOLUTELY STRICT

The frontend MUST be built using ONLY:

HTML5

CSS3

Vanilla JavaScript

THIS REQUIREMENT IS STRICT.

DO NOT USE:

❌ React
❌ React Router
❌ Next.js
❌ Vue
❌ Angular
❌ TypeScript
❌ TSX
❌ Tailwind CSS
❌ Bootstrap
❌ jQuery
❌ Svelte
❌ Any frontend framework
❌ Any TypeScript-based implementation

There must be:

NO .ts files

NO .tsx files

The project must contain normal:

.html

.css

.js

files.

JavaScript must be Vanilla JavaScript.

The website must be runnable directly in a normal browser.

7. BLACK + WHITE + ACCENT COLOR THEME

The main website theme MUST be:

BLACK

WHITE

ACCENT COLOR

Accent color:

[INSERT YOUR ACCENT COLOR HERE]

Use the accent color carefully and minimally.

The dominant visual identity must remain:

Black + White

The accent color should be used only where appropriate, for example:

CTA buttons

Small highlights

Active navigation

Hover states

Icons

Important labels

Small decorative elements

DO NOT allow the accent color to dominate the website.

DO NOT introduce random additional colors.

The final color system should feel:

Premium

Modern

Minimal

Professional

Elegant

High-end

8. LOGO

I will provide my own logo.

MY LOGO:

[ATTACH LOGO HERE]

Use my logo throughout the website.

Replace the reference website's logo with my logo.

Preserve the reference website's approximate:

Logo size

Position

Alignment

Header spacing

Mobile logo placement

If necessary, adapt the logo treatment to work correctly with the black/white theme.

9. ADDRESS

I will provide the correct address.

ADDRESS:

[PASTE ADDRESS HERE]

Use ONLY this address.

Replace the reference website's address wherever appropriate.

Possible locations:

Header

Contact page

Footer

Location section

Contact cards

Map section

Do NOT invent another address.

10. PHONE NUMBER

PHONE:

[PASTE PHONE NUMBER HERE]

Use ONLY the phone number I provide.

Use it wherever the reference website contains:

Phone number

Call CTA

Contact section

Header contact

Footer contact

The phone button should work as a proper telephone link where appropriate.

Do NOT invent another number.

11. IMAGES — UNSPLASH

Use Unsplash images for photographic content.

Images should be selected based on the actual purpose of the reference image.

For example:

If the reference has:

Restaurant image → use a suitable Unsplash restaurant image

Interior image → use a suitable interior image

Service image → use a relevant service image

Hero image → use a suitable high-quality hero image

Team image → use an appropriate team/business image

Do NOT use random unrelated images.

Do NOT use low-quality images.

Do NOT use colorful images that destroy the black-and-white visual identity.

Where appropriate, apply grayscale treatment using CSS.

Example:

img {
    filter: grayscale(100%);
}


But do NOT blindly grayscale every image if the accent-color treatment requires otherwise.

Images must visually fit the reference layout.

12. COMPLETE PAGE-BY-PAGE RECREATION

For EVERY page discovered on the reference website:

Analyze and recreate:

Header

Navbar

Hero

Breadcrumbs

Main content

Images

Cards

Text blocks

CTA sections

Forms

Sidebars

Related content

Footer

Navigation

Responsive behavior

Do NOT only copy the homepage structure.

The entire website must be recreated.

13. SERVICES PAGE

If the reference website has a Services page:

Recreate its:

Layout

Service cards

Images

Titles

Descriptions

CTA buttons

Hover effects

Spacing

Grid

Typography

Each service card must link to the correct service detail page.

14. SERVICE DETAIL PAGES

For every individual service found in the reference website:

Create a dedicated page.

Example:

services/
├── service-a.html
├── service-b.html
├── service-c.html

Each page should have:

Service-specific heading

Service-specific image

Service-specific description

Service-specific sections

Relevant CTA

Contact option

Navigation back to Services

The service pages must NOT be empty placeholders.

15. NAVBAR

Recreate the reference website's navbar as closely as possible.

Analyze:

Height

Logo position

Navigation spacing

Dropdowns

CTA

Background

Borders

Sticky behavior

Scroll behavior

Mobile menu

If the reference has dropdown menus, implement them.

If the reference has a mobile hamburger menu, implement it.

Use Vanilla JavaScript for menu interactions.

16. HERO SECTIONS

Every page must have the appropriate hero/banner structure if the reference has one.

Match:

Height

Image

Overlay

Heading

Subtitle

CTA

Alignment

Spacing

Typography

Do not use the same generic hero on every page unless the reference does.

17. TYPOGRAPHY

Analyze the reference website's typography.

Match as closely as possible:

Font family

Font size

Font weight

Line height

Letter spacing

Heading hierarchy

Paragraph width

Text alignment

If the exact font is unavailable, use the closest suitable web font.

Do NOT randomly change typography.

18. SPACING & PROPORTIONS

This is a high-priority requirement.

Match:

Section height

Container width

Margins

Padding

Grid gaps

Card dimensions

Image proportions

Text spacing

Button spacing

Header spacing

Footer spacing

Do NOT use random values.

The proportions should closely follow the reference.

19. RESPONSIVE DESIGN

The COMPLETE website must be responsive.

Test/design for:

Desktop

1920px
1440px
1280px
1024px

Tablet

834px
768px

Mobile

430px
414px
390px
375px

Do NOT simply shrink the desktop version.

Analyze the reference website's actual mobile behavior.

Recreate:

Mobile navbar

Menu

Grid changes

Stacking

Image behavior

Typography scaling

Button behavior

Section spacing

Footer behavior

Use CSS media queries.

20. ANIMATIONS & INTERACTIONS

Recreate the important interactions visible in the reference.

Examples:

Hover effects

Scroll animations

Fade effects

Slide effects

Image reveals

Menu animations

Dropdown animations

Sticky header

Smooth scrolling

Carousels

Sliders

Tabs

Accordions

Modals

Use:

CSS3 + Vanilla JavaScript

Do not add unnecessary animations that do not exist in the reference.

21. FORMS

If the reference website contains forms:

Recreate:

Input fields

Labels

Textareas

Selects

Checkboxes

Buttons

Validation

Error states

Success states

Use Vanilla JavaScript for frontend validation.

Do not invent backend functionality.

If backend submission is not provided, make the frontend form functional at the UI/validation level and clearly state what backend/API is required.

22. FOOTER

The footer is part of the complete website.

Recreate:

Layout

Columns

Navigation

Address

Phone

Social links

CTA

Copyright

Logo

Spacing

Use my information instead of the reference website's private/business information.

All internal footer links must work.

23. SEO & ACCESSIBILITY

Use:

Semantic HTML5

Proper H1/H2/H3 hierarchy

Meta title

Meta description

Alt text

Accessible buttons

Keyboard-friendly navigation

Proper labels

Good contrast

Descriptive links

24. PERFORMANCE

Keep the website lightweight.

Avoid unnecessary libraries.

Use optimized image sizing.

Lazy-load images where appropriate.

Avoid unnecessary JavaScript.

Do not add frameworks.

🚨 25. SELF-INSPECTION & VISUAL VERIFICATION

THIS IS MANDATORY.

After creating the complete website, DO NOT immediately give me the result.

First inspect your own implementation against the reference website.

Check EVERY page.

For every page compare:

Layout

Section order

Position

Width

Height

Alignment

Spacing

Typography

Font

Size

Weight

Line height

Letter spacing

Images

Position

Size

Aspect ratio

Cropping

Treatment

Components

Cards

Buttons

Navigation

Forms

Footer

Responsive

Desktop

Tablet

Mobile

Interactions

Dropdown

Menu

Buttons

Links

Sliders

Animations

If something is significantly different from the reference:

FIX IT.

Do another comparison.

Continue improving until the implementation is a close visual recreation.

🚨 26. COMPLETE LINK TEST

Before final delivery, test every important link.

Create a checklist:

Home ✓

About ✓

Services ✓

Service 1 ✓

Service 2 ✓

Service 3 ✓

All other services ✓

Gallery ✓

Contact ✓

Footer links ✓

CTA links ✓

Phone link ✓

Mobile menu ✓

Dropdowns ✓

No important navigation should lead to a missing page.

No important button should be dead.

27. FILE STRUCTURE

Create a professional multi-page structure such as:

project/
│
├── index.html
│
├── pages/
│ ├── about.html
│ ├── services.html
│ ├── contact.html
│ ├── gallery.html
│ └── ...
│
├── services/
│ ├── service-1.html
│ ├── service-2.html
│ ├── service-3.html
│ └── ...
│
├── css/
│ └── style.css
│
├── js/
│ └── script.js
│
├── images/
│ └── ...
│
└── README.md

Adjust this structure according to the actual number of pages.

28. DO NOT DO THESE THINGS

NEVER:

Build only the homepage

Ignore internal pages

Ignore service pages

Make service cards non-clickable

Create empty service pages

Create generic placeholder pages

Create random pages that don't exist in the reference

Remove important pages

Change the section hierarchy unnecessarily

Invent business information

Invent address

Invent phone number

Use random images

Use React

Use Tailwind

Use TypeScript

Use TSX

Use Bootstrap

Use jQuery

Use a frontend framework

Create .ts files

Create .tsx files

Give incomplete code

Skip mobile responsiveness

Skip visual verification

Skip link testing

29. DEVELOPMENT WORKFLOW

Follow this exact workflow:

STEP 1

Open and inspect the reference website.

STEP 2

Explore the COMPLETE website, not just the homepage.

STEP 3

Identify every page and sub-page.

STEP 4

Identify every service and service detail page.

STEP 5

Create a complete website map.

STEP 6

Analyze desktop design.

STEP 7

Analyze mobile design.

STEP 8

Analyze typography, spacing and proportions.

STEP 9

Create the HTML page structure.

STEP 10

Create the shared CSS system.

STEP 11

Create Vanilla JavaScript functionality.

STEP 12

Implement homepage.

STEP 13

Implement About page.

STEP 14

Implement Services page.

STEP 15

Implement EVERY individual Service page.

STEP 16

Implement Gallery/Portfolio pages if present.

STEP 17

Implement Contact page.

STEP 18

Implement all remaining reference pages.

STEP 19

Add my logo.

STEP 20

Add my address.

STEP 21

Add my phone number.

STEP 22

Add suitable Unsplash images.

STEP 23

Apply Black + White + [ACCENT COLOR] theme.

STEP 24

Implement responsive behavior.

STEP 25

Implement animations and interactions.

STEP 26

Test every navigation link.

STEP 27

Visually compare EVERY PAGE against the reference.

STEP 28

Fix differences.

STEP 29

Check browser console for errors.

STEP 30

Perform final responsive test.

STEP 31

Only after ALL checks are complete, provide the final complete website.

30. FINAL OBJECTIVE

The final result must be:

REFERENCE WEBSITE
+
COMPLETE PAGE STRUCTURE
+
ALL SERVICES
+
ALL SERVICE DETAIL PAGES
+
ALL IMPORTANT INTERNAL PAGES
+
REFERENCE-LIKE UI/UX
+
MY LOGO
+
MY ADDRESS
+
MY PHONE NUMBER
+
UNSPLASH IMAGES
+
BLACK
+
WHITE
+
MY ACCENT COLOR
+
HTML5
+
CSS3
+
VANILLA JAVASCRIPT

The result must NOT be a homepage demo.

It must be a complete, navigable, responsive, multi-page frontend website.

31. MY INFORMATION

REFERENCE WEBSITE

[PASTE COMPLETE WEBSITE URL HERE]

WEBSITE NAME

[PASTE WEBSITE NAME HERE]

ADDRESS

[PASTE ADDRESS HERE]

PHONE NUMBER

[PASTE PHONE NUMBER HERE]

LOGO

[ATTACH MY LOGO HERE]

ACCENT COLOR

[PASTE EXACT COLOR / HEX CODE HERE]

IMAGES

Use suitable Unsplash images.

TECHNOLOGY

HTML5 + CSS3 + Vanilla JavaScript ONLY

STRICT TECHNOLOGY RULE:

NO REACT
NO TAILWIND CSS
NO TYPESCRIPT
NO TSX
NO VUE
NO ANGULAR
NO BOOTSTRAP
NO JQUERY
NO FRONTEND FRAMEWORK

Only:

HTML + CSS + JavaScript

FINAL INSTRUCTION

First analyze the COMPLETE reference website.

Do NOT start by creating only the homepage.

Discover the complete website structure first.

Then recreate the complete website page-by-page.

Every important navigation item must lead to a real corresponding page.

Every service must have its own relevant detail page where applicable.

After development, inspect and compare the complete implementation against the reference and fix visual/structural differences before presenting the final result.

DO NOT STOP AFTER CREATING THE HOMEPAGE.

I WANT THE COMPLETE WEBSITE.(address:30 N Gould ST STE R, Sheridan, WY, 82801 USA,55 University Avenue Toronto, ON M5J 2H7 Canada,+1 (647) 427-4133)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3a50796a-a9d0-4ff5-a5cb-9cc9f5f8b8e2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
