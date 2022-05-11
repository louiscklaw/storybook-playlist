import React from 'react';

import { TestMyButton } from './MyButton';

export default {
  title: 'Example/MuiHelloworld/MyButton',
  component: TestMyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (
  <>
    <TestMyButton {...args} />
  </>
);

export const Test1 = Template.bind({});
Test1.args = {};

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Primary Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
