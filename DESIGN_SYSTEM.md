# Jobzo Design System

All components in this project use the Jobzo Design System. This ensures consistent, high-quality UI across the entire application.

## Available Components

The design system includes the following components:

### Core
- **Button** — Primary action control. Variants: primary, secondary, ghost, danger. Sizes: sm, md, lg
- **IconButton** — Icon-only button. Variants: solid, soft, ghost

### Feedback
- **Badge** — Status pills for job states (done, in progress, scheduled, cancelled)
- **Card** — Container for content with elevation
- **Avatar** — User/profile image display

### Forms
- **Input** — Text field with label, icon, helper, and error states
- **Select** — Dropdown selection field
- **Switch** — Toggle switch for boolean inputs

## Usage

Import components from the design system:

```tsx
import { Button, Badge, Input, Card } from '@/components';

export function MyComponent() {
  return (
    <Card>
      <Input label="Name" placeholder="Enter name" />
      <Button variant="primary">Submit</Button>
      <Badge>In Progress</Badge>
    </Card>
  );
}
```

## Design Tokens

All design tokens (colors, typography, spacing, radius, shadows) are available as CSS variables:

```css
/* Colors */
--color-primary: #1A56DB
--surface-page: #F9FAFB
--text-strong: #111827

/* Typography */
--font-display: 800 3rem/1.2 Inter
--font-body: 400 1rem/1.5 Inter

/* Spacing */
--space-4: 1rem
--space-8: 2rem

/* Radius */
--radius-md: 10px
--radius-pill: 999px
```

## Icons

Use lucide-react for icons:

```tsx
import { Plus, Calendar, MoreVertical } from 'lucide-react';

<Button leadingIcon={<Plus size={16} />}>Add</Button>
```

## Learn More

All token definitions are in `src/design-system/tokens/`
- `colors.css` — Color palette and semantic aliases
- `typography.css` — Type scale and font families
- `spacing.css` — Spacing and sizing scale
- `radius.css` — Border radius and shadow tokens
- `fonts.css` — Font loading
- `base.css` — Global element resets
