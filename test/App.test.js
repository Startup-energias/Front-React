import { render, screen, test, expect } from '@testing-library/react';
import Index from '../src/views/Index';

test('renders learn react link', () => {
  render(<Index />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
