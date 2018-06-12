import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Loading from '../components/Loading';
import { cardDetailRequested } from '../actions/card';
import * as Status from '../helpers/status';

const styles = {
  container: {
    marginTop: 30,
  },
  detail: {
    padding: 16,
  }
}

class CardDetail extends Component {
  componentDidMount() {
    this.props.actions.cardDetailRequested(this.props.match.url);
  }

  render() {
    if (!this.props.data) return null;
    if (this.props.status === Status.LOADING) return <Loading />;

    const {
      classes,
    } = this.props;

    const {
      name,
      imageUrl,
      text,
    } = this.props.data

    return (
      <Grid container className={classes.container}>
        <Grid item xs={3}>
          <img src={ imageUrl } alt={ name } />
        </Grid>
        <Grid item xs={9}>
          <Paper elevation={4} className={classes.detail}>
            <Typography variant="headline" gutterBottom>
              { name }
            </Typography>
            <Typography variant="body1" gutterBottom>
              { text }
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

CardDetail.proptypes = {
  data: PropTypes.object,
}

export default connect(
  state => ({
    data: state.cardDetail.data,
    status: state.cardDetail.status
  }),
  dispatch => ({
    actions: bindActionCreators({ cardDetailRequested }, dispatch)
  })
)(withStyles(styles)(CardDetail));
