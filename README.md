# 𝕁𝕦𝕟𝕒𝕪𝕖𝕥 | 𝟯𝗗 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗣𝗼𝗿𝘁𝗳𝗼𝗹𝗶𝗼

<div align="center">
  <img src="https://github.com/adrianhajdin/project_3D_developer_portfolio/assets/151519281/4722160a-8e61-403f-a905-728feae1f7e6" alt="Project Banner" width="100%" />
  <br/>
  <br/>
  
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />

  <h3 align="center">✦ Ａｎ Ｉｍｍｅｒｓｉｖｅ ３Ｄ Ｗｅｂ Ｅｘｐｅｒｉｅｎｃｅ ✦</h3>
</div>

 𝗜𝗺𝗺𝗲𝗿𝘀𝗶𝘃𝗲 𝟯𝗗 𝗘𝗹𝗲𝗺𝗲𝗻𝘁𝘀
- **Interactive Hero**: Features a 3D desktop model that users can rotate and explore.
- **3D Stars Background**: A particle system that simulates depth and movement as you scroll.
- **Floating Shapes**: Geometric 3D objects in the "Works" section.
- **Physically Based Rendering**: Realistic lighting and shadows powered by **Rᴇᴀᴄᴛ Tʜʀᴇᴇ Fɪʙᴇʀ**.

 𝒜𝒹𝓋𝒶𝓃𝒸𝑒𝒹 𝒯𝓎𝓅𝑜𝑔𝓇𝒶𝓅𝒽𝓎 𝒮𝓎𝓈𝓉𝑒𝓂
We have implemented a custom multi-font system to create a distinct visual hierarchy:
- **Orbitron**: Used for tech keywords (e.g., "React", "Node.js") to give them a futuristic, glowing "token" look.
- **Oswald**: Strong, industrial sans-serif for main section headings.
- **Space Mono**: Monospace font for data-heavy elements like dates, skills, and tags, creating a "technical dashboard" feel.
- **Playfair Display**: Elegant italic serif used for subtext to provide a sophisticated contrast.
- **Sacramento**: A handwriting script used for the personal signature.

### ✨ 𝕀𝕟𝕥𝕖𝕣𝕒𝕔𝕥𝕚𝕧𝕖 𝕌𝕀 ℂ𝕠𝕞𝕡𝕠𝕟𝕖𝕟𝕥𝕤
- **Experience Timeline**: Vertical timeline cards with a special "Current" badge that pulses for your present role.
- **Project Cards**: Tilt-enabled cards that respond to mouse movement, with consistent iconography (`FaLaptopCode`).
- **Testimonials**: Feedback cards with integrated dates and author details.
- **Contact Form**: Functional 3D earth model accompanying a working email form.

## 🛠️ 𝚃𝚎𝚌𝚑 𝚂𝚝𝚊𝚌𝚔

- **Core**: [React 18](https://reactjs.org/), [Vite](https://vitejs.dev/)
- **3D & Graphics**: 
  - [Three.js](https://threejs.org/)
  - [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
  - [@react-three/drei](https://github.com/pmndrs/drei)
  - [Maath](https://github.com/pmndrs/maath) (Math tools for UI)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Utilities**: 
  - [EmailJS](https://www.emailjs.com/) (Form handling)
  - [React Vertical Timeline](https://github.com/stephane-monnot/react-vertical-timeline)
  - [React Tilt](https://github.com/jonathandion/react-tilt)

## 📥 𝘐𝘯𝘴𝘵𝘢𝘭𝘭𝘢𝘵𝘪𝘰𝘯 & 𝘋𝘦𝘱𝘦𝘯𝘥𝘦𝘯𝘤𝘪𝘦𝘴

This project requires **Node.js** (v16 or higher) to manage dependencies.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/JunayetIslam1/DeveloperPortfolio.git](https://github.com/JunayetIslam1/DeveloperPortfolio.git)
    cd DeveloperPortfolio
    ```

2.  **Install all dependencies (Precise Method)**
    The project uses `npm` to manage packages. Run the following command to strictly install all required modules listed in `package.json`:
    ```bash
    npm install
    ```
    This command reads the `package.json` file and installs the exact versions of the libraries needed.

    <details>
    <summary>Click to view all installed modules</summary>

    **Core Dependencies (`dependencies`):**
    - `react`, `react-dom`: Core UI library.
    - `three`, `@react-three/fiber`, `@react-three/drei`: 3D rendering engine and helpers.
    - `framer-motion`: For complex 2D and 3D animations.
    - `maath`: Mathematics library for 3D interactions.
    - `react-vertical-timeline-component`: For the Experience timeline.
    - `react-tilt`: For interactive card effects.
    - `react-icons`: Icon pack.
    - `@emailjs/browser`: For the contact form functionality.

    **Development Dependencies (`devDependencies`):**
    - `vite`, `@vitejs/plugin-react`: Fast build tool and development server.
    - `tailwindcss`, `postcss`, `autoprefixer`: CSS styling framework.

    </details>

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory to configure the contact form (EmailJS).
    ```env
    VITE_APP_EMAILJS_SERVICE_ID=your_service_id
    VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    *Note: You can get these keys by signing up locally at [EmailJS](https://www.emailjs.com/).*

4.  **Run the development server**
    Start the local server to view the website:
    ```bash
    npm run dev
    ```
    The application will launch at `http://localhost:5173`.

## 📂 𝕻𝖗𝖔𝖏𝖊𝖈𝖙 𝕾𝖙𝖗𝖚𝖈𝖙𝖚𝖗𝖊
