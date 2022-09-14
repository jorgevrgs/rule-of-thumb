import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Veredict from './veredict';

describe('<Veredict />', () => {
  it('should render a list', () => {
    render(<Veredict positive={67} negative={33} />);
    const actual = screen.getByRole('list');

    expect(actual).toBeDefined();
    expect(actual.childElementCount).toBe(2);

    const children = screen.getAllByRole('listitem');
    expect(children.length).toBe(2);
  });
});
