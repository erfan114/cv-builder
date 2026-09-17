# CV Builder

**CV Builder** is a responsive web application for creating and managing digital CVs/resumes built with [Next.js 15](https://nextjs.org), [React 19](https://react.dev), and [Tailwind CSS](https://tailwindcss.com). It provides a drag-and-drop editor, modular sections, and easy deployment to Vercel or GitHub Pages.

The application is designed with a Persian (Farsi) language interface, as indicated by the RTL (right-to-left) layout and localized UI components.

---

## 📦 Project Structure

```text
src/
├─ app/            # Next.js app router pages and layouts
│   ├─ editor/     # CV editor page
│   ├─ layout.tsx  # Root layout with font providers and metadata
│   ├─ not-found.tsx
│   ├─ page.tsx    # Home page
│   └─ templates/  # Prebuilt section templates (Under Construction)
├─ modules/
│   ├─ core/       # Core logic and utilities
│   │   ├─ components/    # AppLoading, AppNavbar
│   │   ├─ constants/     # Font definitions (geist, vazirmatn)
│   │   └─ helpers/       # Metadata, page utilities, GitHub helpers
│   ├─ editor/     # Editor-related components and hooks
│   │   ├─ components/    # Toolbar, DragAndDrop, EditArea, sidebars
│   │   └─ hooks/         # Editor-specific hooks
│   ├─ home/       # Home page modules and sections
│   │   ├─ components/    # Hero, Features, FeatureCard
│   └─ ui          # Reusable UI components (antd, lucide, etc.)
└─ public/         # Static assets
```

### Key Modules

| Module   | Description                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------- |
| `core`   | Core business logic, state management, helpers, and root components (AppNavbar, AppLoading)    |
| `editor` | Drag-and-drop CV editor using `@dnd-kit/core` and `@xyflow/react` with sidebar property editor |
| `home`   | Prebuilt home section templates (Hero, Features, FeatureCard)                                  |
| `ui`     | Generic UI components built with `antd`, `lucide-react`, and `tailwind-merge`                  |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 20)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

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

| Script         | Description                                           |
| -------------- | ----------------------------------------------------- |
| `dev`          | Run development server with Turbopack                 |
| `build`        | Build the Next.js app for production                  |
| `start`        | Start the production server                           |
| `lint`         | Lint the codebase with ESLint                         |
| `format`       | Format code with Prettier                             |
| `format:check` | Check formatting with Prettier                        |
| `deploy`       | Deploy to GitHub Pages (`gh-pages -d out --nojekyll`) |

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

**Note**: The project is configured with `homepage: "https://erfan114.github.io/cv-builder"` in package.json for GitHub Pages support.

---

## 🧩 Project Highlights

- ✅ Fully typed with TypeScript
- ✅ Responsive design using Tailwind CSS
- ✅ Modular architecture under `src/modules` for better maintainability
- ✅ Easy to extend with new sections/components
- ✅ RTL (Right-to-Left) support for Persian/Arabic languages
- ✅ Performance optimized (Next.js image optimization, font optimization)
- ✅ Ready for CI/CD (GitHub Actions compatible)
- ✅ Drag-and-drop CV building with `@xyflow/react`
- ✅ Prebuilt home section templates (Hero, Features)

---

## 👤 Author

**Erfan** - [GitHub](https://github.com/erfan114)

---

## 🙏 Acknowledgments

- Built with the [Next.js](https://nextjs.org) framework.
- UI components from [ant Design](https://ant.design) and [lucide](https://lucide.dev).
- Drag-and-drop powered by `@dnd-kit` and `@xyflow`.
- Fonts: Geist Mono, Geist Sans, Vazirmatn (Persian font).
- Deploy scripts inspired by the [Vercel + GitHub Pages workflow](https://vercel.com/docs/connections/github).
