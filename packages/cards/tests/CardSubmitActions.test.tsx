import React from 'react';
import { customRender, screen } from '@pm/test-utils';
import { CardSubmitActions } from '../src/CardSubmitActions';

describe('<CardSubmitActions />', () => {
  it('should render', () => {
    customRender(
      <CardSubmitActions
        containerProps={{ elevation: 2 }}
      >
        <div>test</div>
      </CardSubmitActions>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
