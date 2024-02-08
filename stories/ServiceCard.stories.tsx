import React from 'react';
import { Meta, Story } from '@storybook/react';
import ServiceCard from './ServiceCard';
import { ServiceInfo } from '@/constants/index';

export default {
  title: 'Components/ServiceCard',
  component: ServiceCard,
} as Meta;

const sampleServiceInfo: ServiceInfo = {
  name: 'Sample Service',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  icon: 'https://static.vecteezy.com/system/resources/previews/000/569/512/non_2x/desktop-computer-icon-vector.jpg',
};

const Template: Story<{ serviceInfo: ServiceInfo }> = (args) => <ServiceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  serviceInfo: sampleServiceInfo,
};
