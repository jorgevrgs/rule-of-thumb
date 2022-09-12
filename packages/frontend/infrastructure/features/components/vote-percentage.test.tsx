import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import VotePercentage from './vote-percentage';

describe('VotePercentage', () => {
  test('should render a positive percentage', () => {
    render(<VotePercentage positive={67} />);
    const actual = screen.getByText('67 %');

    expect(actual).toBeDefined();
    expect(actual).toBeInstanceOf(HTMLSpanElement);
    expect(actual.parentElement?.className).toContain('bg-green-positive/80');
  });

  test('should render a negative percentage', () => {
    render(<VotePercentage negative={33} />);
    const actual = screen.getByText('33 %');

    expect(actual).toBeDefined();
    expect(actual).toBeInstanceOf(HTMLSpanElement);
    expect(actual.parentElement?.className).toContain('bg-yellow-negative/80');
  });
});
