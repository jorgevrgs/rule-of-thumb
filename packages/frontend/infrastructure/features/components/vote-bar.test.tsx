import { createRenderer } from 'react-test-renderer/shallow';
import { describe, expect, it } from 'vitest';
import VoteBar from './vote-bar';
import VotePercentage from './vote-percentage';

describe('<VoteBar />', () => {
  it('should render a list', () => {
    const renderer = createRenderer();

    renderer.render(<VoteBar positive={67} negative={33} />);
    const actual = renderer.getRenderOutput();

    expect(actual).toBeDefined();
    expect(actual.props.children[0]).toEqual(<VotePercentage positive={67} />);
    expect(actual.props.children[1]).toEqual(<VotePercentage negative={33} />);
  });
});
