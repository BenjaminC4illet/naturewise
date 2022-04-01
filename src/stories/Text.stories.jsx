import React from 'react';

import { Text } from './Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Atoms/Text',
    component: Text,

  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template = (args) => <Text {...args} />;
  
  export const h1 = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  h1.args = {
    type: 'h1',
    label: 'Title',
  };
  
  export const h2 = Template.bind({});
  h2.args = {
    type: 'h2',
    label: 'Title',
  };

  export const h3 = Template.bind({});
  h3.args = {
    type: 'h3',
    label: 'Title',
  };

  export const h4 = Template.bind({});
  h4.args = {
    type: 'h4',
    label: 'Title',
  };
