## 2024-05-18 - HeroSection animation bottleneck
**Learning:** `useTypingEffect` inside `HeroSection` triggered 65ms interval re-renders for the entire section (which contained heavy `framer-motion` children).
**Action:** Extract granular state hooks that trigger frequent re-renders into their own small wrapper components to isolate the render blast radius.
