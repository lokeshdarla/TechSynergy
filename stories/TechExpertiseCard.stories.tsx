// TechExpertiseCard.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import TechExpertiseCard from './TechExpertiseCard';
import { TechExpertiseInfo } from '@/constants';

export default {
  title: 'Components/TechExpertiseCard',
  component: TechExpertiseCard,
} as Meta;

const sampleTechExpertiseInfo: TechExpertiseInfo = {
  title: 'Sample Tech Expertise',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

type CardType = 'primary' | 'secondary' | 'tertiary';

const Template: Story<{ techExpertiseInfo: TechExpertiseInfo; cardType: CardType }> = (args) => <TechExpertiseCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  techExpertiseInfo: sampleTechExpertiseInfo,
  cardType: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  techExpertiseInfo: sampleTechExpertiseInfo,
  cardType: 'secondary',
};

export const Tertiary= Template.bind({});
Tertiary.args = {
  techExpertiseInfo: sampleTechExpertiseInfo,
  cardType: 'tertiary',
};

