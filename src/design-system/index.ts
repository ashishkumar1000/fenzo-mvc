/**
 * Jobzo Design System — React Component exports
 * All components from the design system bundle are available here.
 *
 * Components:
 * - Button, IconButton (core)
 * - Badge, Card, Avatar (feedback)
 * - Input, Select, Switch (forms)
 */

import React from 'react';

declare global {
  interface Window {
    React: typeof React;
    JobzoDesignSystem_0e98b2: {
      Button: any;
      IconButton: any;
      Avatar: any;
      Badge: any;
      Card: any;
      Input: any;
      Select: any;
      Switch: any;
    };
  }
}

// Make React available globally for the bundle
if (typeof window !== 'undefined') {
  window.React = React;
}

// Import bundle script
import './_ds_bundle.js';

// Export components from bundle
export const {
  Button,
  IconButton,
  Avatar,
  Badge,
  Card,
  Input,
  Select,
  Switch,
} = window.JobzoDesignSystem_0e98b2 || {};

// Default export all components
export default window.JobzoDesignSystem_0e98b2 || {};
