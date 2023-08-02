import React from 'react';
import { Toggle } from '@refinitiv-ui/elements/toggle';
import { createComponent } from '@lit-labs/react';

export default createComponent({
  tagName: 'ef-toggle',
  elementClass: Toggle,
  react: React,
  events: {
    onChange: 'checked-changed',
  },
});
