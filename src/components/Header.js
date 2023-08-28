import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { Header } from '@refinitiv-ui/elements/header';

export default createComponent({
  tagName: 'ef-header',
  elementClass: Header,
  react: React,
});
