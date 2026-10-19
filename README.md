# Vishnu Varthan VG | Engineering Portfolio

A personal engineering portfolio website for **Vishnu Varthan VG**, an Electrical and Electronics Engineering (EEE) student at **Chennai Institute of Technology (CIT)**.

Built with **React**, **Vite**, **Tailwind CSS**, and **Motion for React** (`motion/react`). Featuring a **Black & Neon Green Liquid UI** with dark obsidian backdrops, ambient neon green/emerald glowing meshes, authentic engineering disclosures, and a **scroll-controlled background video animation** integrated into the Home block.

---

## 🌟 Key Features

1. **Scroll-Driven Background Video in Home Block**:
   - Uses local video `public/videos/scroll-animation.mp4` running seamlessly in the background of the Home section.
   - **User Scroll-Controlled**: The video does NOT autoplay or loop independently; it scrubs forward or in reverse purely based on user scrolling.
   - **Bi-directional Precision Scrubbing**:
     - At top of Home: Starts at the first frame (`00:00`).
     - Scrolling down: Smoothly advances the video timeline via an optimized `requestAnimationFrame` loop.
     - Stopping scroll: Freezes the video at the exact corresponding frame.
     - Scrolling upward: Smoothly reverses the playback back to earlier frames.
     - At end of Home: Reaches the final frame before transitioning into About.
   - **Cinematic Text Overlays & Hardware Cards**:
     - **Stage 1 (0% – 32%)**: Welcome headline, CIT EEE credentials, live telemetry pill, and quick CTAs.
     - **Stage 2 (32% – 68%)**: Hardware & systems statement with floating 3D orbital cards (ESP32, Industrial Switchgear, State-Space Control, VISION X Hackathon).
     - **Stage 3 (68% – 100%)**: Authentic engineering disclosures and seamless transition button.
   - **Accessibility & Contrast**: Dark liquid vignette overlay ensuring accessible contrast for text, and full `prefers-reduced-motion` compliance.

2. **Black & Neon Green Liquid UI**:
   - Translucent navigation bar with `backdrop-filter: blur(24px)`, active section indicator, and mobile drawer.
   - Obsidian dark canvas (`#030503`) with neon green (`#00ff88`) reflective borders, glow effects, and layered shadows.
   - Ambient neon green and emerald animated gradient mesh background.
   - Spring-smoothed top scroll progress indicator in neon green.

3. **Rigorous & Truthful Project Showcase**:
   - **ESP32-Based Smart Safe Locker with OLED & Timed Security Lockout**: Potentiometer digit selector, I2C SSD1306 OLED, dual LED indicators, buzzer alarm, and 30s lockout after 3 wrong attempts.
   - **Flame Rover**: Autonomous mobile fire detection with IR sensor array and L298N H-bridge driver.
   - **PID-Based DC Motor Speed Control**: Closed-loop motor speed regulation using Proportional-Integral-Derivative (PID) algorithm, Arduino Uno, L298N H-Bridge, and Hall effect sensor RPM pulse feedback.
   - **ML-Driven Adaptive Noise Cancellation**: Identifies completed LMS/NLMS numerical simulations vs proposed DSP microcontroller deployment.
   - **VisionShield**: Realistically scoped optical hazard boundary surveillance prototype.
   - **Smart Industrial Process Automation using State Feedback Control**: Academic review and MATLAB pole placement ($K$ gain matrix) simulation study.
   - Full deep-dive modal with hardware BOM, pinouts, and editable wiring placeholders.

4. **Interactive Industrial Control Panel Inspector (Internship)**:
   - Dedicated showcase of practical immersion at **Auto Print Machinery, Coimbatore**.
   - Interactive DIN-rail switchgear visualizer: Click MCBs, Magnetic Contactors, Thermal Overload Relays (OLRs), VFDs, SMPS, and terminal blocks to inspect specifications and safety practices.

5. **Hackathon Podiums & Confetti**:
   - 2nd place at **VISION X Hackathon**
   - Runner-up at **Y’HACK**
   - Interactive celebratory confetti burst on trophy clicks (`canvas-confetti`).

6. **Practical Learning Log / Lab Journal**:
   - Debugging case studies with real problem statements, root cause analysis (RCA), and code/schematic solutions (e.g. ESP32 ADC non-linearity, contactor forward-reverse electrical interlocking, I2C bus hang suppression with flyback snubber diode).

7. **Contact Terminal & Configurable Placeholders**:
   - Working interactive contact form with client-side feedback.
   - One-click "Copy Email" tool.
   - Configurable placeholders for LinkedIn, GitHub, and Resume PDF download.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory ready for deployment to Vercel, Netlify, or GitHub Pages.

---

## 🎬 How to Test the Scroll-Driven Background Video

1. Open **[http://localhost:5173](http://localhost:5173)** in your browser.
2. You will be at the Home section. Notice the background video begins paused at frame 0.
3. **Scroll down slowly**:
   - Notice the background video scrubs smoothly through the MP4 animation.
   - The top telemetry bar shows `SCROLL SYNC: [X]% • [TIME]s`.
   - The bottom timeline bar tracks the playback with a neon green glow.
   - The Home section content smoothly transitions from the Hero greeting to the orbital hardware cards, and then to the engineering integrity statement.
4. **Pause scrolling**:
   - The video immediately freezes at that frame. It does not play independently or loop.
5. **Scroll upward**:
   - The video seamlessly scrubs in reverse back toward frame 0.

---

## 🛠️ Personalization Guide: What to Edit

All personal details, project descriptions, links, and hardware specifications are centralized in:

📂 `src/data/portfolioData.js`

### 1. Personal & Contact Links
In `src/data/portfolioData.js`:
- `personalInfo.email`: Replace with your preferred contact email.
- `personalInfo.phone`: Update with your contact number.
- `personalInfo.socials.github`: Add your actual GitHub profile URL.
- `personalInfo.socials.linkedin`: Add your actual LinkedIn profile URL.

### 2. Resume / CV
- Place your PDF file at `public/resume.pdf`. The "Download CV" buttons in the navigation and contact section will automatically download this file.

### 3. Background Video
- The scroll video is located at `public/videos/scroll-animation.mp4`.

---

## 🧱 Architecture & Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Liquid Glassmorphism (`backdrop-filter`) + Black & Neon Green Palette
- **Animation**: Motion for React (`motion/react`) with spring physics and RAF scroll-driven background video scrubbing
- **Icons**: Lucide React + custom inline SVG icons
- **Micro-Interactions**: Canvas Confetti (`canvas-confetti`)
- **Accessibility**: High-contrast neon green on obsidian black, semantic HTML5, and full `prefers-reduced-motion` compliance.

---

## 👨‍💻 Author

**Vishnu Varthan VG**  
Electrical & Electronics Engineering (EEE)  
Chennai Institute of Technology (CIT), Chennai, Tamil Nadu, India.
