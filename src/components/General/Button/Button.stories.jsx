import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  version: 'Primary',
  size: 'Small',
  children: 'Button',
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  version: 'Primary',
  size: 'Medium',
  children: 'Button',
};

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  version: 'Primary',
  size: 'Big',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  version: 'Secondary',
  children: 'Button',
};

export const Gradient = Template.bind({});
Gradient.args = {
  version: 'Gradient',
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  version: 'Outline',
  children: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  version: 'Ghost',
  children: 'Button',
};
