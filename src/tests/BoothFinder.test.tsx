import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BoothFinder } from '../pages/BoothFinder';
import { BrowserRouter } from 'react-router-dom';

describe('BoothFinder Component', () => {
  it('should render the booth finder page', () => {
    render(
      <BrowserRouter>
        <BoothFinder />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/Polling Booth Finder/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/Enter your city or area/i)).toBeDefined();
    expect(screen.getByText(/Find Booths/i)).toBeDefined();
  });
});
