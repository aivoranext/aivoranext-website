# AivoraNext Repositioning & Honest Rebuild — Design Spec

**Date:** 2026-05-30
**Author:** Dhruv Rajkotia (with Claude)
**Status:** Approved design, pending implementation plan

---

## Problem

AivoraNext is a new, founder-led AI studio targeting US mid-market clients. The current website presents an established agency — "8+ years," "50+ businesses automated," "98% client satisfaction," 6 named testimonials with stock-photo faces, and 8 fully invented case studies with specific dollar metrics. None of this reflects reality, and the founder has not yet landed an independent paying client under the AivoraNext name.

For sophisticated US B2B buyers, manufactured social proof is a liability: it is detectable, invites scrutiny the company cannot survive, and (fake testimonials) carries legal risk. Meanwhile the genuine asset — real, production-grade insurance AI work — is buried under generic "everything AI for everyone" positioning, and the imagery is generic stock photography that signals "template."

**Goal:** Rebuild the site on an honest foundation that converts: Voice-AI-led positioning, real (anonymized) case studies, proof-by-demo, founder-led-studio credibility, and a custom on-brand image system. Pair it with a go-to-market plan to land the first paying client in 1–3 months.

---

## Strategic Decisions (locked)

| Decision | Choice |
|---|---|
| Genuine edge | Conversational / Voice AI (real insurance production work) |
| First-client target | US / global mid-market, premium pricing |
| Delivery capacity | Small team (4+) |
| Commitment | Side project, wants client #1 in 1–3 months |
| Positioning | Voice AI–led, two-layer: Voice AI is the hook; full custom-AI studio (agents, automation, custom software, UI/UX) is the substance |
| Spine / differentiator | **Build-and-operate with reporting** — design → build → deploy → operate → report (managed AI service, recurring retainer) |
| Proof handling | **Anonymized case studies** — founder confirmed rights to showcase the work; all identifying details scrubbed |
| Brand voice | **Founder-led studio ("we")** — AivoraNext led by Dhruv Rajkotia, AI Solutions Architect |
| Claims | Real & defensible — "8+ years" (founder) and per-case metrics are real measured outcomes, presented anonymized |
| Image aesthetic | **Abstract tech / minimal** — dark `#050505` + electric blue `#0065F8`, Anthropic/Vercel/ElevenLabs feel |
| Case-study visuals | **Real anonymized product mockups** built as HTML and screenshotted (scrubbed) |
| GTM outbound wedge | Lead with **insurance** vertical for outreach; public site stays Voice-AI-led + horizontal |

### Honesty principle (governs everything)

Every claim on the site must be either (a) demonstrably true, or (b) a clearly-labeled illustrative demo. No invented clients, metrics, quotes, or borrowed logos.

### ⚠️ Anonymization / scrub list (hard requirement)

All real case studies derive from work for a single US client (the founder's employer). Before publishing, **remove every identifying detail**: the client name, product names (e.g. "Verdin"), carrier names, third-party platform names (e.g. "Applied / Applied Epic"). Generic framing only: *"a US-based commercial insurance provider."* This applies to copy **and** to any mockup screenshots.

---

## Positioning

**Category:** A custom AI studio (build-and-operate), known for Voice AI.

**Two-layer message:**
- **Hook (hero, outreach):** "Production-grade Voice AI agents — inbound & outbound."
- **Substance:** "AivoraNext is a custom AI studio. Bring your use case — we design, build, deploy, and operate the AI for you, with full performance reporting. Voice AI is our specialty; we also build custom AI agents, automation, AI software, and the UI/UX around them."

**Pillars:**
1. **Specialist, not generalist** — Voice AI leads; full studio services follow as one coherent offering (not buried, not competing for the lead).
2. **Senior team, regulated-grade experience, stated honestly** — engineers who have shipped conversational AI in production for regulated (insurance) workflows. Framed as team capability, never as named-client outcomes.
3. **Proof by demo, not logos** — a live callable/clickable agent + real anonymized case studies replace the testimonial wall.
4. **Build-and-operate with reporting** — the managed-service spine and recurring-revenue path.
5. **"New" reframed as advantage** — direct senior access, no agency overhead, fast iteration.

---

## Real Content Map (replaces all fabricated content)

| Area | Remove (fabricated) | Replace with (real) |
|---|---|---|
| Hero experience stat | "2+ Years" ↔ "8+ Years" contradiction | **8+ years** (founder/architect) |
| Testimonials | 6 invented people + stock faces | **Removed** — live demo + real case studies carry proof |
| Case studies | 8 invented w/ fake metrics | **5 real, anonymized** (below) |
| Headline stats | "50+ businesses," "98% satisfaction," "100% automation rate," "3x conversions" (as company-wide) | Real **per-case** metrics only |
| Trust marquee | "Trusted by brands worldwide" + borrowed logos | Removed (logo files already gone) |
| Blog | 6 fake posts dated 2026 | Paused until real posts written |
| Team | "8+ yr company" | Founder-led studio; Dhruv as AI Solutions Architect (real photo) |
| Tech stack | generic | Real stack (see below) |

### The 5 anonymized case studies

All framed as *"a US-based commercial insurance provider."*

1. **End-to-End Automated Policy Purchase** — conversational agent for policy sales: real-time input validation, dynamic policy recommendations, in-conversation Stripe checkout, live mid-conversation quote updates. Metrics: 100% automated purchase flow, ~3x faster conversions, zero human dependency.
2. **Voice Renewal & Billing Agent** — inbound/outbound voice with DTMF; handles renewals and billing queries; full audit logging.
3. **AI Submission Intake (flagship)** — email agent ingests attachments, understands insurance documents/fields, surfaces structured data into a UI, auto-validates, auto-rejects rule violations, calls carrier APIs for quote generation. Metric: ~½–1 day → **~4–5 minutes** per submission.
4. **Agentic Web Operator** — logs into the carrier portal and automates 50–70-step manual workflows (agentic RPA). Metric: **~$0.70–$1 saved per submission**.
5. **No-Code AI Agent Platform** — multi-channel (web/WhatsApp/Slack), human handoff with full context, RLHF improvement loop.

### Real tech stack (for the tech section)

- **Agentic orchestration:** LangGraph, LangChain, CrewAI, Google Agent Toolkit
- **Voice & real-time:** LiveKit, BlandAI, Retell AI, Twilio (telephony), ElevenLabs, Cartesia (TTS), Deepgram, AssemblyAI (STT)
- **Memory & RAG:** Pinecone, ChromaDB, Qdrant; hybrid memory; RAG pipelines with re-ranking & context compression
- **Automation & integrations:** n8n, Make.com; CRM/calendar/payment integrations; custom API/middleware
- **Languages & cloud:** Python, Node.js, TypeScript, Next.js, React; AWS

---

## Website Architecture

Existing stack stays: Next.js 14 (App Router), React 18, Framer Motion, Tailwind, Lucide. Content remains centralized in `lib/content.js`. Changes are content-driven plus targeted structural/section work and an imagery system.

### Homepage section order (revised)

1. Hero — Voice-AI hook + studio subhead; CTAs: **"Call our demo agent"** (primary) / **"Talk to an engineer"** (secondary)
2. **Live Demo** — callable phone number + in-browser web-call widget; 1–2 sample agents
3. **How We Work** — build-and-operate spine: Discover → Design → Build → Deploy → Operate & Report
4. Voice AI deep-dive (flagship service)
5. Other studio services (custom agents, automation, custom software, UI/UX) — equal quality, sequenced after Voice
6. Real anonymized case studies
7. Team / founder credibility + real tech stack
8. **Pilot offer** (risk-reversal): working agent in 14–21 days, fixed fee, one success metric, then retainer or walk away
9. FAQ (tuned to real objections: why a new studio, how do you ensure it works, can we start small, how does build+operate pricing work, what does "operate" include)
10. Contact

### Page-level changes

- **`/` homepage** — reorder + rewrite per above; remove testimonials marquee, fake stats, trust marquee.
- **`/services` + `/services/voice-ai`** — Voice AI flagship beefed up; other service pages kept, sequenced behind Voice, copy made honest.
- **`/portfolio`** — replace 8 invented projects with 5 real anonymized case studies; real metrics; mockup visuals.
- **`/about`** — full rewrite: founder-led studio, real team experience, no "8+ years company" claim, no fabricated regulated-industry "wins." Real founder photo.
- **`/blog`** — pause/hide until real posts exist (do not ship fake posts).
- **`/contact`** — trim service-interest options to match positioning (Voice AI first); keep working form/API.
- **Global** — fix 2025/2026 year inconsistencies; update FAQ; update footer copy.

### Live demo — scope & dependency

The callable demo requires a deployed voice agent + telephony number (Twilio/LiveKit), which lives **outside** this website repo. Website scope: a polished Live Demo section that links to / embeds the demo (phone number + web-call widget) and degrades gracefully if the number is not yet live (e.g. "book a live demo" fallback). The voice-agent + number provisioning is a **separate track** the founder runs; the site ships demo-ready and is wired up when the number exists.

---

## Imagery System

One coherent visual language locked to brand: near-black `#050505` background, electric blue `#0065F8` accent; dark, premium, abstract; **no stock humans, no cheesy robots, no fake UI text**.

1. **Hero + section backgrounds** — custom abstract tech visuals (gradients, glowing nodes, voice-waveform / data-flow motifs). Generated with **nano-banana-pro**; multiple candidates produced so the founder selects from real images. Every output must match brand palette and avoid text/people artifacts.
2. **Case-study visuals** — **real anonymized product mockups built as HTML and screenshotted** (e.g. voice-agent console, submission-intake screen, policy-purchase chat). Fully scrubbed of identifying names. Sharp, real-looking UI.
3. **Team / founder** — a real photo of the founder (not generated).
4. **OG / social share image** — one branded card for professional link previews in outbound.

Asset handling: replace Unsplash URLs throughout `lib/content.js` and pages; store generated/mockup assets under `public/` (e.g. `public/visuals/`, `public/cases/`), referenced from content.

---

## Go-to-Market Plan (companion — not website code)

Targets: US mid-market, premium, side-project hours, real insurance proof, 4+ team. The website is the asset; this is how it is used.

1. **Wedge** — lead outbound with **insurance** (carriers, MGAs, agencies, brokers): the founder speaks the domain (submissions, underwriting, renewals, ACORD, carrier portals). Public site stays Voice-AI-led + horizontal; expand verticals after logo #1.
2. **Offer** — productized **paid pilot**: working AI agent in the client's environment in 14–21 days, fixed fee, one defined success metric → continue on build-and-operate retainer or walk away. (Build fee + monthly operate/monitor retainer = recurring revenue.)
3. **Proof in 60 seconds** — 1–2 live demo agents (insurance-flavored voice + intake); every outreach and the site point at "experience it now."
4. **Channels** — targeted founder outbound (10–20 hand-picked insurance orgs/week, personalized, demo link); LinkedIn build-teardown content (anonymized); warm network/referrals; niche insurtech communities.
5. **90-day sequence** — Wk 1–3 ship honest site + live demo; Wk 2–6 outbound + content; Wk 4–10 demo calls → pilots; Wk 8–12 land paid pilot #1, convert to retainer.

---

## Implementation Phasing (for the plan)

- **Phase 1 — Honesty fixes (highest priority):** remove fabricated testimonials, fake case studies, false stats, trust marquee, fake blog posts; fix experience-stat contradiction. Site becomes truthful even before redesign polish.
- **Phase 2 — Content rewrite:** new positioning copy across hero, services, about, FAQ, footer, contact options; 5 real anonymized case studies in `lib/content.js`.
- **Phase 3 — Structural sections:** homepage reorder; add How-We-Work, Live Demo section (graceful fallback), Pilot Offer; Voice AI flagship emphasis.
- **Phase 4 — Imagery:** generate abstract brand visuals (nano-banana-pro); build + screenshot anonymized HTML case-study mockups; OG image; swap out all Unsplash URLs; add founder photo slot.
- **Phase 5 — Polish & verify:** year/consistency sweep; responsive + build checks; final scrub-list audit (no identifying names anywhere, including images).

Out of scope for this spec: telephony/voice-agent provisioning for the live demo (separate track), real blog content authoring, paid ad campaigns.

---

## Success Criteria

- No fabricated testimonials, clients, metrics, or borrowed logos remain anywhere on the site.
- Positioning reads Voice-AI-led with the full studio + build-and-operate spine clearly present.
- 5 real, fully anonymized case studies live, passing the scrub-list audit (copy + images).
- Custom abstract brand imagery replaces all stock photos; case studies use real anonymized mockups.
- Live Demo section present and demo-ready (wired when number exists; graceful fallback otherwise).
- Pilot offer and How-We-Work sections present.
- `npm run build` succeeds; site responsive; no console errors.
- GTM plan documented and actionable for the next 90 days.
