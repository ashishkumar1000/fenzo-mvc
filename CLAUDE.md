# Project Guidelines

## Screens & Prototyping

- **All screens are mocks/prototypes** — UI only, no business logic required
- **Mobile-first & mobile-only** — design for mobile devices, not desktop
- **Click-click interaction** — just navigation between screens, no form submission or API calls
- **Happy path only** — no error handling, validation, edge cases, or error states needed
- **No validation required** — don't add form validation, error messages, or input constraints
- All components use the Jobzo Design System

## Design System

- Use components from `src/design-system/index.ts`: Button, Input, Card, Badge, IconButton, Avatar, Select, Switch
- All styling via CSS design tokens (colors, spacing, typography)
- Mobile-optimized component sizing with touch targets ≥44px

## Implementation

- React 19 + TypeScript
- CSS Modules for component styling
- Path alias: `@/` points to `src/`
