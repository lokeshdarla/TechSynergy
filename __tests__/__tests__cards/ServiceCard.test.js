import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ServiceCard from '@/components/Card/ServiceCard';

const mockServiceInfo = {
  name: 'Test Service',
  description: 'Test description for the service.',
  icon: '/path/to/test/icon.png',
};


jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);

describe('ServiceCard component', () => {
  it('renders ServiceCard with provided serviceInfo', () => {
    // Given
    render(<ServiceCard serviceInfo={mockServiceInfo} priority />);

    // When
    const serviceName = screen.getByText('Test Service');
    const serviceDescription = screen.getByText('Test description for the service.');
    const image = screen.getByAltText('Test Service');

    // Then
    expect(serviceName).toBeInTheDocument();
    expect(serviceDescription).toBeInTheDocument();

    // Ensure the image is present
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe('/path/to/test/icon.png');
  });
});


