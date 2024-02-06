import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamCategoryCard from '@/components/Card/TeamCard'

const mockTeamCategoryInfo = {
  icon: '/icon-path',
  name: 'Category Name',
  description: 'Category Description',
};

describe('TeamCategoryCard component', () => {
  it('renders TeamCategoryCard with provided teamCategoryInfo', () => {
    render(<TeamCategoryCard teamCategoryInfo={mockTeamCategoryInfo} />);

    const icon = screen.getByAltText(mockTeamCategoryInfo.name);
    expect(icon).toBeInTheDocument();

    const name = screen.getByText(mockTeamCategoryInfo.name);
    expect(name).toBeInTheDocument();

    const description = screen.getByText(mockTeamCategoryInfo.description);
    expect(description).toBeInTheDocument();
  });
});
