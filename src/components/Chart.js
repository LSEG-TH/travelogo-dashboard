import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { Chart } from '@refinitiv-ui/elements/chart';

export default createComponent({
  tagName: 'ef-chart',
  elementClass: Chart,
  react: React,
});
