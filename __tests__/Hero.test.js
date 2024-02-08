import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero/Hero';

describe('Hero component', () => {
  it('renders Hero component with GradientBackground, TitleSection', () => {
    render(<Hero />);
    const titleSection = screen.getByTestId('title-section');
    expect(titleSection).toBeInTheDocument();
    expect(titleSection).toHaveTextContent('TECH SERVICES');
  });
});
