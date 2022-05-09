import React from 'react';

import { TestChip } from './Chip';

export default {
  title: 'Example/Chip',
  component: TestChip,
  argTypes: { backgroundColor: { control: 'color' } },
};

const Template = (args) => <TestChip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Test Chip ?',
};
