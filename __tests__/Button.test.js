import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import Button from '@/components/ui/Button';

describe('Button component', () => {
  it('renders correctly with primary type', () => {
    const { getByText } = render(<Button text="Primary" type="primary" />);
    const button = getByText('Primary');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-[#3171DE]');
  });

  it('renders correctly with secondary type', () => {
    const { getByText } = render(<Button text="Secondary" type="secondary" />);
    const button = getByText('Secondary');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-white');
  });

  it('renders correctly with tertiary type', () => {
    const { getByText } = render(<Button text="Tertiary" type="tertiary" />);
    const button = getByText('Tertiary');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-[#66B066]');
  });

  it('applies styles when isHiddenOnMobile is true', () => {
    const { getByText } = render(<Button text="Hidden" type="primary" isHiddenOnMobile />);
    const button = getByText('Hidden');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('md:block hidden');
  });

  it('calls onClick callback when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button text="Click Me" type="primary" onClick={onClickMock} />);
    const button = getByText('Click Me');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
