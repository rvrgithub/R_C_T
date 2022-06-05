import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



// nome accesesiable to all
// login acccessiable to all 
// feeds feeds only be accessiable I login


// wrapping our coed in 