# Designs.ai Solutions: prototype
Open `index.html` in Chrome. It's self-contained; Inter loads from rsms.me and falls back to system fonts offline. Routing uses hashes.

| Route | Page | Hero demo |
|---|---|---|
| `#/` | Solutions hub | Persona preview switcher, Find-your-fit chooser, solution list, capability matrix |
| `#/small-business` | Small business owners | Designs Claw group chat in WhatsApp style (Café / Property / Insurance / Tuition, with real Claw prompts); routine toggles; channel setup; brand kit from URL |
| `#/online-sellers` | Online sellers | Listing studio: background scenes, marketplace sizes, variations, listing copy per marketplace; product video moves; launch countdown; care replies; Creative Score |
| `#/creators` | Content creators | Idea → 7-day plan (click a day for the draft drawer); voice clone; storyboard genres; reply templates |
| `#/marketing-teams` | Marketing teams | Campaign matrix with a Brand kit on/off comparison and 3-language voiceover; brief→route→approve→hand-off stepper; workflow drawers; team seats |
| `#/agencies` | Agencies & freelancers | Client brand switcher plus Compare all; Studio board with spend approval; hand-off rows; licences |
| `#/startups` | Startups & founders | URL → brand kit → deck → video → posts pipeline; deck style picker; Skills and Workflows drawers; plan model |

**Shared across pages:**
- sticky nav with a Solutions mega-menu (hover, click, arrow keys, Esc)
- mobile drawer
- breadcrumb with a persona switcher
- FAQ accordions
- "Not quite you?" cross-links
- final CTA: Start free (loading, then toast), Talk to sales (drawer with validation)
- a bottom-left switch that hides the Proposed labels so you can see the page as a visitor would

**Sources:**
- `src/` holds tokens.css (from designs-system-v1), style.css, pages.css, core.js, art.js and p-*.js. Run `python3 src/build.py` to rebuild index.html.
- `research.md` has the evidence and the persona mapping. `shots/` has the screenshots.
- `audit.txt` has the dead-click audit and console errors.
