# SMAPDEV Research Network Website

The official website for the **Sustainable Materials and Process Development (SMAPDEV) Research Network**.

The website presents the network's research focus, research outcomes, team, collaboration opportunities, mentorship activities, gallery, and contact information in a responsive modern interface.

## Project Status

The core website pages and shared UI components have been implemented.

### Implemented Pages

- Home
- About
- Research Areas
- Research Outcomes
- Team
- Collaboration
- Mentorship
- Gallery
- Contact

The Contact page is connected to **EmailJS** for client-side email delivery.

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- EmailJS
- JavaScript / JSX
- Vercel

## Project Structure

```text
src/
├── components/
│   └── common/
│       ├── Button.jsx
│       ├── Footer.jsx
│       ├── Navbar.jsx
│       ├── PageHero.jsx
│       └── SectionHeading.jsx
│
├── data/
│   ├── gallery.js
│   ├── researchAreas.js
│   ├── researchOutcomes.js
│   └── team.js
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── ResearchAreas.jsx
│   ├── ResearchOutcomes.jsx
│   ├── Team.jsx
│   ├── Collaboration.jsx
│   ├── Mentorship.jsx
│   ├── Gallery.jsx
│   └── Contact.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

The exact filenames may vary slightly with the current implementation, but the project follows a component-based React architecture with reusable UI components and separated content/data.

## Design System

The website uses a consistent SMAPDEV visual language built around:

- Deep ink/navy tones
- SMAPDEV green as the primary accent
- Light neutral surfaces
- Rounded cards and buttons
- Generous spacing
- Responsive typography
- Mobile-first layouts
- Subtle hover and transition effects

Reusable components such as `PageHero`, `SectionHeading`, `Button`, `Navbar`, and `Footer` keep the pages visually consistent.

## Responsive Design

The website is designed for:

- Mobile phones
- Tablets
- Laptops
- Desktop monitors

Tailwind responsive utilities are used throughout the application for navigation, typography, grids, spacing, forms, gallery layouts, research cards, team cards, and calls to action.

## Research Content

Research areas are maintained separately from the page components.

The current research focus is organised into three major areas:

1. **Sustainable Materials**
   - Bio-based Composites
   - Nanotechnology
   - Recycling and Circular Economy

2. **Advanced Processes**
   - Green Manufacturing
   - Sustainable Energy Production
   - Process Optimization and Simulation

3. **Environmental Solutions**
   - Water and Wastewater Treatment
   - Lead Pollution and Remediation
   - Contaminated Site Remediation

Keeping this content in data files makes it easier to update research information without rewriting page components.

## Research Outcomes

Current outcomes represented include:

- Biochar production and sustainable material applications
- Environmental remediation
- Biocomposite synthesis
- Solvated-polystyrene and epoxy-resin research
- Biomass-plastic co-carbonization

## Team

Team information is maintained in the team data file.

Each member can contain:

- ID
- Name
- Role
- Image
- Biography

Team images are stored under the public image assets and referenced from the data layer.

## Gallery

The gallery uses structured data containing:

- Image ID
- Image path
- Title
- Category

The Gallery page provides:

- Category filtering
- Responsive image grid
- Lazy-loaded images
- Click-to-open lightbox
- Accessible focus states
- Empty-state handling

## Contact Form and EmailJS

The Contact page uses **EmailJS** to submit enquiries without requiring a custom backend server.

The form collects:

- Full name
- Email
- Organisation
- Subject
- Message

Recommended Vite environment variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The application should read these through Vite:

```js
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

The EmailJS template variables should match the form fields, for example:

```text
{{name}}
{{email}}
{{organisation}}
{{subject}}
{{message}}
```

The Contact page should provide clear feedback for:

- Loading/submitting
- Successful submission
- Failed submission

After a successful submission, the form can be reset and a success message displayed.

> Never commit private credentials or `.env` files to the repository.

## Installation

Install dependencies:

```bash
npm install
```

## Development

Start the Vite development server:

```bash
npm run dev
```

The local development server normally runs at:

```text
http://localhost:5173
```

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

Create a local `.env` file for EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Ensure `.env` is included in `.gitignore`.

For Vercel, add the same variables under the project's Environment Variables settings.

## React Router and Vercel

The application uses React Router for client-side navigation.

Because this is a single-page application, directly opening or refreshing routes such as:

```text
/about
/research
/research-outcomes
/team
/collaboration
/mentorship
/gallery
/contact
```

must be rewritten to `index.html`.

A Vercel configuration can handle this:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This prevents Vercel from returning `404 NOT_FOUND` when a user refreshes a client-side route.

## Deployment

The project can be deployed to Vercel.

Before deployment, verify:

1. The correct repository is connected.
2. The build command is configured correctly.
3. The Vite output directory is configured correctly.
4. EmailJS environment variables are configured.
5. SPA rewrites are configured.
6. Production routes are tested directly.
7. The production contact form is tested.

## Asset Paths

Public assets should be referenced from the public root.

Example:

```jsx
<img
  src="/images/team/adewale-george-adeniyi.jpg"
  alt="Prof. Adewale George Adeniyi"
/>
```

The same convention applies to logo and gallery assets.

## Accessibility

The interface includes:

- Descriptive image `alt` text
- Semantic HTML
- Form labels
- Keyboard focus states
- Accessible buttons
- `aria-label` attributes where needed
- Status messaging for form submissions
- Responsive text and spacing

## Pre-Production Checklist

### Functional

- [ ] All navigation links work
- [ ] All React Router routes load correctly
- [ ] Refreshing every route works on Vercel
- [ ] Contact form sends successfully
- [ ] Contact form has loading state
- [ ] Contact form has success state
- [ ] Contact form has error state
- [ ] Gallery filtering works
- [ ] Gallery lightbox works
- [ ] Mobile navigation works
- [ ] Logo links to Home

### Responsive

- [ ] Mobile tested
- [ ] Tablet tested
- [ ] Desktop tested
- [ ] Navigation tested at intermediate widths
- [ ] Images maintain correct proportions
- [ ] Forms remain usable on small screens
- [ ] No horizontal overflow

### Deployment

- [ ] Production build succeeds
- [ ] Environment variables configured
- [ ] Vercel SPA rewrite configured
- [ ] Production contact form tested
- [ ] Production images load correctly
- [ ] Browser console checked for errors

## Future Improvements

Potential future improvements include:

- Dedicated research project pages
- Publication database/listing
- Individual team member profiles
- CMS integration
- Advanced gallery filtering
- Search
- Analytics
- SEO metadata and Open Graph images
- Sitemap and robots configuration
- Newsletter/research updates
- Backend/API integration if the contact workflow becomes more advanced

## Maintainer

**SMAPDEV Research Network**
