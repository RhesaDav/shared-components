import React from 'react';
import { Story, Meta } from '@storybook/react';
import Typography, { TypographyProps } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Typography',
};

export const Heading = Template.bind({});
Heading.args = {
  children: 'Heading Typography',
  variant: 'h1',
};

export const Subheading = Template.bind({});
Subheading.args = {
  children: 'Subheading Typography',
  variant: 'h2',
};

export const Body = Template.bind({});
Body.args = {
  children: 'Body Typography',
  variant: 'body1',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: 'Custom Style Typography',
  className: 'custom-typography',
};

