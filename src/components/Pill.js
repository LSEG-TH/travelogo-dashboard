import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { Pill } from '@refinitiv-ui/elements/pill';

export default createComponent({
  tagName: 'ef-pill',
  elementClass: Pill,
  react: React,
});
