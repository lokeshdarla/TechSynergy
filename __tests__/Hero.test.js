import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);

describe('Hero component', () => {
  it('renders Hero component with GradientBackground, TitleSection, and HeroImage', () => {
    render(<Hero />);

    // Test GradientBackground rendering
    const gradientBackground = screen.getByTestId('gradient-background');
    expect(gradientBackground).toBeInTheDocument();

    // Test TitleSection rendering
    const titleSection = screen.getByTestId('title-section');
    expect(titleSection).toBeInTheDocument();
    expect(titleSection).toHaveTextContent('TECH SERVICES');

    // Test HeroImage rendering
    const heroImage = screen.getByAltText('Hero Image');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', '/hero.png');
    expect(heroImage).toHaveAttribute('alt', 'Hero Image');
  });
});
