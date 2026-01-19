# ⚡ Seb's Digital Workshop (Portfolio V3)

This is the third iteration of my personal portfolio. It's a dynamic, gamified application built to house my projects, thoughts, and experiments. It combines retro vibes with modern web performance.

**Live Demo:** [builtbyseb.dev](https://builtbyseb.dev)

---

## 🛠️ The Tech Stack

Built on modern web tools.

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router + Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Content:** MDX (Markdown + JSX) with `next-mdx-remote`
- **State Management:** React Context API (for the Game/Inventory system)
- **Highlighting:** `rehype-pretty-code`

---

## 🌟 Key Features

### 🎮 Gamified Inventory System
This isn't just a website; it's an RPG.
- **Global State:** Uses `GameContext` to track collected items across different pages.
- **Loot:** Hidden chests and items scattered throughout the site (404 page, projects, etc.).
- **Persistence:** Inventory saves to local storage, so you don't lose your loot on refresh.

### 🍱 The "Bento" Grid
A responsive, masonry-style grid system that handles different aspect ratios (2x2, 2x1, 1x1). It allows me to highlight "Flagship" projects while keeping the layout clean on mobile and desktop.

### 📝 Custom MDX Pipeline
I built a custom content pipeline that reads local `.mdx` files. This allows me to write project case studies and blog posts in Markdown while injecting custom React components (like the Item cards or Video players) directly into the content.

### 🌳 The Skill Tree
A categorized breakdown of my technical abilities, visualized as a clean dropdown system. It tracks my progression from "Level 1" to "Max Level."

---

## 📂 Project Structure

Here is a look under the hood at how the application is organized:

```bash
.
├── app/                   # Next.js App Router
│   ├── articles/          # Blog post routes
│   ├── inventory/         # The Inventory UI page
│   ├── projects/          # Project pages
│   ├── quest-log/         # Blog feed
│   ├── not-found.tsx      # Custom 404 (with hidden loot!)
│   └── page.tsx           # Home page (Hero, Bento Grid, Skills)
│
├── components/            # React Components
│   ├── animations/        # Framer Motion wrappers (Matrix Rain, FadeUp)
│   ├── game/              # Game logic UI (Chests, Loot notifications)
│   ├── mdx/               # Custom components used inside Markdown
│   └── ...                # Navbar, Footer, Project Cards, etc.
│
├── content/               # The Database (Flat Files)
│   ├── articles/          # Blog posts (.mdx)
│   └── projects/          # Project case studies (.mdx)
│
├── context/               # Global State
│   └── GameContext.tsx    # Handles inventory logic & saves
│
├── lib/                   # Utilities & Data Handlers
│   ├── articles.ts        # Article sorting & fetching logic
│   ├── inventory.ts       # Item definitions & stats
│   ├── projects.ts        # Project metadata parsing
│   ├── skills-list.ts     # Skill tree data structure
│   ├── story.ts           # Work history & education timeline
│   ├── video-games.ts     # Game carousel data
│   └── youtube.ts         # YouTube API & video lists
│
└── public/                # Static Assets
    ├── images/            # Optimized .webp images
    └── videos/            # Hero loops and demos
