import React from 'react';
import styled from 'styled-components';
import Card, { CardProps } from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const StyledCard = styled(Card)`
  padding: 10px 10px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

type CardBlockProps = {
  title: React.ReactNode;
  subheader?: React.ReactNode;
  children: React.ReactNode;
} & CardProps;

export function CardBlock({
  title,
  subheader,
  children,
  ...props
}: CardBlockProps) {
  return (
    <StyledCard square {...props}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <CardHeader
            title={
              <Typography
                variant="subtitle1"
                data-testid="cardTitle"
                gutterBottom
              >
                {title}
              </Typography>
            }
            subheader={
              <Typography variant="caption" data-testid="cardSubheader">
                {subheader}
              </Typography>
            }
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <CardContent>{children}</CardContent>
        </Grid>
      </Grid>
    </StyledCard>
  );
}
