import React from 'react';

import { Radio } from './Radio';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Atoms/Radio',
  component: Radio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Radio {...args} />;


export const Active = Template.bind({});
Active.args = {
  label: 'Option',
  active: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  label: 'Option',
  active: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Option',
  checked: true
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  label: 'Option',
  checked: false,
};
