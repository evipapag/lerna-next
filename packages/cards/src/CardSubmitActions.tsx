import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper, { PaperProps } from '@material-ui/core/Paper';

const ActionWrapper = styled(Paper)`
  padding: 8px 12px;
`;

type CardSubmitActionsProps = {
  children?: React.ReactNode;
  containerProps?: PaperProps;
};

export function CardSubmitActions({
  children,
  containerProps
}: CardSubmitActionsProps) {
  return (
    <ActionWrapper square {...containerProps}>
      <Grid container alignItems="center" justify="flex-end">
        {children}
      </Grid>
    </ActionWrapper>
  );
}
