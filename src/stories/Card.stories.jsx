import React from 'react';

import { Card } from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Card',
    component: Card,

  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template = (args) => <Card {...args} />;
  
  export const Default = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Default.args = {
    active: false,
    title: 'Title',
    item1: 'Item1',
    item2: 'Item2',
    item3: 'Item3',
    item4: 'Item4',
    info: 'Info',
  };
  
  export const Active = Template.bind({});
  Active.args = {
    active: true,
    title: 'Title',
    item1: 'Item1',
    item2: 'Item2',
    item3: 'Item3',
    item4: 'Item4',
    info: 'Info',
  };