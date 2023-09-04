import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { Rating } from '@refinitiv-ui/elements/rating';

export default createComponent({
  tagName: 'ef-rating',
  elementClass: Rating,
  react: React,
});
