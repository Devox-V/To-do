# Luna

A personal voice assistant with an animated orb interface.

Luna is built on the [APEX-UI](https://github.com/RubenM1990/APEX-UI) orb + reasoning-graph
front-end (MIT — see [LICENSE](./LICENSE) and [CREDITS](./CREDITS.md)) and rebuilt into a
working assistant: hold the orb to talk, and the capability graph around it maps what Luna
can actually do.

> Built with Next.js 15 + React 19. Runtime deps: `lucide-react` (icons) and
> `three` / `@react-three/fiber` / `@react-three/postprocessing` (the particle core) —
> all MIT-licensed.

## Run it

```bash
npm install
npm run dev
# open http://localhost:3000
```

Then `npm run build` for a production build.

## What's inside

| Piece | What it does |
|-------|--------------|
| `LunaOrb` | The ring frame, waveform and orbit dots (pure SVG) |
| `LunaCore3D` | The particle core (`react-three-fiber` + bloom) |
| `LunaHeroOrb` | Stacks the SVG ring + the particle core, scaled to fit |
| `ReasoningWeb` | The capability constellation — circuit traces, orbit rings, 18-node graph |
| `OrbStatusBar` | The equalizer + state cluster along the bottom |
| `ShaderBackground` | Animated WebGL "plasma waves" backdrop (MIT component from 21st.dev — see CREDITS) |
| `LunaWorld` | Composes the above; owns the orb state machine and the capability cards |
| `LunaOverviewPanel` | Top-left HUD: live clock, weather, and links |
| `app/api/weather` | Keyless [open-meteo](https://open-meteo.com) proxy for the panel's weather |

## Customise

- **Links** → edit `TILES` in `components/LunaOverviewPanel.tsx` (currently placeholders).
- **Weather** → auto-detects the visitor's city on Vercel (geo headers); off Vercel it
  reports no location rather than guessing.
- **Capabilities & copy** → the `ROSTER` and `INFO` maps in `components/LunaWorld.tsx`.
- **Backdrop** → the shader in `components/ShaderBackground.jsx`; its opacity/tint are set
  where `<ShaderBackground>` is used in `LunaWorld.tsx`.

## Accessibility

The decorative SVG graph is mirrored by a real, keyboard-navigable list
(`.visually-hidden`), the orb and every control are focusable, and the whole thing
respects `prefers-reduced-motion`.

## License

Code is released under the **[MIT License](./LICENSE)**, which covers the upstream
APEX-UI code this is built on. The name "Apex" and the original author's branding are
**not** part of that license and are not used here.
