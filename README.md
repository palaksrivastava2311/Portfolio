# 3D Interactive Developer Portfolio

An immersive, interactive 3D developer portfolio built with React, Three.js / React Three Fiber, and Tailwind CSS. The application features an interactive floating island environment with dynamic camera panning, audio controls, responsive UI modals, and custom-rendered 3D models.

---

## Live Demo

- **Live URL:** https://portfolio-qmaa.onrender.com

---

## Features

- **Interactive 3D Scene:** Explore a 3D island with real-time lighting, smooth drag-to-rotate navigation, and dynamic camera angles.
- **Custom 3D Models:** Loaded and rendered via GLTF/GLB models (Island, Sky, Plane, Bird, Fox).
- **Interactive Stage Popups (HomeInfo):** Stage-based popup cards dynamically trigger based on island rotation angle to navigate sections.
- **Background Audio:** Integrated ambient music player (sakura.mp3) with toggle control.
- **Project Showcase:** Highlights full-stack projects (Wanderlust, Nova, Weather App, and 3D Portfolio) with live preview links.
- **Contact & Alerts:** Custom contact form with interactive feedback alerts via custom hooks (useAlert).

---

## Tech Stack

- **Frontend:** React.js, Vite
- **3D Graphics & Animations:** Three.js, @react-three/fiber, @react-three/drei
- **Styling:** Tailwind CSS, Custom CSS
- **Deployment:** Render

---

## Project Structure
```text
src/
├── assets/
│   ├── 3d/              # 3D GLTF/GLB models
│   ├── icons/           # Tech stack & navigation icons
│   ├── images/          # Static imagery & previews
│   └── sakura.mp3       # Background audio track
├── components/
│   ├── Alert.jsx        # Notification alert popups
│   ├── CTA.jsx          # Call-to-action sections
│   ├── Footer.jsx       # Socials and copyright footer
│   ├── HomeInfo.jsx     # Dynamic info cards triggered by 3D rotation
│   ├── Loader.jsx       # 3D canvas fallback loader
│   └── Navbar.jsx       # Navigation bar
├── constants/
│   └── index.js         # Skills, experiences, and project metadata
├── hooks/
│   └── useAlert.js      # Custom alert state management hook
├── models/
│   ├── Bird.jsx         # Animated bird 3D model
│   ├── Fox.jsx          # Animated fox 3D model
│   ├── Island.jsx       # Main floating island model & rotation logic
│   ├── Plane.jsx        # Moving plane model
│   └── Sky.jsx          # Dynamic sky backdrop
├── pages/
│   ├── About.jsx        # Skills and experience timeline
│   ├── Contact.jsx      # Interactive contact form
│   ├── Home.jsx         # Main 3D Canvas view
│   └── Projects.jsx     # Featured projects directory
├── App.jsx              # Main router & audio integration
└── main.jsx             # React DOM entry point
```
---

## 🚀 Getting Started

### Prerequisites

- Node.js (`v18.0.0` or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [https://github.com/palaksrivastava2311/Portfolio.git](https://github.com/palaksrivastava2311/Portfolio.git)
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the local development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

---

## License

This project is licensed under the MIT License.
