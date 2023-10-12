import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@utils/tests/helpers';
import theme from 'styles/theme';
import Button from './index';

describe('Button', () => {
  it('should render the button with given text', () => {
    const { getByText } = renderWithTheme(<Button>Test Button</Button>);
    expect(getByText(/Test Button/i)).toBeInTheDocument();
  });

  it('should render the loading state when loading prop is true', () => {
    const { getByText } = renderWithTheme(<Button loading>Test Button</Button>);
    expect(getByText('loading...')).toBeInTheDocument();
  });

  it('should handle onClick event', () => {
    const handleClick = jest.fn();
    const { getByText } = renderWithTheme(
      <Button onClick={handleClick}>Test Button</Button>,
    );
    fireEvent.click(getByText('Test Button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render primary style by default', () => {
    const utils = renderWithTheme(<Button>Test Button</Button>);
    const button = utils.getByText('Test Button');
    expect(button).toHaveStyle(`background-color: ${theme.colors.secondary}`);
    expect(button).toHaveStyle(`color: ${theme.colors.white}`);
  });

  it('should render secondary style when variant prop is secondary', () => {
    const utils = renderWithTheme(
      <Button variant='secondary'>Test Button</Button>,
    );
    const button = utils.getByText('Test Button');
    expect(button).toHaveStyle(`background-color: ${theme.colors.white}`);
    expect(button).toHaveStyle(`color: ${theme.colors.secondary}`);
  });
});
