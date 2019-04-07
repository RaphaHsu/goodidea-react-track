import * as React from 'react';
import { BookInformation } from '../models/books-api';
import Card from '@material-ui/core/Card';
import { CardContent, colors, CardMedia } from '@material-ui/core';

const BookInfoComponent = (props: { data: BookInformation }) => {
  return (
    <Card>
      <CardMedia
        style={{ height: 200 }}
        image={props.data.image}
        title={props.data.name}
      />
      <CardContent>
        <div style={{ color: colors.grey[700], fontSize: 14 }}>
          {props.data.ISBN}
        </div>
        <a
          style={{ fontSize: 16, color: colors.grey[900] }}
          href={props.data.link}
          target="_blank"
        >
          {props.data.name}
        </a>
        <div style={{ color: colors.cyan[500], fontSize: 20 }}>
          ${props.data.sellPrice}
        </div>
      </CardContent>
    </Card>
  );
};
export default BookInfoComponent;
