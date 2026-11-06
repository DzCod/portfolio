# PROJECT_CONTEXT.md

## Project Overview

This repository contains my personal developer portfolio.

**Primary goal:** Present my development skills, real projects, and
experience professionally to attract freelance clients and business
opportunities.

**Positioning:** Next.js and TypeScript developer focused on modern
websites, landing pages, and web applications.

**Target audience:** - Digital marketing agencies - Startups - Small and
medium-sized businesses - E-commerce businesses - Potential freelance
clients

The portfolio supports **English and French**.

------------------------------------------------------------------------

## Technical Stack

Keep the existing stack. Do not replace or reinitialize it.

-   Next.js 16
-   TypeScript (strict mode)
-   Tailwind CSS 4
-   App Router
-   shadcn/ui
-   next-intl
-   Geist and Geist Mono fonts
-   Lucide React
-   Vercel deployment (planned)

Use TypeScript for application code. Keep code identifiers in English.

------------------------------------------------------------------------

## Design System

**Visual direction:** Dark Minimal / Premium Editorial / Developer
Aesthetic.

Existing design tokens:

  Token            Value
  ---------------- -----------
  Background       `#0A0A0A`
  Surface          `#141414`
  Primary text     `#F5F5F5`
  Secondary text   `#A1A1AA`
  Accent           `#A3E635`
  Border           `#262626`

Design principles: - Strong editorial typography and clear hierarchy. -
Generous, intentional spacing. - Thin borders and restrained accent
details. - Subtle transitions and hover states. - Technical visual
details used selectively. - Fully responsive layouts. - Maintain
consistency between sections without making every section look
identical.

The existing Hero uses a subtle grid background, large typography, lime
accent, and a code-editor-inspired visual panel. New sections should
complement it, not duplicate it.

Do not randomly change the palette, typography, radius system, or global
styles.

------------------------------------------------------------------------

## Internationalization

Supported locales: - `en` --- English - `fr` --- French

Requirements: - Preserve the existing next-intl configuration and
routing. - Translate every user-facing string. - Use the project's
established translation pattern. - French copy should sound natural and
professional. - Avoid hardcoded visible text in components.

The Hero currently uses `getTranslations("Hero")`. Follow the same
established approach for other Server Component sections unless the
repository shows a different convention.

------------------------------------------------------------------------

## Existing Architecture

Known project paths include:

-   `src/app/[locale]/`
-   `src/app/globals.css` (or the existing global stylesheet location;
    inspect the repository)
-   `src/components/layout/`
-   `src/components/sections/`
-   `src/components/ui/`
-   `src/i18n/`
-   `src/messages/en.json`
-   `src/messages/fr.json`

A mobile navigation component exists and uses: - `lucide-react` -
`next-intl` navigation - shadcn/ui `Button` - shadcn/ui `Sheet`

The actual repository is always the source of truth. Inspect files
before editing; do not assume every path or implementation is exactly as
described here.

------------------------------------------------------------------------

## Portfolio Content --- Verified Information

### Developer positioning

I work with Next.js and TypeScript and build modern web experiences and
business-oriented digital products.

### Ecomix

Ecomix is an independent Algerian Order Management System (OMS) project.

Known areas of the platform include: - Product management - Order
management - Customer management - Delivery workflows - Landing pages

Known technologies include: - Next.js - TypeScript - MongoDB - Tailwind
CSS

Describe it as a project I am building. Do not invent user counts,
revenue, performance metrics, customer testimonials, or business
outcomes.

### Najmcoiff

My work with Najmcoiff included: - Developing the company's e-commerce
website. - Later developing custom Shopify additions after the company
migrated to Shopify. - Building a custom order form. - Building a custom
cart.

Do not invent dates, results, or additional responsibilities.

------------------------------------------------------------------------

## Portfolio Sections and Current Progress

Use the repository to confirm the actual implementation status before
proceeding.

  -----------------------------------------------------------------------
  Section                             Known status
  ----------------------------------- -----------------------------------
  Hero                                Implemented; source was reviewed in
                                      conversation

  Navbar / mobile navigation          Existing implementation; mobile
                                      navigation source was reviewed

  About                               Implementation was requested
                                      through an agent prompt; user later
                                      reported things were good

  Services                            Implementation was requested
                                      through an agent prompt; user later
                                      reported things were good

  Projects                            Prompt was provided for Ecomix and
                                      Najmcoiff; confirm implementation
                                      in repository

  Experience                          Prompt was provided; implementation
                                      has not been explicitly confirmed

  Skills                              Not yet confirmed

  Contact                             Not yet confirmed
  -----------------------------------------------------------------------

Planned section order: 1. Hero 2. About 3. Services 4. Projects 5.
Experience 6. Skills 7. Contact

Do not recreate completed sections. Inspect the page and components to
determine what is already present.

------------------------------------------------------------------------

## Coding and Architecture Rules

-   Inspect relevant files before modifying them.
-   Preserve existing working implementations.
-   Do not restart or reinitialize the project.
-   Do not reinstall dependencies that are already installed.
-   Reuse existing components and utilities.
-   Avoid unnecessary dependencies and abstractions.
-   Prefer Server Components by default.
-   Use Client Components only when interaction requires them.
-   Keep TypeScript strict and avoid `any`.
-   Use semantic HTML and accessible controls.
-   Keep components modular and maintainable.
-   Preserve locale routing and translation conventions.
-   Do not modify unrelated sections.
-   Do not invent client names, testimonials, certifications, dates,
    achievements, or metrics.

------------------------------------------------------------------------

## Required Workflow for Every New Section

1.  **Inspect:** Read the current page, neighboring sections,
    translations, and relevant styles.
2.  **Analyze:** Identify what exists and which files need changes.
3.  **Plan:** Give a concise implementation plan when the change affects
    multiple files.
4.  **Implement:** Make focused changes that fit the existing
    architecture and visual identity.
5.  **Translate:** Add complete English and French translation keys.
6.  **Integrate:** Add the section to the existing page without breaking
    navigation.
7.  **Verify:** Run the available lint, TypeScript, and production build
    checks.
8.  **Report:** List modified files, checks performed, and anything
    requiring manual review.

For a major new section, do not stop at a proposal: implement it. Do not
move to another major section until the current one has been reviewed.

------------------------------------------------------------------------

## Instructions for Continuing in a New AI Conversation

You are continuing an existing project, not starting a new one.

1.  Read this `PROJECT_CONTEXT.md`.
2.  Inspect the current repository and treat its code as the source of
    truth.
3.  Determine which sections are actually implemented.
4.  Do not assume you remember previous conversations.
5.  Do not recreate existing components or repeat completed setup.
6.  If a key detail is missing, ask one focused question rather than
    guessing.
7.  Continue with the next unfinished portfolio section.

**First action:** inspect the current page composition and section
files, compare them with the progress table above, then report the
actual project status and recommend the next unfinished section. Do not
modify code until that inspection is complete.
