import React from 'react';
import { customRender, screen } from '@pm/test-utils';
import { CardBlock } from '../src/CardBlock';

describe('<CardBlock />', () => {
  it('should render', async () => {
    customRender(
      <CardBlock title="Title" subheader="Subheader">
        <div>Inner</div>
      </CardBlock>
    );

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
    expect(screen.getByText(/subheader/i)).toBeInTheDocument();
    expect(screen.getByText(/inner/i)).toBeInTheDocument();
  });
});
