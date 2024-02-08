import React from 'react';
import { Meta, Story } from '@storybook/react';
import TeamCard from './TeamCard';
import { TeamInfo } from '@/constants/index';

export default {
  title: 'Components/TeamCard',
  component: TeamCard,
} as Meta;

const sampleTeamCategoryInfo: TeamInfo = {
  name: 'Sample Team Category',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  icon: 'https://cdn-icons-png.flaticon.com/256/476/476863.png',
};

const Template: Story<{ teamCategoryInfo: TeamInfo }> = (args) => <TeamCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  teamCategoryInfo: sampleTeamCategoryInfo,
};
