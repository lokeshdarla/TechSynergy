import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TechExpertiseCard from '@/components/card/TechExpertiseCard'

const mockTechExpertiseInfo = {
  title: 'Tech Expertise Title',
  description: 'Tech Expertise Description',
  gradientColors: 'gradient-class',
};


describe('TechExpertiseCard component', () => {
  it('renders TechExpertiseCard with provided techExpertiseInfo', () => {
    render(<TechExpertiseCard techExpertiseInfo={mockTechExpertiseInfo} />);
    const title = screen.getByText(mockTechExpertiseInfo.title);
    expect(title).toBeInTheDocument();

    const description = screen.getByText(mockTechExpertiseInfo.description);
    expect(description).toBeInTheDocument();
  });

  it('applies gradient colors class when gradientColors is provided', () => {
    render(<TechExpertiseCard techExpertiseInfo={mockTechExpertiseInfo} />);
    
    // Check if the gradient colors class is applied when gradientColors is provided
    const card = screen.getByText(mockTechExpertiseInfo.title).parentElement;
    expect(card).toHaveClass('gradient-class');
  });
});
