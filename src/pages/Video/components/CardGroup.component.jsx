import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import CardComponent from '../../../components/Card/Card.component';

const CardGroup = ({ payload }) => {
  return (
    <Grid.Column width={4}>
      <Card.Group itemsPerRow={1}>
        {payload.map((item) => {
          return <CardComponent key={item.etag} item={item} />;
        })}
      </Card.Group>
    </Grid.Column>
  );
};

export default CardGroup;
