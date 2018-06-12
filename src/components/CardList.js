import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card';
import Loading from './Loading';

const styles = {
  container: {
    width: '80%',
    margin: 'auto',
  }
}

function CardList(props) {
  const { classes, cards, isLoading } = props;

  return (
    <Grid container spacing={24} className={classes.container}>
      {cards.map(card => (
        <Grid item xs={3} key={`card-${card.id}`}>
          <Card {...card} />
        </Grid>
      ))}
      {isLoading && <Loading />}
    </Grid>
  );
}

CardList.propTypes = {
  cards: PropTypes.any,
  isLoading: PropTypes.bool,
}

export default withStyles(styles)(CardList);
