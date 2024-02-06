import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Crew from '@/components/Crew/Crew'

describe('Crew component', () => {
  it('renders Crew component with images and button', () => {
    render(<Crew />);

    // Check if vector images are rendered
    const vector1Image = screen.getByAltText('vector 1');
    const vector2Image = screen.getByAltText('vector 2');
    expect(vector1Image).toBeInTheDocument();
    expect(vector2Image).toBeInTheDocument();

    // Check if crew member images are rendered
    const crew1Image = screen.getByAltText('crew 1');
    const crew2Image = screen.getByAltText('crew 2');
    const crew3Image = screen.getByAltText('crew 3');
    const crew4Image = screen.getByAltText('crew 4');
    const crew5Image = screen.getByAltText('crew 5');
    expect(crew1Image).toBeInTheDocument();
    expect(crew2Image).toBeInTheDocument();
    expect(crew3Image).toBeInTheDocument();
    expect(crew4Image).toBeInTheDocument();
    expect(crew5Image).toBeInTheDocument();

    // Check if the heading is rendered
    const heading = screen.getByText("Let's Form Your Crew.");
    expect(heading).toBeInTheDocument();

    // Check if the button is rendered
    const button = screen.getByText('Schedule a Call');
    expect(button).toBeInTheDocument();
  });
});
