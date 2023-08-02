import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { ButtonBar } from '@refinitiv-ui/elements/button-bar';

export default createComponent({
  tagName: 'ef-button-bar',
  elementClass: ButtonBar,
  react: React,
  events: {
    ontap: 'tap',
  },
});
