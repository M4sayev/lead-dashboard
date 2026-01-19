# Frontend Assessment Submission

## Candidate information

**Name: Elvin**
**Email: emusayev02@gmail.com**
**Time spent: 130-140**

---

## What I delivered

Created a Next.js lead dashboard featuring login, status-based analytics cards, and a responsive leads table with optimistic designs. Includes search + filter functionality and a modal for lead details.”

---

## How to run locally

```bash
# List the exact commands here
npm install
npm run dev
```

---

## Technical decisions

**Data approach:**
(Option A or Option B, and why you chose it)

I chose Option A because it is simpler to set up and keeps the project lightweight while still practicing async data loading. The data is stored in data/leads.json and fetched in the dashboard as if it were an API call using React Query.

**Key UI decisions:**

- React Hook Form + Zod validation
  Used for easy form validation and clean error handling on the login form.
- Cards instead of charts because cards provide information faster and are easier to scan.
  They also work better with screen readers and are more accessible for users who need quick summaries.
- Empty + loading states:
  Added skeletons and messages so the UI never feels broken when data is missing or loading.
  **How filtering works:**
  (2-3 sentences explaining your search and status filter implementation)
  Filtering uses two controls: a search bar and a status dropdown to ensure accessibility.
  The status filter first narrows down the leads by their status, and then the search query filters the remaining results by matching the lead’s name or email. Both filters run together so users can search within a specific status (e.g., “Qualified” leads only).
  **Shadcn/ui components used:**
- Dialog to display the detailed lead information and login
- Table to display lead table
- Card to ensure a consistent design
- Input, Label, Field for forms
- Select for dropdown
- Button to sing in
- Skeleton to build optimistic UI

## Reflection

**If I had 1 more hour, I would:**

I would debounce the search input to reduce unnecessary filtering on every keystroke. I’d also improve error handling with clearer messages and retry options, add smoother UI animations/transitions, and refactor some components to be more generic for future reuse.

**One thing I kept intentionally simple and why:**

One thing I kept intentionally simple and why:
I kept the UI minimal and avoided complex animations because dashboards are meant to be quick to read and easy to use. This makes the data the main focus.

**Biggest risk or known bug:**

Filtering is done only on the client, so if the dataset grows larger, performance may slow down. A better approach would be server-side filtering or pagination.

## (Be honest - we appreciate self-awareness)

## AI usage

**Did you use AI tools?** (Yes/No)
Yes
**If yes, which ones and for what?**
I used Claude for boilerplate code like helper functions and generating sample JSON data. All core logic and UI decisions were implemented by me.
(e.g., "ChatGPT for TypeScript types", "GitHub Copilot for boilerplate")
