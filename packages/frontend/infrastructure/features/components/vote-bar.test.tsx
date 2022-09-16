import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import VoteBar from './vote-bar';

describe('<VoteBar />', () => {
  it('should render a list', () => {
    render(<VoteBar positive={67} negative={33} />);
    const actual = screen.getByRole('list');

    expect(actual).toBeDefined();
    expect(actual.childElementCount).toBe(2);

    const children = screen.getAllByRole('listitem');
    expect(children.length).toBe(2);
  });
});
