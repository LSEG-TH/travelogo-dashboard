import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { Select } from '@refinitiv-ui/elements/select';

export default createComponent({
  tagName: 'ef-select',
  elementClass: Select,
  react: React,
});
