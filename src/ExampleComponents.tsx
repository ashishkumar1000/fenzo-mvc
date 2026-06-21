/**
 * Example Components — Using Jobzo Design System
 * This file demonstrates how to use design system components in your app.
 * Delete this file when you're ready to start building!
 */

import { Button, IconButton, Badge, Card, Input, Select, Switch, Avatar } from './components'
import { Plus, Calendar, MoreVertical } from 'lucide-react'
import { useState } from 'react'

export function ButtonExamples() {
  return (
    <Card>
      <h3>Buttons</h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </Card>
  )
}

export function BadgeExamples() {
  return (
    <Card>
      <h3>Badges</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Badge status="done">Done</Badge>
        <Badge status="progress">In Progress</Badge>
        <Badge status="scheduled">Scheduled</Badge>
        <Badge status="cancelled">Cancelled</Badge>
      </div>
    </Card>
  )
}

export function FormExamples() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  return (
    <Card>
      <h3>Form Controls</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />

        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <Switch
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>I agree to the terms</span>
          </label>
        </div>
      </div>
    </Card>
  )
}

export function IconButtonExamples() {
  return (
    <Card>
      <h3>Icon Buttons</h3>
      <div style={{ display: 'flex', gap: '8px' }}>
        <IconButton label="Add">
          <Plus size={20} />
        </IconButton>
        <IconButton label="Schedule">
          <Calendar size={20} />
        </IconButton>
        <IconButton label="More">
          <MoreVertical size={20} />
        </IconButton>
      </div>
    </Card>
  )
}

export function AllExamples() {
  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Jobzo Design System — Examples</h1>
      <p>This page shows examples of all available design system components.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
        <ButtonExamples />
        <BadgeExamples />
        <IconButtonExamples />
        <FormExamples />
      </div>

      <p style={{ marginTop: '32px', color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
        Edit <code>src/ExampleComponents.tsx</code> or delete it to start building with the design system!
      </p>
    </div>
  )
}
