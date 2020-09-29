import React from 'react';
import { Card } from 'semantic-ui-react';
import CardComponent from '../../../components/Card/Card.component';

const CardGroup = ({ payload }) => {
  return (
    <Card.Group itemsPerRow={4}>
      {payload.map((item) => {
        return <CardComponent key={item.etag} item={item} />;
      })}
    </Card.Group>
  );
};

export default CardGroup;
