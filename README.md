# Kirusigan Thevarasa — Portfolio

A personal portfolio site built with React, Vite, and Tailwind CSS, styled after
the layout/design of https://piratheepan.vercel.app/ (theme toggle, gradient hero,
project cards, skill cloud, contact form).

## Run it in VS Code

1. Open this folder in VS Code (`File → Open Folder…`).
2. Open a terminal in VS Code (`` Ctrl+` ``) and install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the URL it prints (usually **http://localhost:5173**) in your browser.
   The page hot-reloads as you edit files.

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files land in `dist/`, ready to deploy (e.g. to Vercel or Netlify).

## Editing your content

Everything — name, bio, projects, skills, education, certifications, and
contact details — lives in plain data arrays near the top of `src/App.jsx`
(`PROJECTS`, `SKILL_GROUPS`, `EDUCATION`, `CERTIFICATIONS`, `CONTACT`). Edit
those and the page updates automatically.

Images and your resume PDF live in `src/assets/` and `public/`:
- `src/assets/profile.jpg` — hero photo
- `src/assets/serani.jpg`, `src/assets/nextgen.jpg` — project screenshots
- `public/Kirusigan_Thevarasa_CV.pdf` — the file the "Resume" button downloads

## Making the contact form actually send email

Browsers can't send email directly from JavaScript for security reasons —
that's why a `mailto:` link has to hand off to your mail app (the "opens in
Chrome/Mail" prompt you don't want). To send the message straight from the
page with no popup, this form posts to **Formspree**, a free service that
forwards submissions to your inbox:

1. Go to https://formspree.io and sign up free (no credit card).
2. Create a new form and set the destination to `tkirusigan@gmail.com`.
   Confirm the verification email Formspree sends you.
3. Copy the form's endpoint — it looks like `https://formspree.io/f/abcdwxyz`.
4. Open `src/App.jsx`, find the `FORM_ENDPOINT` constant near the top, and
   paste your real endpoint in place of `https://formspree.io/f/YOUR_FORM_ID`.
5. Save, restart `npm run dev`, and test the form — submissions land directly
   in your inbox, no app switch.

The free Formspree plan covers 50 submissions/month, plenty for a personal
portfolio.

## Theme toggle

The Light / Dark / System control in the nav bar switches Tailwind's `dark:`
classes and remembers your choice in `localStorage`.

## Project structure

```
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── Kirusigan_Thevarasa_CV.pdf
└── src/
    ├── App.jsx          # the whole page
    ├── index.css        # Tailwind + small global styles
    ├── main.jsx         # React entry point
    └── assets/          # photo + project images
```
