import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';

export const Subtitle = styled(Typography)`
  color: rgba(0, 0, 0, 0.38);
  font-size: 13px;
  margin-top: 5px;
`;
const Content = styled(CardContent)`
  padding-left: 4px;
  padding-right: 4px;
`;

type CardHeaderProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
};

export function CardHeader({ title, subtitle }: CardHeaderProps) {
  return (
    <>
      <Content>
        <Grid container alignItems="flex-start" justify="flex-start">
          <Grid item>
            <Typography variant="subtitle1" data-testid="cardTitle">
              {title}
            </Typography>
            {subtitle && (
              <Subtitle data-testid="cardSubtitle">{subtitle}</Subtitle>
            )}
          </Grid>
        </Grid>
      </Content>
      <Divider light />
    </>
  );
}
