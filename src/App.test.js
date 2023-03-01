import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const TextElement = screen.getByText(/Admin-UI/i);
  expect(TextElement).toBeInTheDocument();
});
