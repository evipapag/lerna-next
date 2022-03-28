import React from 'react';
import { customRender, screen } from '@pm/test-utils';
import { CardHeader } from '../src/CardHeader';

describe('<CardHeader />', () => {
  it('should render', () => {
    customRender(<CardHeader title="Title" subtitle="Subtitle" />);
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
  });

  it('should render with no subtitle', () => {
    customRender(<CardHeader title="Title" />);
    expect(screen.queryByText(/subtitle/i)).not.toBeInTheDocument();
  });
});
