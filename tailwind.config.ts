import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand palette (applied in Pass 2 — refined from the brief +
        //    UI UX Pro Max "Classic Elegant" elegant-editorial guidance) ──
        oxblood: {
          DEFAULT: "#6E1E1E",
          600: "#7A2424",
          500: "#8A2B2B",
          900: "#4A1414",
        },
        parchment: {
          DEFAULT: "#F3EBDD",
          50: "#F8F2E8",
          200: "#E9DEC9",
        },
        ink: {
          DEFAULT: "#2B2320", // charcoal-brown text
          soft: "#5A4F47",
        },
        gold: {
          DEFAULT: "#B08A3E",
          soft: "#C9A95E", // for accents on DARK backgrounds (~7:1 on oxblood)
          deep: "#6E5316", // for eyebrow text on LIGHT parchment (~6:1, WCAG AA)
        },
        // ── Pass 1 wireframe grayscale ──
        wire: {
          bg: "#FFFFFF",
          panel: "#F4F4F5",
          box: "#E4E4E7",
          boxalt: "#D4D4D8",
          line: "#A1A1AA",
          text: "#3F3F46",
          muted: "#71717A",
          ink: "#18181B",
        },
      },
      fontFamily: {
        // Latin display + Thai display + body — see app/layout.tsx for next/font wiring
        display: ["var(--font-display)", "Georgia", "serif"],
        thai: ["var(--font-thai-display)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid display sizes via clamp() so large serif headlines scale
        // smoothly from 375px → desktop without overflow.
        "fluid-sm": "clamp(0.95rem, 0.9rem + 0.25vw, 1.05rem)",
        "fluid-base": "clamp(1rem, 0.95rem + 0.3vw, 1.15rem)",
        "fluid-lg": "clamp(1.25rem, 1.1rem + 0.7vw, 1.6rem)",
        "fluid-xl": "clamp(1.6rem, 1.3rem + 1.4vw, 2.4rem)",
        "fluid-2xl": "clamp(2.1rem, 1.5rem + 2.8vw, 3.6rem)",
        "fluid-display": "clamp(2.75rem, 1.6rem + 5.2vw, 6.5rem)",
      },
      maxWidth: {
        prose: "65ch",
        shell: "1280px",
      },
      zIndex: {
        nav: "50",
        overlay: "40",
        raised: "20",
        base: "10",
      },
      transitionTimingFunction: {
        // ease-out for entering elements (UX guideline)
        reveal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
