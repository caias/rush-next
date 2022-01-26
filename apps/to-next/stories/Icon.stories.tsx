import React from 'react';
import { Story, Meta } from '@storybook/react';
import IconComponent, { TIconProps } from '../Icon';

export default {
  title: 'Components/Icon',
  component: IconComponent,
} as Meta<TIconProps>;

const Template: Story<TIconProps> = args => <IconComponent {...args} />;

export const Icon = Template.bind({});

Icon.args = {
  name: 'history',
};
