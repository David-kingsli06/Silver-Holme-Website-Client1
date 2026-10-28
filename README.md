# Silver Holem Heritage

A single-page website for Silver Holem, a 22-acre coffee and pepper estate in Madikeri, Kodagu (Coorg), Karnataka. The site presents the property and its 1924 planter's bungalow, and invites hospitality partners to take part in a planned 12-room boutique stay.

## Features

- Full-screen hero with property highlights
- Responsive navigation with a glass-style mobile menu
- Property and vision sections
- Contact form that sends submissions through Web3Forms
- "Connect on WhatsApp" button, shown when a WhatsApp number is configured
- Scroll animations with AOS

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Web3Forms](https://web3forms.com/) for form delivery
- Fonts: Cormorant Garamond and Inter, loaded with `next/font/google`

## Getting started

### Prerequisites

- Node.js 20.9 or later
- npm (or pnpm, yarn, or bun)

### Installation

```bash
git clone https://github.com/David-kingsli06/Silver-Holme-Website-Client1.git
cd Silver-Holme-Website-Client1
npm install
```

### Environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Access key for the contact form |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code and no `+`, spaces, or dashes, for example `919876543210` |

Never commit `.env` to Git. On Vercel, add these variables under **Settings → Environment Variables**.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/            Routes, layout, and global styles
components/     Page sections and UI components (Nav, MobileNav, Hero, Home, WhatsAppButton)
constant/       Shared data such as navigation links
public/images/  Photographs used on the site
```

## Deployment

The site is deployed on [Vercel](https://vercel.com/). Every push to the `main` branch triggers a new production build.

## Credits

Photographs are credited in [CREDITS.md](./CREDITS.md).

## License

All rights reserved. The property content, text, and photographs belong to the Silver Holem family unless stated otherwise.