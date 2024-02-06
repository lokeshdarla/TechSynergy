import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero/Hero';

describe('Hero component', () => {
  it('renders Hero component with GradientBackground, TitleSection', () => {
    render(<Hero />);

    // Test GradientBackground rendering
    const gradientBackground = screen.getByTestId('gradient-background');
    expect(gradientBackground).toBeInTheDocument();

    // Test TitleSection rendering
    const titleSection = screen.getByTestId('title-section');
    expect(titleSection).toBeInTheDocument();
    expect(titleSection).toHaveTextContent('TECH SERVICES');
  });
});
