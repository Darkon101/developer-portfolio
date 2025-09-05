# Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with dark/light mode toggle and showcases projects, skills, and contact information.

## Live version

[https://samin-taseen.vercel.app/](https://samin-taseen.vercel.app/)

## 🌟 Features

- **Responsive Design**: Mobile-first approach with clean, modern UI
- **Dark/Light Mode**: Toggle between themes with system preference support
- **Interactive Sections**:
  - Hero section with profile image
  - Animated tech stack carousel
  - Project showcase with live preview and code links
  - About me section
  - Contact page with social links
- **Performance Optimized**: Built with Next.js 14 and optimized images
- **Accessibility**: Semantic HTML and ARIA labels throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React, React Icons
- **Fonts**: Geist Sans & Geist Mono
- **Theme**: next-themes for dark/light mode

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Darkon101/developer-portfolio.git
cd dev-portfolio-next
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 14 app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page (placeholder)
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components
│   │   ├── Footer.tsx     # Site footer
│   │   └── Navbar.tsx     # Navigation bar
│   ├── sections/          # Page sections
│   │   ├── AboutMe.tsx    # About section
│   │   ├── ContactContent.tsx # Contact information
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Projects.tsx   # Projects showcase
│   │   └── TechStack.tsx  # Animated tech stack
│   ├── theme/             # Theme components
│   │   ├── ModeToggle.tsx # Theme toggle button
│   │   └── theme-provider.tsx # Theme context provider
│   └── ui/                # Reusable UI components
├── data/
│   └── projects.ts        # Project data
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Customization

### Adding Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
export const projects: Project[] = [
  {
    title: "Your Project",
    description: "Project description",
    image: "/projects/your-image.png",
    techStack: ["React", "TypeScript", "Next.js"],
    liveLink: "https://your-live-site.com",
    codeLink: "https://github.com/username/repo",
  },
]
```

### Updating Personal Information

- **Contact Details**: Edit `src/components/sections/ContactContent.tsx`
- **About Section**: Modify `src/components/sections/AboutMe.tsx`
- **Footer Links**: Update `src/components/layout/Footer.tsx`
- **Profile Image**: Replace `public/profile.jpg`

### Tech Stack

Update the tech stack in `src/components/sections/TechStack.tsx` by modifying the `tech` array.

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Components**: Use Tailwind classes for styling
- **Animations**: Custom animations defined in globals.css

## 📱 Pages

- **Home** (`/`): Hero, tech stack, and projects overview
- **About** (`/about`): Detailed about section
- **Contact** (`/contact`): Contact information and social links
- **Projects** (`/projects`): Placeholder for detailed projects page

## 🚀 Deployment

### Deploy and build the application:
```bash
npm run build
```

## 👤 Author

**Samin Taseen**
- Website: https://samin-taseen.vercel.app/
- LinkedIn: [@samin-taseen](https://linkedin.com/in/samin-taseen)
- GitHub: [@Darkon101](https://github.com/Darkon101)

## 📝 Notes

- Profile image should be placed in `public/profile.jpg`
- Project images should be placed in `public/projects/`
- The portfolio is optimized for modern browsers
- Responsive design works on all device sizes
