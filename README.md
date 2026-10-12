# Kirusigan Thevarasa — Portfolio

A modern personal portfolio built with **React + Vite + Tailwind CSS**.

It showcases:
- Professional summary and contact links
- Selected projects (SmartJob, Serani AI, NextGen, Inventory Management System)
- Technical skills grouped by domain
- Education and certifications
- Resume download
- Contact form integration (Formspree)

---

## Tech stack

- **Frontend:** React 18, Vite 5
- **Styling:** Tailwind CSS 3, custom animations, glassmorphism UI
- **Icons:** lucide-react
- **Build tooling:** PostCSS, Autoprefixer

---

## Run locally

```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

---

## Build for production

```bash
npm run build
npm run preview
```

- Production output is generated in `dist/`.
- You can deploy `dist/` to platforms like **Vercel** or **Netlify**.

---

## Customize portfolio content

Main content is managed in:
- `src/App.jsx`

Update these sections directly in `App.jsx`:
- `PROJECTS`
- `SKILL_GROUPS`
- `EDUCATION`
- `CERTIFICATIONS`
- `CONTACT`

Static assets:
- `src/assets/profile.jpg`
- `src/assets/serani.jpg`
- `src/assets/nextgen.jpg`
- `public/Kirusigan_Thevarasa_CV.pdf`

---

## Contact form setup (Formspree)

To receive messages directly to your email:

1. Create a free form at [Formspree](https://formspree.io/).
2. Copy your endpoint (example: `https://formspree.io/f/abcdwxyz`).
3. In `src/App.jsx`, replace:
   - `FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"`
4. Restart the dev server and test the form.

---

## Available scripts

```bash
npm run dev      # start development server
npm run build    # create production build
npm run preview  # preview production build
```

---

## Project structure

```text
.
├── public/
│   └── Kirusigan_Thevarasa_CV.pdf
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
