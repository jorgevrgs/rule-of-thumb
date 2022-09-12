import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it } from 'vitest';
import BannerBottom from './banner-bottom';

describe('BannerBottom', () => {
  beforeAll(() => {
    render(<BannerBottom />);
  });

  it('should render a submit button', () => {
    const actual = screen.getByRole('button', {
      name: /Submit a name/i,
    });

    expect(actual).toBeDefined();
    expect(actual).toBeInstanceOf(HTMLButtonElement);
  });
});
