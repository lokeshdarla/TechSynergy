import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TechExpertiseCard from '@/components/card/TechExpertiseCard';

const mockTechExpertiseInfo = {
  title: 'Test Title',
  description: 'Test Description',
};

describe('TechExpertiseCard component', () => {
  it('renders TechExpertiseCard with primary cardType', () => {
    render(<TechExpertiseCard techExpertiseInfo={mockTechExpertiseInfo} cardType="primary" />);
    
    const card = screen.getByTestId('tech-expertise-card');
    expect(card).toHaveClass('bg-gradient-to-tr to-[#3171DE] from-[#4AC0F2]');
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders TechExpertiseCard with secondary cardType', () => {
    render(<TechExpertiseCard techExpertiseInfo={mockTechExpertiseInfo} cardType="secondary" />);
    
    const card = screen.getByTestId('tech-expertise-card');
    expect(card).toHaveClass('bg-gradient-to-tr to-[#62AE6E] from-[#e1d43e]');
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders TechExpertiseCard with tertiary cardType', () => {
    render(<TechExpertiseCard techExpertiseInfo={mockTechExpertiseInfo} cardType="tertiary" />);
    
    const card = screen.getByTestId('tech-expertise-card');
    expect(card).not.toHaveClass('bg-gradient-to-tr');
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
