import React from 'react';
import { customRender, screen } from '@pm/test-utils';
import { CardContent } from '../src/CardContent';

describe('<CardContent />', () => {
  it('should render', () => {
    customRender(
      <CardContent>
        <div>content</div>
      </CardContent>
    );
    expect(screen.getByText('content')).toBeInTheDocument();
  });
});
