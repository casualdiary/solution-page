# Designs.ai Solutions pages: research
Wed 28 Oct 2026, for Adwin. Sources were fetched with curl (signed out) on 28 Oct, about 10:05 WIB (UTC+7). Raw HTML is in `raw/`.

## 1. Reference: Runable /solutions/* (structure only)
All 6 Runable pages use **one template**, with only the words changed:
1. Hero: headline, one line of jobs, job tags, and a fake "agent run" card (prompt plus 3 ticked steps).
2. "Where it helps": 6 numbered jobs.
3. "One prompt, finished work": 6 prompt → output pairs, one per job category.
4. "Under the hood": 4 product capabilities.
5. One testimonial.
6. "Not quite you?" cross-links to the other personas.
7. Final CTA.

**What we take:** the cross-linking between personas, prompt → output proof, and jobs-first copy.
**What we avoid:**
- the identical template. Every Designs.ai page gets its own hero demo and section order.
- invented testimonials (we use marked placeholders)
- "finished, sent for you" claims. Designs.ai mostly drafts and waits for a yes.

## 2. What Designs.ai really has (evidence)
Tags:
- **M**: public marketing copy on designs.ai (fetched today)
- **S**: shipped UI string
- **C**: code
- **E**: earlier deep dive (Oct 9, `designs-agent-merge/findings.md`)

| Capability | Evidence |
|---|---|
| Specialist agents: Brand, Image, Storyboard, Video, Slides, Audio | M home |
| Brand kit from a company URL or a description; logo, colours, type, guidelines; applied automatically to images, video and slides | M /tools/branding, /tools/image, /tools/video |
| Smart model routing, or pick your own model (Claude, ChatGPT, Gemini, Grok…) | M home |
| Asks one clarifying question at a time; remembers brand, style and recent projects | M home |
| Skills: Logo Design, Short Video Ad, Financial Summary, Contract Reviewer, Data Insights, Job Description Writer | M home |
| Workflows: Post writer, Pin from a Notion page, YouTube Short from a Notion page, Meeting prep, Appointment follow-up, Form response analysis, Document summary, Answer from my documents, Prospect research, Cover letter, Resume editor, PR digest, Release notes. Most return drafts ("drafted, never sent for you" on Appointment follow-up); Pin and YouTube Short post to the connected Pinterest board or YouTube channel | E, catalog CSV |
| Plugins: Google Drive, Gmail, Notion, Slack, Google Calendar, GitHub, Linear, Dropbox, LinkedIn, Zoom, Figma, Google Sheets (Pro and Enterprise) | E |
| Automations: run an instruction on a schedule (feature-flagged) | E (S) |
| Designs Claw: personal assistant inside Telegram, WhatsApp or Slack; can be added to group chats; scheduled routines; hosting included, you pay credits for what it creates | M home, S |
| Claw persona copy: Café & F&B owner, Property agent, Insurance agent, Online seller ("Write the Shopee listing… 3 lifestyle images"), Content creator, Tuition teacher | M home (RSC payload) |
| Claw schedule examples: morning brief, today's post, week's content plan, numbers recap, week in review, invoice reminders | M home |
| Studio boards: node canvas, Estimate, Re-roll, Characters, spend approval (Approve once / this session / Decline) | E (S, flagged) |
| Library with brand packages, thread share link, artifacts (deck, brand guideline), Download all as ZIP | E (S) |
| Creative-mode tools: platform aspect presets (16:9 YouTube, 1:1 Instagram, 4:5 Facebook, 9:16 TikTok, 4:3 LinkedIn, 2:3 Pinterest), Remove background, Creative Score, Clone my voice (1–2 min sample), storyboard genres | E (S/C). Creative mode is being sunset; the earlier proposal merges these into Agent mode |
| Image agent examples: Product hero shot, Replace background, Swap outfit, Food macro, Bento infographic… | catalog CSV |
| Video agent examples: 360° orbit, Cinematic push-in, Bring portrait to life… | catalog CSV |
| Slides styles: Cinematic Pitch Deck, Founder Vision Narrative, Bold Startup Story, Data-Driven Briefing, Clean Product Showcase… | catalog CSV |
| Multilingual voiceovers (marketing, product demos, training) | M /tools/audio |
| Teams: seats, invite users, team plan; "role-based access", "workspaces for departments, regions, and multiple brands" | S, M FAQ |
| Commercial and client use: yes. Standard licence (Plus, Pro) or Enterprise licence; terms vary by plan | M FAQ |
| Plans: Basic, Go, Plus, Pro, Enterprise; subscriptions plus credit packages; a free tier | S, M FAQ |
| Audiences Designs.ai itself names: individuals, growing teams, larger orgs; solo creators, marketing teams, sales, HR, agencies; affiliate list (marketing leaders, creators, trainers & consultants, startup founders) | M |

**Not verified (so it's Proposed or left out):**
- prices and credit amounts
- direct publishing to social or marketplaces
- client review portals
- a calendar UI
- event-triggered automations
- customer names, stats and quotes

## 3. Chosen personas: why, jobs, pains, features
| Persona | Why it fits Designs.ai | Jobs to be done | Pains | Real features used |
|---|---|---|---|---|
| **Small business owners** | Claw's persona copy (café, property, insurance, tuition) is already SMB-first; branding says "without hiring a design agency" | Keep posting while running the shop; posters and promos; reply to reviews; weekly numbers | Marketing happens after closing time; no designer; content stops when busy | Designs Claw in WhatsApp/Telegram/Slack, scheduled routines, Brand kit from URL, Image agent |
| **Online sellers** | Claw "Online seller" (Shopee listing + 3 lifestyle images); Creative prompts are e-commerce-flavoured; Product hero shot / Replace background | Listing copy plus product images per marketplace; launch countdowns; customer replies | Photo studio costs; every channel needs a different size; launches are rushed | Image agent (product hero, replace/remove background), platform aspect presets, Video agent (360° orbit), Claw launch schedule |
| **Content creators** | Claw "Content creator", tools pages for "solo creators", affiliate audience; voice clone, storyboard genres, audio agent | Turn one idea into a week of posts; covers; voiceover; plan the month | Editing eats creating time; keeping cadence; sounding like yourself | Storyboard + Video agents, Clone my voice, Audio agent, Claw monthly calendar, aspect presets |
| **Marketing teams** | Tools pages name "marketing teams running multi-channel campaigns"; home CTA "Start shipping campaigns" + Talk to sales; brand governance FAQ | One brief → every channel and language; keep everyone on-brand; reuse Notion briefs | Design bottleneck; off-brand self-serve content; localisation | Brand kit enforcement, model routing, Workflows (Post writer, Pin/YouTube Short from Notion), Plugins, multilingual voiceover, team seats |
| **Agencies & freelancers** | Image page "Agencies: delivering client work efficiently"; commercial and client use licence; multiple brands; Studio boards | Several client brands at once; explore and iterate; hand off clean deliverables | Context-switching brands; credit/cost control per job; rights | Multiple brand kits, Studio boards (Estimate, spend approval), Brand guideline artifact, share link, ZIP, licence |
| **Startups & founders** | Affiliate "startup founders"; Slides styles (Cinematic Pitch Deck, Founder Vision, Bold Startup Story); branding from URL; Skills for finance, legal, HR | Brand, deck and launch assets in week one; hiring docs; investor updates | No designer and no time; everything is version 0 | Brand kit from URL, Slides agent, Video/Storyboard, Skills (JD writer, Financial Summary, Contract Reviewer), Workflows (Prospect research, Release notes) |

**Considered but not built:**
- Enterprise and teams: covered by Marketing teams plus Talk to sales.
- Educators and tuition: the Claw copy exists; listed on the hub as a "next" candidate.

## 4. Proposed items used in the prototype (labelled in the UI)
- The Solutions section itself (nav mega-menu, hub, fit finder).
- A content calendar view for creators. Today Claw drafts the calendar as a message.
- A "Brand kit on/off" comparison toggle (demo device only).
- A client review link for agencies.
- Automations that run a Skill or Workflow (from the Oct 9 merge proposal).
- Creative-mode tools (aspect presets, Remove background, Creative Score, Clone voice) shown inside Agent mode, following the sunset/merge proposal.
