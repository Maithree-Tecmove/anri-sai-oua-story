/* ──────────────────────────────────────────────────────────────────────────
 * PASS 2 — Cinematic placeholder scenes.
 * Until a real photo is dropped into lib/content.ts, these branded SVG scenes
 * render in place of each image — warm, atmospheric, on-palette, never broken.
 * Each carries a small caption chip describing the intended shot.
 * ────────────────────────────────────────────────────────────────────────── */

export type SceneKind =
  | "product"
  | "hero-bg"
  | "mountains"
  | "maker"
  | "grill"
  | "packaging"
  | "dusk";

const OX = "#6E1E1E";
const OX_DEEP = "#4A1414";
const CREAM = "#F3EBDD";
const CREAM_HI = "#F8F2E8";
const GOLD = "#C9A95E";
const INK = "#2B2320";

function Mountains({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E7D2B4" />
          <stop offset="45%" stopColor="#D8B790" />
          <stop offset="100%" stopColor="#9C7152" />
        </linearGradient>
        <radialGradient id={`${id}-sun`} cx="64%" cy="30%" r="42%">
          <stop offset="0%" stopColor="#FBEACB" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FBEACB" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <circle cx="512" cy="180" r="230" fill={`url(#${id}-sun)`} />
      {/* misty layered ridges */}
      <path d="M0 430 L150 330 L300 420 L470 300 L640 410 L800 340 L800 600 L0 600 Z" fill="#9E7A5E" opacity="0.5" />
      <path d="M0 480 L180 390 L360 470 L520 380 L700 470 L800 420 L800 600 L0 600 Z" fill="#6E4F3A" opacity="0.65" />
      {/* Lanna temple / chedi silhouette on a ridge */}
      <g transform="translate(250 392)" fill="#3A2418" opacity="0.85">
        <rect x="-10" y="-18" width="20" height="24" />
        <path d="M-16 -18 L0 -52 L16 -18 Z" />
        <path d="M-7 -52 L0 -78 L7 -52 Z" />
        <rect x="-1.5" y="-92" width="3" height="16" />
      </g>
      {/* lone figure */}
      <g transform="translate(150 470)" fill="#241612" opacity="0.8">
        <ellipse cx="0" cy="-30" rx="7" ry="8" />
        <path d="M-8 -22 Q0 -26 8 -22 L6 8 L-6 8 Z" />
      </g>
      {/* foreground ridge */}
      <path d="M0 540 L220 470 L420 545 L640 460 L800 530 L800 600 L0 600 Z" fill={OX_DEEP} opacity="0.7" />
      {/* haze */}
      <rect x="0" y="430" width="800" height="80" fill="#E7D2B4" opacity="0.18" />
    </>
  );
}

function Product({ id }: { id: string }) {
  return (
    <>
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="42%" r="70%">
          <stop offset="0%" stopColor={CREAM_HI} />
          <stop offset="70%" stopColor="#EAD9BE" />
          <stop offset="100%" stopColor="#D9BE98" />
        </radialGradient>
        <linearGradient id={`${id}-loaf`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C98A4E" />
          <stop offset="100%" stopColor="#8A5326" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${id}-bg)`} />
      {/* plate */}
      <ellipse cx="400" cy="430" rx="300" ry="70" fill="#CBB69A" opacity="0.6" />
      <ellipse cx="400" cy="415" rx="250" ry="55" fill="#BC9F7E" opacity="0.5" />
      {/* lattice loaf */}
      <g transform="translate(400 350)">
        <ellipse cx="0" cy="40" rx="170" ry="34" fill={OX_DEEP} opacity="0.18" />
        <path d="M-150 30 Q-150 -90 0 -90 Q150 -90 150 30 Z" fill={`url(#${id}-loaf)`} />
        {/* woven lattice strands */}
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={i}
            d={`M${-150 + i * 18} 30 Q${-120 + i * 18} -96 ${-60 + i * 18} -70`}
            stroke="#E0A969"
            strokeWidth="7"
            fill="none"
            opacity="0.85"
            strokeLinecap="round"
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={`h${i}`}
            d={`M-150 ${4 - i * 14} Q0 ${-26 - i * 14} 150 ${4 - i * 14}`}
            stroke="#B5732E"
            strokeWidth="5"
            fill="none"
            opacity="0.5"
          />
        ))}
      </g>
    </>
  );
}

function Maker({ id }: { id: string }) {
  return (
    <>
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="40%" r="75%">
          <stop offset="0%" stopColor="#6B4A33" />
          <stop offset="60%" stopColor="#3D2A1E" />
          <stop offset="100%" stopColor="#1E140E" />
        </radialGradient>
        <radialGradient id={`${id}-glow`} cx="42%" cy="38%" r="35%">
          <stop offset="0%" stopColor="#E9B96B" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E9B96B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${id}-bg)`} />
      <ellipse cx="340" cy="230" rx="280" ry="220" fill={`url(#${id}-glow)`} />
      {/* table line */}
      <rect x="0" y="430" width="800" height="170" fill="#241813" opacity="0.7" />
      {/* bowls */}
      <ellipse cx="250" cy="445" rx="70" ry="20" fill="#120C08" />
      <ellipse cx="250" cy="438" rx="64" ry="16" fill="#5A4030" />
      <ellipse cx="430" cy="455" rx="55" ry="16" fill="#120C08" />
      <ellipse cx="430" cy="449" rx="50" ry="13" fill="#7A5436" />
      {/* coiled sausage */}
      <g transform="translate(560 445)">
        <ellipse cx="0" cy="0" rx="95" ry="30" fill="#7A3B1E" />
        <ellipse cx="0" cy="-6" rx="78" ry="22" fill="#9A4E27" />
        <ellipse cx="0" cy="-10" rx="55" ry="14" fill="#7A3B1E" />
      </g>
    </>
  );
}

function Grill({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241410" />
          <stop offset="100%" stopColor="#0E0807" />
        </linearGradient>
        <radialGradient id={`${id}-ember`} cx="50%" cy="78%" r="55%">
          <stop offset="0%" stopColor="#E8631F" stopOpacity="0.75" />
          <stop offset="60%" stopColor="#8A2B14" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8A2B14" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${id}-bg)`} />
      <ellipse cx="400" cy="470" rx="420" ry="160" fill={`url(#${id}-ember)`} />
      {/* charcoal bed */}
      {Array.from({ length: 22 }).map((_, i) => (
        <circle
          key={i}
          cx={80 + (i * 31) % 660}
          cy={440 + ((i * 53) % 90)}
          r={6 + (i % 4)}
          fill={i % 3 === 0 ? "#E8631F" : "#3A201A"}
          opacity={i % 3 === 0 ? 0.85 : 0.7}
        />
      ))}
      {/* coiled sausage on grill */}
      <g transform="translate(400 400)">
        <ellipse cx="0" cy="0" rx="150" ry="46" fill="#5A2A16" />
        <ellipse cx="0" cy="-8" rx="120" ry="34" fill="#7E3A1C" />
        <ellipse cx="0" cy="-14" rx="86" ry="22" fill="#5A2A16" />
      </g>
      {/* smoke wisps */}
      {[300, 430, 520].map((x, i) => (
        <path
          key={i}
          d={`M${x} 360 q-30 -70 10 -130 q40 -55 -8 -120`}
          stroke={CREAM}
          strokeWidth="10"
          fill="none"
          opacity="0.07"
          strokeLinecap="round"
        />
      ))}
    </>
  );
}

function Packaging({ id }: { id: string }) {
  return (
    <>
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="45%" r="70%">
          <stop offset="0%" stopColor="#3A281C" />
          <stop offset="100%" stopColor="#150D09" />
        </radialGradient>
        <radialGradient id={`${id}-lamp`} cx="50%" cy="48%" r="34%">
          <stop offset="0%" stopColor="#F4CE84" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#F4CE84" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${id}-bg)`} />
      <ellipse cx="400" cy="290" rx="220" ry="240" fill={`url(#${id}-lamp)`} />
      {/* woven bamboo lantern */}
      <g transform="translate(400 300)">
        <path d="M-120 -150 Q0 -185 120 -150 L150 120 Q0 165 -150 120 Z" fill="#6B4423" opacity="0.55" />
        {/* vertical staves */}
        {Array.from({ length: 11 }).map((_, i) => (
          <path
            key={i}
            d={`M${-120 + i * 24} -150 Q${-150 + i * 30} 0 ${-150 + i * 30} 120`}
            stroke={GOLD}
            strokeWidth="3"
            fill="none"
            opacity="0.5"
          />
        ))}
        {/* horizontal weave */}
        {Array.from({ length: 9 }).map((_, i) => (
          <ellipse
            key={`r${i}`}
            cx="0"
            cy={-140 + i * 34}
            rx={120 + Math.sin(i) * 18}
            ry="14"
            stroke="#D8B068"
            strokeWidth="2.5"
            fill="none"
            opacity="0.45"
          />
        ))}
      </g>
    </>
  );
}

function Dusk({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={OX_DEEP} />
          <stop offset="55%" stopColor={OX} />
          <stop offset="100%" stopColor="#2A0E0E" />
        </linearGradient>
        <radialGradient id={`${id}-haze`} cx="50%" cy="62%" r="60%">
          <stop offset="0%" stopColor="#B5733A" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#B5733A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <ellipse cx="400" cy="380" rx="500" ry="220" fill={`url(#${id}-haze)`} />
      {/* ridge silhouettes */}
      <path d="M0 430 L200 360 L400 420 L600 350 L800 410 L800 600 L0 600 Z" fill="#2A0E0E" opacity="0.8" />
      <path d="M0 500 L240 440 L460 510 L680 450 L800 490 L800 600 L0 600 Z" fill="#1C0909" opacity="0.9" />
      {/* falling red leaves */}
      {[
        [120, 120],
        [680, 90],
        [560, 200],
        [240, 230],
        [420, 150],
      ].map(([x, y], i) => (
        <path
          key={i}
          d={`M${x} ${y} q14 -12 26 0 q-6 14 -26 18 q-12 -10 0 -18 Z`}
          fill={GOLD}
          opacity="0.5"
          transform={`rotate(${i * 40} ${x} ${y})`}
        />
      ))}
    </>
  );
}

function HeroBg({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={CREAM_HI} />
          <stop offset="100%" stopColor="#EBDBC4" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${id}-g)`} />
      <circle cx="640" cy="160" r="260" fill="#F6E9D2" opacity="0.7" />
    </>
  );
}

const SCENES: Record<SceneKind, (p: { id: string }) => JSX.Element> = {
  product: Product,
  "hero-bg": HeroBg,
  mountains: Mountains,
  maker: Maker,
  grill: Grill,
  packaging: Packaging,
  dusk: Dusk,
};

export function PlaceholderScene({
  scene,
  caption,
  showCaption = true,
  className = "",
}: {
  scene: SceneKind;
  caption?: string;
  showCaption?: boolean;
  className?: string;
}) {
  const id = `sc-${scene}`;
  const Draw = SCENES[scene];
  const dark = ["maker", "grill", "packaging", "dusk"].includes(scene);
  return (
    <div className={`absolute inset-0 h-full w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        aria-hidden
      >
        <Draw id={id} />
      </svg>
      {showCaption && caption && (
        <span
          className={`absolute bottom-3 left-3 max-w-[80%] rounded-sm px-2 py-1 text-[10px] leading-snug backdrop-blur-sm ${
            dark ? "bg-black/30 text-parchment/80" : "bg-white/45 text-ink/70"
          }`}
        >
          {caption}
        </span>
      )}
    </div>
  );
}
