import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TestimonalCard from '@/components/card/TestimonalCard';

const mockTestimonalInfo = {
  stars: 5,
  review: 'Excellent service!',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  company: '/company.png',
  name: 'John Doe',
  role: 'CEO',
};

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);

describe('TestimonalCard component', () => {
  beforeEach(() => {
    render(<TestimonalCard testimonalInfo={mockTestimonalInfo} />);
  });

  it('renders TestimonalCard with provided testimonalInfo', () => {

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('Excellent service!')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('CEO')).toBeInTheDocument();

    const image = screen.getByAltText('Company Logo');
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe('/company.png');
  });
});
