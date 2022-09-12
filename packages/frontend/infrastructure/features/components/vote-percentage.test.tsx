import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import VotePercentage from './vote-percentage';

describe('VotePercentage', () => {
  it('should render a positive percentage', () => {
    render(<VotePercentage positive={67} />);
    const actual = screen.getByText('67 %');

    expect(actual).toBeDefined();
    expect(actual).toBeInstanceOf(HTMLSpanElement);
    expect(
      actual.parentElement?.classList.contains('bg-green-positive/80')
    ).toBeTruthy();
  });

  it('should render a negative percentage', () => {
    render(<VotePercentage negative={33} />);
    const actual = screen.getByText('33 %');

    expect(actual).toBeDefined();
    expect(actual).toBeInstanceOf(HTMLSpanElement);
    expect(
      actual.parentElement?.classList.contains('bg-yellow-negative/80')
    ).toBeTruthy();
  });
});
