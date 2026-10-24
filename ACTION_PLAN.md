# Campus lost and found — action plan

## Product goal

Give students and campus staff one trusted place to report, search, match, verify, and return lost property. The first release is for one college and should complement the college's existing process rather than replace its security or property desk.

## Name: Wapasify (working brand)

Wapasify combines “wapas” (back/returned) with a product-style suffix. Initial exact-name web searches did not surface a relevant product, GitHub project, app-store listing, or indexed `.in`/`.com` page; that is a promising screening result, not legal clearance or proof that a domain can be registered. Before public launch, check the live domain registrar and the Indian trademark database, then reserve the chosen domain if clear. Search also surfaced **Findora** as an active campus lost-and-found product, so avoid that name and avoid claiming the category has no competitors.

## Recommended stack and workflow

- **Build:** Google Antigravity as the AI-assisted IDE; use small, reviewable tasks and inspect every generated diff.
- **Version control:** GitHub private repository. Keep `main` deployable; use short feature branches and pull requests.
- **Web app:** Next.js + TypeScript, responsive mobile-first interface, accessible components.
- **Data and sign-in:** Supabase Postgres/Auth/Storage, with row-level security policies. Start with the college email domain only after confirming it with the college; do not treat an email address alone as proof of ownership.
- **Hosting:** Vercel connected to GitHub. Branch/PR previews are for review; production deploys only after review and approval. Use a plan whose terms fit the project's real use before a public operational launch.
- **Secrets:** local `.env.local` and Vercel environment variables; never commit secrets or real student data.

## Delivery phases

### Phase 0 — align and protect (first 1–2 days)

1. Confirm the college name, campus email domain, who owns the lost-property process, and whether staff will sponsor a pilot.
2. Pick and clear the project name; create a private GitHub repo under an account the team controls.
3. Agree on item categories, authorized collection points, moderation owner, and retention/deletion rules.
4. Use fictional records only until access rules and the handover process are ready.

**Exit:** signed-off MVP scope, chosen name, repo created, pilot contact identified.

### Phase 1 — usable prototype (days 1–4)

Build a polished phone-first interface with sample data: browse and search, Lost/Found filters, item detail, report form, suggested matches, claim flow, and a staff dashboard preview. Label all sample records as demo data. Forms must say when they only simulate a submission.

**Exit:** teammates can demonstrate the complete happy path without a backend.

### Phase 2 — secure MVP (week 1–2)

Add database schema, authentication, image handling, server-side validation, spam/rate limits, and staff roles. Public listings show only safe, minimal details. Keep identifying features private so a claimant can prove ownership; do not publish phone numbers, exact classroom/locker locations, student IDs, or sensitive item details. Route handovers through an approved desk/collection point.

**Exit:** a student can submit a report, receive a potential-match suggestion, privately submit a claim, and get a staff-mediated handover status.

### Phase 3 — closed campus pilot (weeks 3–4)

Pilot with a small volunteer cohort and one authorized collection point. Train staff, publish a short privacy notice, collect feedback, and monitor report-to-claim time, successful returns, false claims, abandoned listings, and moderation workload. Provide a non-digital route for students who cannot sign in.

**Exit:** college sponsor agrees whether to expand, revise, or stop.

### Phase 4 — harden and expand (after pilot)

Add only validated improvements: notifications, QR-coded handover receipt, duplicate detection, analytics, and additional campus locations. Consider paid college hosting/support only after cost and procurement review. Keep the student recovery flow free; any sponsor or institutional revenue must not influence item ranking or expose student data.

## MVP acceptance checklist

- Mobile layout works at common phone widths and is keyboard/screen-reader usable.
- Search and filters cover category, lost/found, date, and broad campus area.
- Report form validates required fields and warns users not to reveal secret ownership clues.
- Claim flow asks private verification questions and never exposes the reporter's direct contact details.
- Admin can review, hide, resolve, and mark a handover complete with an audit trail.
- Images are optional, size-limited, and reviewed; no student ID uploads.
- Demo data is clearly fictional; demo submissions do not pretend to be stored.
- Database access is denied by default and tested for each role before real data is used.

## First sprint

1. Confirm college/campus details and the name shortlist.
2. Set up the private GitHub repo and Next.js app in Antigravity.
3. Build the prototype screens and fictional dataset.
4. Review on phone and laptop; deploy a preview URL for teammates.
5. Get a college staff contact before wiring authentication or storing student reports.

## Decisions to keep open

- College name and official campus email domain.
- Whether students may browse without signing in.
- Which office or staff role owns moderation and physical handover.
- Domain, trademark, and final public brand name.
- Vercel plan and data hosting region for an operational pilot.
