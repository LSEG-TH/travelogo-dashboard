import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { Sparkline } from '@refinitiv-ui/elements/sparkline';

export default createComponent({
  tagName: 'ef-sparkline',
  elementClass: Sparkline,
  react: React,
});
