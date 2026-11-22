# Mehfil: Event Discovery Dashboard

A responsive single-page event discovery dashboard, built for the Spinach UI Development assignment.

**Live site:** https://mehfil-event-discovery-dashboard.netlify.app/
**Walkthrough video:** https://drive.google.com/file/d/1ZeNBJiDGs3Tpupkxs95bVUKmXQjfJ-dm/view?usp=sharing

## Features

- Header with an animated logo, live search (title and location) and a light and dark theme toggle
- Hero section with an animated headline and floating event photos
- Filters: category, month, maximum price and a free-events toggle
- Responsive grid of 12 events loaded from a local JSON file
- Event card with image, title, date, location, price, tags and a save button
- Saved events drawer with add and remove, remembered after a refresh
- Empty states with a custom SVG illustration
- Animations: page load, staggered cards, hover effects, animated save heart, drawer slide, animated filtering, theme fade, a scroll-triggered section and a 3D card tilt

## Tech stack

- **React + TypeScript (Vite):** fast development, typed props and data
- **Tailwind CSS v4:** utility classes, with colours and fonts defined once as theme tokens
- **Framer Motion:** animations written as props on React components
- **lucide-react:** icons
- **Data:** one local JSON file, no backend or API

## Getting started

Requires Node 20 or newer.

1. Clone the repo: `git clone https://github.com/Akshita153/event-discovery-dashboard.git`
2. Go into the folder: `cd event-discovery-dashboard`
3. Install packages: `npm install`
4. Start the dev server: `npm run dev`
5. Make a production build: `npm run build`

## Project structure

    src/
      components/
        ui/        Small reusable pieces: Tag, Toggle, EmptyState, TiltCard
        events/    EventCard, EventGrid, Filters, SavedDrawer
        layout/    Header, Logo, Hero, HeroVisuals, HowItWorks
      hooks/       useEventFilters, useSavedEvents, useTheme
      lib/         animations (shared motion settings), format, brand
      types/       event and filter types
      data/        events.json
      App.tsx      connects the hooks and the components

Components only display what they are given. The logic lives in hooks, and App passes data down as props.

## How it works

**Data and types.** Events come from `events.json`. An `EventItem` type describes each event, so a missing field or a wrong category is caught while coding. A price of 0 means the event is free.

**Filtering.** `useEventFilters` keeps every filter (search, category, month, max price, free-only) in one typed object. It works out the visible list from that object each time, instead of storing a second copy, so there is a single source of truth. The month options and the price slider limit are calculated from the data.

**Saved events.** `useSavedEvents` stores the saved event ids and writes them to localStorage, so they survive a refresh. One toggle function adds or removes an event, and both the card heart and the drawer use it.

**Theme.** Colours are tokens defined in `index.css`. Dark mode redefines the same token names when the page has a `dark` class, so components do not need separate dark styles. The choice is saved, and the first visit follows the system setting.

**Drawer.** The saved drawer is a proper dialog. Focus moves into it when it opens and returns to the heart button when it closes. It closes with Escape or a click on the overlay.

## Animations

| Animation | Where |
|---|---|
| Page load (header, logo, hero text) | Header, Logo, Hero |
| Staggered card entrance | EventGrid |
| Hover micro-interactions | EventCard (lift, image zoom), buttons |
| Animated save state | EventCard heart |
| Smooth drawer transition | SavedDrawer with AnimatePresence |
| Animated filtering and reordering | EventGrid with layout animation |
| Theme transition | index.css, useTheme |
| Scroll-triggered animation | HowItWorks |
| 3D card tilt on hover | TiltCard |
| Floating hero visuals | HeroVisuals |

Only position, scale, rotation and opacity are animated, because browsers can do those smoothly. Reduced motion is respected through `MotionConfig`.

## Accessibility

- Semantic elements: header, main, section, article, ul and li, real buttons
- Labels on all inputs and icon buttons, and `aria-pressed` and `aria-checked` states
- Visible keyboard focus rings
- Drawer closes with Escape and returns focus
- Decorative images and icons are hidden from screen readers
- Reduced motion preference respected

## Responsive design

Mobile-first. One column on phones, two on tablets and four on desktop. The header and filters adapt to each size. Tested at about 375px, 768px and 1280px wide.

## Key decisions

- **Tailwind instead of a component library:** a custom design and full control over the look.
- **Hooks for logic:** components stay small and easy to read.
- **Ids in localStorage:** the event data has one source of truth.
- **Theme tokens:** one place to change the design.
- **Framer Motion instead of GSAP:** it fits React, and animations are plain props.
- **Local images and JSON:** fast, and no outside dependency.

## Credits

 Fonts: Syne and Plus Jakarta Sans (Google Fonts). Icons: lucide-react.