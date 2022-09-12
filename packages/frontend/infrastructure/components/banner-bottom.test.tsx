import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, test } from 'vitest';
import BannerBottom from './banner-bottom';

describe('BannerBottom', () => {
  beforeAll(() => {
    render(<BannerBottom />);
  });

  test('should render a submit button', () => {
    const actual = screen.getByRole('button', {
      name: /Submit a name/i,
    });

    expect(actual).toBeDefined();
    expect(actual).toBeInstanceOf(HTMLButtonElement);
  });
});
