import React from 'react';
import { Meta, Story } from '@storybook/react';
import TestimonalCard from './TestimonialCard';
import { TestimonalInfo } from '@/constants';

export default {
  title: 'Components/TestimonalCard',
  component: TestimonalCard,
} as Meta;

const sampleTestimonalInfo: TestimonalInfo = {
  stars: '⭐ ⭐️ ⭐️ ⭐️ ⭐️',
  review: 'Amazing experience!',
  description: 'The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level.',
  company: 'https://cdn-icons-png.flaticon.com/256/4300/4300059.png',
  name: 'John Doe',
  role: 'Software Engineer',
};

const Template: Story<{ testimonalInfo: TestimonalInfo }> = (args) => <TestimonalCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  testimonalInfo: sampleTestimonalInfo,
};
