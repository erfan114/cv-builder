# CV Builder

**CV Builder** is a responsive web application for creating and managing digital CVs/resumes built with [Next.js 15](https://nextjs.org), [React 19](https://react.dev), and [Tailwind CSS](https://tailwindcss.com). It provides a drag-and-drop editor, modular sections, and easy deployment to Vercel or GitHub Pages.

---

## 📦 Project Structure

```text
src/
├─ app/            # Next.js app router pages and layouts
│   ├─ editor/     # CV editor page
│   ├─ layout.tsx  # Root layout
│   ├─ not-found.tsx
│   └─ page.tsx    # Home page
├─ modules/
│   ├─ core/       # Core logic and utilities
│   ├─ editor/     # Editor-related components
│   ├─ home/       # Home page modules
│   └─ ui          # Reusable UI components (antd, lucide, etc.)
└─ public/         # Static assets
```

### Key Modules

| Module   | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| `core`   | Core business logic, state management, and helpers                            |
| `editor` | Drag-and-drop CV editor using `@dnd-kit/core` and `@xyflow/react`             |
| `home`   | Prebuilt home section templates                                               |
| `ui`     | Generic UI components built with `antd`, `lucide-react`, and `tailwind-merge` |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 20)
- [pnpm](https://pnpm.io/) (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/erfan114/cv-builder.git
cd cv-builder

# Install dependencies
pnpm install
# or: npm install
# or: yarn
```

### Development

```bash
pnpm dev
# or: npm run dev
# or: yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Build

```bash
pnpm build
# or: npm run build
# or: yarn build
```

### Start Production

```bash
pnpm start
# or: npm run start
# or: yarn start
```

---

## 📡 Available Scripts

| Script   | Description                                           |
| -------- | ----------------------------------------------------- |
| `dev`    | Run development server with Turbopack                 |
| `build`  | Build the Next.js app for production                  |
| `start`  | Start the production server                           |
| `lint`   | Lint the codebase with ESLint                         |
| `deploy` | Deploy to GitHub Pages (`gh-pages -d out --nojekyll`) |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, antd component library
- **UI Icons**: lucide-react
- **Drag-and-Drop**: `@dnd-kit/core`, `@xyflow/react`
- **Utilities**: clsx, tailwind-merge
- **Deployment**: GitHub Pages (via `gh-pages`)

---

## 📦 Deployment

### Vercel (Recommended)

Connect the repository to Vercel and each push will auto-deploy.

### GitHub Pages

```bash
pnpm deploy
# or: npm run deploy
# or: yarn deploy
```

This builds the app and pushes the `out` directory to the `gh-pages` branch.

---

## 🧩 Project Highlights

- Fully typed with TypeScript
- Responsive design using Tailwind CSS
- Modular architecture under `src/modules`
- Easy to extend with new sections/components
- Optimized for performance (Next.js image, font optimization)
- Ready for CI/CD (GitHub Actions compatible)

---

## 🙏 Acknowledgments

- Built with the [Next.js](https://nextjs.org) framework.
- UI components from [ant Design](https://ant.design) and [lucide](https://lucide.dev).
- Drag-and-drop powered by `@dnd-kit` and `@xyflow`.
- Deploy scripts inspired by the [Vercel + GitHub Pages workflow](https://vercel.com/docs/connections/github).
