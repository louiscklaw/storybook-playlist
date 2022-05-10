import React from 'react';

import { SBOutlineFood } from './index';

export default {
  title: 'Lynked/AdminDeleteRestaurant',
  component: SBOutlineFood,
};

const Template = (args) => <SBOutlineFood {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  food_name: '阪ハウワ応92勤常勉旋72依',
  bar_olor: '#192a56',
  price: 9999,
};
