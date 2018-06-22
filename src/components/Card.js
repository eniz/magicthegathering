import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    textDecoration: 'none',
  },
};

function MediaCard(props) {
  const {
    classes,
    id,
    imageUrl,
    name,
  } = props;

  return (
    <Link to={`/${id}`} className={classes.card}>
      <img src={imageUrl} title={name} alt={name} />
    </Link>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(MediaCard);
